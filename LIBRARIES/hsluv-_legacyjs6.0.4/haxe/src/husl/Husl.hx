package husl;
import husl.Geometry;

/**
Human-friendly HSL conversion utility class.

The math for most of this module was taken from:

 * http://www.easyrgb.com
 * http://www.brucelindbloom.com
 * Wikipedia

All numbers below taken from math/bounds.wxm wxMaxima file. We use 17
digits of decimal precision to export the numbers, effectively exporting
them as double precision IEEE 754 floats.

"If an IEEE 754 double precision is converted to a decimal string with at
least 17 significant digits and then converted back to double, then the
final number must match the original"

Source: https://en.wikipedia.org/wiki/Double-precision_floating-point_format
=======
*/

class Husl {

    private static var m = 
        [
            [3.240969941904521, -1.537383177570093, -0.498610760293],
            [-0.96924363628087, 1.87596750150772, 0.041555057407175],
            [0.055630079696993, -0.20397695888897, 1.056971514242878],
        ];

    private static var minv =
        [
            [0.41239079926595, 0.35758433938387, 0.18048078840183],
            [0.21263900587151, 0.71516867876775, 0.072192315360733],
            [0.019330818715591, 0.11919477979462, 0.95053215224966],
        ];

    private static var refY:Float = 1.0;

    private static var refU:Float = 0.19783000664283;
    private static var refV:Float = 0.46831999493879;

    // CIE LUV constants
    private static var kappa:Float = 903.2962962;
    private static var epsilon:Float = 0.0088564516;

    /**
    For a given lightness, return a list of 6 lines in slope-intercept
    form that represent the bounds in CIELUV, stepping over which will
    push a value out of the RGB gamut
    */
    public static function getBounds(L:Float):Array<Line> {
        var result:Array<Line> = [];

        var sub1:Float = Math.pow(L + 16, 3) / 1560896;
        var sub2:Float = sub1 > epsilon ? sub1 : L / kappa;

        for (c in 0...3) {
            var m1:Float = m[c][0];
            var m2:Float = m[c][1];
            var m3:Float = m[c][2];

            for (t in 0...2) {
                var top1:Float = (284517 * m1 - 94839 * m3) * sub2;
                var top2:Float = (838422 * m3 + 769860 * m2 + 731718 * m1) * L * sub2 - 769860 * t * L;
                var bottom:Float = (632260 * m3 - 126452 * m2) * sub2 + 126452 * t;

                result.push({
                    slope: top1 / bottom,
                    intercept: top2 / bottom
                });
            }
        }

        return result;
    }

    /**
    For given lightness, returns the maximum chroma. Keeping the chroma value
    below this number will ensure that for any hue, the color is within the RGB
    gamut.
    */
    public static function maxSafeChromaForL(L:Float):Float {
        var bounds:Array<Line> = getBounds(L);
        // var min:Float = Float.MAX_VALUE;
        var min:Float = 1.7976931348623157e+308;

        for (i in 0...2) {
            var length:Float = Geometry.distanceLineFromOrigin(bounds[i]);
            min = Math.min(min, length);
        }

        return min;
    }

    public static function maxChromaForLH(L:Float, H:Float) {
        var hrad:Float = H / 360 * Math.PI * 2;

        var bounds:Array<Line> = getBounds(L);
        // var min:Float = Float.MAX_VALUE;
        var min:Float = 1.7976931348623157e+308;

        for (bound in bounds) {
            var length:Float = Geometry.lengthOfRayUntilIntersect(hrad, bound);
            if (length >= 0) {
                min = Math.min(min, length);
            }
        }

        return min;
    }

    private static function dotProduct(a:Array<Float>, b:Array<Float>):Float {
        var sum:Float = 0;

        for (i in 0...a.length) {
            sum += a[i] * b[i];
        }

        return sum;
    }

    // Used for rgb conversions
    private static function fromLinear(c:Float):Float {
        if (c <= 0.0031308) {
            return 12.92 * c;
        } else {
            return 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
        }
    }

