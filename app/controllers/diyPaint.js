var args = arguments[0] || {};
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
var toolbarHeight = $.toolbar.rect.height;
var toggleHeight = $.toggle.getHeight();

$.toolbar.addEventListener('postlayout', function(e) {
	console.log(pWidth);
	console.log(PixelsToDPUnits(pWidth));
	toolbarHeight = $.toolbar.rect.height;
	var canvasHeight = pHeight - toolbarHeight - 48 - toggleHeight;
	$.canvas.setBottom(toolbarHeight);
	$.canvas.setHeight(canvasHeight);
});
	
Ti.API.info('Ti.Platform.displayCaps.density: ' + Ti.Platform.displayCaps.density);
Ti.API.info('Ti.Platform.displayCaps.dpi: ' + Ti.Platform.displayCaps.dpi);
Ti.API.info('Ti.Platform.displayCaps.platformHeight: ' + Ti.Platform.displayCaps.platformHeight);
Ti.API.info('Ti.Platform.displayCaps.platformWidth: ' + Ti.Platform.displayCaps.platformWidth);
if(Ti.Platform.osname === 'android'){
  Ti.API.info('Ti.Platform.displayCaps.xdpi: ' + Ti.Platform.displayCaps.xdpi);
  Ti.API.info('Ti.Platform.displayCaps.ydpi: ' + Ti.Platform.displayCaps.ydpi);
  Ti.API.info('Ti.Platform.displayCaps.logicalDensityFactor: ' + Ti.Platform.displayCaps.logicalDensityFactor);
}

function PixelsToDPUnits(ThePixels)
{
  return (ThePixels / (Titanium.Platform.displayCaps.dpi / 160));
}
 
 
function DPUnitsToPixels(TheDPUnits)
{
  return (TheDPUnits * (Titanium.Platform.displayCaps.dpi / 160));
}
