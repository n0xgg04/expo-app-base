/**
 * converts string `height` from percentage e.g `'50%'` to pixel unit e.g `320` relative to `containerHeight`,
 * or also clamps it to not exceed `containerHeight` if it's a number.
 *
 * _Note: When `height` > `containerHeight` and `containerHeight` === `SCREEN_HEIGHT`, and handle
 * bar is visible, we want to set `height` to `SCREEN_HEIGHT`
 * but deducting the height of handle bar so it's still visible._
 * @param {string | number} height height in number percentage string
 * @param {number} containerHeight height to convert and clamp relative to
 * @param {boolean} handleBarHidden Used to determine how height clamping is done
 * @returns {number} converted height
 */
declare const convertHeight: (height: string | number, containerHeight: number, handleBarHidden: boolean) => number;
export default convertHeight;
//# sourceMappingURL=convertHeight.d.ts.map