    private static function toLinear(c:Float):Float {
        if (c > 0.04045) {
            return Math.pow((c + 0.055) / (1 + 0.055), 2.4);
        } else {
            return c / 12.92;
        }
    }

    /**
    * XYZ coordinates are ranging in [0;1] and RGB coordinates in [0;1] range.
    * @param tuple An array containing the color's X,Y and Z values.
    * @return An array containing the resulting color's red, green and blue.
    **/
    public static function xyzToRgb(tuple:Array<Float>):Array<Float> {
        return [                
            fromLinear(dotProduct(m[0], tuple)),
            fromLinear(dotProduct(m[1], tuple)),
            fromLinear(dotProduct(m[2], tuple)),
        ];
    }
    
    /**
    * RGB coordinates are ranging in [0;1] and XYZ coordinates in [0;1].
    * @param tuple An array containing the color's R,G,B values.
    * @return An array containing the resulting color's XYZ coordinates.
    **/
    public static function rgbToXyz(tuple:Array<Float>):Array<Float> {
        var rgbl:Array<Float> = 
                [
                    toLinear(tuple[0]),
                    toLinear(tuple[1]),
                    toLinear(tuple[2]),
                ];

        return [        
            dotProduct(minv[0], rgbl),
            dotProduct(minv[1], rgbl),
            dotProduct(minv[2], rgbl),
        ];
    }

    /*
    http://en.wikipedia.org/wiki/CIELUV
    In these formulas, Yn refers to the reference white point. We are using
    illuminant D65, so Yn (see refY in Maxima file) equals 1. The formula is
    simplified accordingly.
    */
    private static function yToL(Y:Float):Float {
        if (Y <= epsilon) {
            return (Y / refY) * kappa;
        } else {
            return 116 * Math.pow(Y / refY, 1.0 / 3.0) - 16;
        }
    }

    private static function lToY(L:Float):Float {
        if (L <= 8) {
            return refY * L / kappa;
        } else {
            return refY * Math.pow((L + 16) / 116, 3);
        }
    }

    /**
    * XYZ coordinates are ranging in [0;1].
    * @param tuple An array containing the color's X,Y,Z values.
    * @return An array containing the resulting color's LUV coordinates.
    **/
    public static function xyzToLuv(tuple:Array<Float>):Array<Float> {
        var X:Float = tuple[0];
        var Y:Float = tuple[1];
        var Z:Float = tuple[2];

        // This divider fix avoids a crash on Python (divide by zero except.)
        var divider:Float = (X + (15 * Y) + (3 * Z));
        var varU:Float = 4 * X;
        var varV:Float = 9 * Y;

        if (divider != 0) {
            varU /= divider;
            varV /= divider;
        } else {
            varU = Math.NaN;
            varV = Math.NaN;
        }

        var L:Float = yToL(Y);

        if (L == 0) {
            return [0, 0, 0];
        }

        var U:Float = 13 * L * (varU - refU);
        var V:Float = 13 * L * (varV - refV);

        return [L, U, V];
    }

    /**
    * XYZ coordinates are ranging in [0;1].
    * @param tuple An array containing the color's L,U,V values.
    * @return An array containing the resulting color's XYZ coordinates.
    **/
    public static function luvToXyz(tuple:Array<Float>):Array<Float> {
        var L:Float = tuple[0];
        var U:Float = tuple[1];
        var V:Float = tuple[2];

        if (L == 0) {
            return [0, 0, 0];
        }

        var varU:Float = U / (13 * L) + refU;
        var varV:Float = V / (13 * L) + refV;

        var Y:Float = lToY(L);
        var X:Float = 0 - (9 * Y * varU) / ((varU - 4) * varV - varU * varV);
        var Z:Float = (9 * Y - (15 * varV * Y) - (varV * X)) / (3 * varV);

        return [X, Y, Z];
    }

