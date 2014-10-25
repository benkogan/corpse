
var PIXEL_RATIO = (function(){
  var ctx = document.createElement('canvas').getContext('2d');
  var dpr = window.devicePixelRatio || 1;
  var bsr = ctx.webkitBackingStorePixelRatio
         || ctx.mozBackingStorePixelRatio
         || ctx.msBackingStorePixelRatio
         || ctx.oBackingStorePixelRatio
         || ctx.backingStorePixelRatio
         || 1;
  return dpr / bsr;
})();

function createHiDPICanvas(id, w, h, ratio) {
  var canvas;
  if (!ratio) ratio = PIXEL_RATIO;
  canvas = document.getElementById(id);
  canvas.width = w * ratio;
  canvas.height = h * ratio;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
  return canvas;
}

module.exports.createHiDPICanvas = createHiDPICanvas;

