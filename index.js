/**
 * Convert hex color to rgb.
 * @param  {String} hex Hex color
 * @return {Object}     RGB color
 */
function convertToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Convert hex color to rgba.
 * @param  {String} hex     Hex color
 * @param  {Number} opacity Opacity
 * @return {String}         rgba() functional notation
 */
function rgba(hex, opacity) {
  var color = convertToRgb(hex);
  return color ?
    'rgba(' + [color.r, color.g, color.b].join(', ') + ', ' + opacity  + ')' :
    'NotAHex';
}

exports.default = rgba;
module.exports = exports['default'];