    /**
    * @param tuple An array containing the color's L,U,V values.
    * @return An array containing the resulting color's LCH coordinates.
    **/
    public static function luvToLch(tuple:Array<Float>):Array<Float> {
        var L:Float = tuple[0];
        var U:Float = tuple[1];
        var V:Float = tuple[2];

        var C:Float = Math.sqrt(U * U + V * V);
        var H:Float;

        // Greys: disambiguate hue
        if (C < 0.00000001) {
            H = 0;
        } else {
            var Hrad:Float = Math.atan2(V, U);

            // pi to more digits than they provide it in the stdlib
            H = (Hrad * 180.0) / 3.1415926535897932;

            if (H < 0) {
                H = 360 + H;
            }
        }

        return [L, C, H];
    }

    /**
    * @param tuple An array containing the color's L,C,H values.
    * @return An array containing the resulting color's LUV coordinates.
    **/
    public static function lchToLuv(tuple:Array<Float>):Array<Float> {
        var L:Float = tuple[0];
        var C:Float = tuple[1];
        var H:Float = tuple[2];

        var Hrad:Float = H / 360.0 * 2 * Math.PI;
        var U:Float = Math.cos(Hrad) * C;
        var V:Float = Math.sin(Hrad) * C;

        return [L, U, V];
    }

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100].
    * @param tuple An array containing the color's H,S,L values in Husl color space.
    * @return An array containing the resulting color's LCH coordinates.
    **/
    public static function huslToLch(tuple:Array<Float>):Array<Float> {
        var H:Float = tuple[0];
        var S:Float = tuple[1];
        var L:Float = tuple[2];

        // White and black: disambiguate chroma
        if (L > 99.9999999) {
            return [100, 0, H];
        }

        if (L < 0.00000001) {
            return [0, 0, H];
        }

        var max:Float = maxChromaForLH(L, H);
        var C:Float = max / 100 * S;

        return [L, C, H];
    }

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100].
    * @param tuple An array containing the color's LCH values.
    * @return An array containing the resulting color's HSL coordinates in Husl color space.
    **/
    public static function lchToHusl(tuple:Array<Float>):Array<Float> {
        var L:Float = tuple[0];
        var C:Float = tuple[1];
        var H:Float = tuple[2];

        // White and black: disambiguate chroma
        if (L > 99.9999999) {
            return [H, 0, 100];
        }

        if (L < 0.00000001) {
            return [H, 0, 0];
        }

        var max:Float = maxChromaForLH(L, H);
        var S:Float = C / max * 100;

        return [H, S, L];
    }

    /**
    * Husl values are in [0;360], [0;100] and [0;100].
    * @param tuple An array containing the color's H,S,L values in Huslp (pastel variant) color space.
    * @return An array containing the resulting color's LCH coordinates.
    **/
    public static function huslpToLch(tuple:Array<Float>):Array<Float> {
        var H:Float = tuple[0];
        var S:Float = tuple[1];
        var L:Float = tuple[2];

        if (L > 99.9999999) {
            return [100, 0, H];
        }

        if (L < 0.00000001) {
            return [0, 0, H];
        }

        var max:Float = maxSafeChromaForL(L);
        var C:Float = max / 100 * S;

        return [L, C, H];
    }

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100].
    * @param tuple An array containing the color's LCH values.
    * @return An array containing the resulting color's HSL coordinates in Huslp (pastel variant) color space.
    **/
    public static function lchToHuslp(tuple:Array<Float>):Array<Float> {
        var L:Float = tuple[0];
        var C:Float = tuple[1];
        var H:Float = tuple[2];

        // White and black: disambiguate saturation
        if (L > 99.9999999) {
            return [H, 0, 100];
        }

        if (L < 0.00000001) {
            return [H, 0, 0];
        }

        var max:Float = maxSafeChromaForL(L);
        var S:Float = C / max * 100;

        return [H, S, L];
    }

    /**
    * RGB values are ranging in [0;1].
    * @param tuple An array containing the color's RGB values.
    * @return A string containing a `#RRGGBB` representation of given color.
    **/
    public static function rgbToHex(tuple:Array<Float>):String {
        var h:String = "#";

        for (i in 0...tuple.length) {
            var chan:Float = tuple[i];
            h += StringTools.hex(Math.round(chan * 255), 2).toLowerCase();
        }

        return h;
    }

    /**
    * RGB values are ranging in [0;1].
    * @param hex A `#RRGGBB` representation of a color.
    * @return An array containing the color's RGB values.
    **/
    public static function hexToRgb(hex:String):Array<Float> {
        // toUpperCase because some targets such as lua have hard time parsing hex code with various cases
        hex = hex.toUpperCase();
        return [
            Std.parseInt("0x"+hex.substr(1, 2)) / 255.0,
            Std.parseInt("0x"+hex.substr(3, 2)) / 255.0,
            Std.parseInt("0x"+hex.substr(5, 2)) / 255.0,
        ];
    }

    /**
    * RGB values are ranging in [0;1].
    * @param tuple An array containing the color's LCH values.
    * @return An array containing the resulting color's RGB coordinates.
    **/
    public static function lchToRgb(tuple:Array<Float>):Array<Float> {
        return xyzToRgb(luvToXyz(lchToLuv(tuple)));
    }

    /**
    * RGB values are ranging in [0;1].
    * @param tuple An array containing the color's RGB values.
    * @return An array containing the resulting color's LCH coordinates.
    **/
    public static function rgbToLch(tuple:Array<Float>):Array<Float> {
        return luvToLch(xyzToLuv(rgbToXyz(tuple)));
    }

    // RGB <--> HUSL(p)

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].
    * @param tuple An array containing the color's HSL values in Husl color space.
    * @return An array containing the resulting color's RGB coordinates.
    **/
    @:keep
    public static function huslToRgb(tuple:Array<Float>):Array<Float> {
        return lchToRgb(huslToLch(tuple));
    }

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].
    * @param tuple An array containing the color's RGB coordinates.
    * @return An array containing the resulting color's HSL coordinates in Husl color space.
    **/
    @:keep
    public static function rgbToHusl(tuple:Array<Float>):Array<Float> {
        return lchToHusl(rgbToLch(tuple));
    }

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].
    * @param tuple An array containing the color's HSL values in Huslp (pastel variant) color space.
    * @return An array containing the resulting color's RGB coordinates.
    **/
    @:keep
    public static function huslpToRgb(tuple:Array<Float>):Array<Float> {
        return lchToRgb(huslpToLch(tuple));
    }

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].
    * @param tuple An array containing the color's RGB coordinates.
    * @return An array containing the resulting color's HSL coordinates in Huslp (pastel variant) color space.
    **/
    @:keep
    public static function rgbToHuslp(tuple:Array<Float>):Array<Float> {
        return lchToHuslp(rgbToLch(tuple));
    }

    // Hex

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].
    * @param tuple An array containing the color's HSL values in Husl color space.
    * @return A string containing a `#RRGGBB` representation of given color.
    **/
    @:keep
    public static function huslToHex(tuple:Array<Float>):String {
        return rgbToHex(huslToRgb(tuple));
    }

    @:keep
    public static function huslpToHex(tuple:Array<Float>):String {
        return rgbToHex(huslpToRgb(tuple));
    }

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].
    * @param tuple An array containing the color's HSL values in Huslp (pastel variant) color space.
    * @return An array containing the color's HSL values in Husl color space.
    **/
    @:keep
    public static function hexToHusl(s:String):Array<Float> {
        return rgbToHusl(hexToRgb(s));
    }

    /**
    * Husl values are ranging in [0;360], [0;100] and [0;100] and RGB in [0;1].
    * @param hex A `#RRGGBB` representation of a color.
    * @return An array containing the color's HSL values in Huslp (pastel variant) color space.
    **/
    @:keep
    public static function hexToHuslp(s:String):Array<Float> {
        return rgbToHuslp(hexToRgb(s));
    }

}
