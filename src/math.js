/**
 * 角度值 转 弧度值
 * @param {number} deg 角度值
 * @return 弧度值
 */
export function deg2rad(deg) {
  return (deg * Math.PI) / 180;
}

/**
 * 弧度值 转 角度值
 * @param {number} rad 弧度值
 * @return 角度值
 */
export function rad2deg(rad) {
  return (rad / Math.PI) * 180;
}
