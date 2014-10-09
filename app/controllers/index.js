$.drawer.open({
	navBarHidden: true,
	fullscreen: true
});
var API = require('api');
var flag =0;	
// Load API function
API.loadStoreLocator();
API.loadBrochure();
API.loadColour();

function toggle(e) {
   //var fn = 'toggle' + e.source.title + 'Window'; 
   //$.drawer[fn]();
   $.drawer['toggleLeftWindow']();
}
Alloy.Globals.Drawer = $.drawer;
function doMenuClick(e){
	switch(e.index){
		case 0:
			navigation('home');
			break;
		case 1: 
			navigation('diyPaint');
			break;
		case 2: 
			navigation('colourPicker');
			break;
		case 3: 
			navigation('colourSwatches');
			break;
		case 4: 
			navigation('brochure');
			break;
		case 5: 
			navigation('storeLocator');
			break;
		case 6: 
			navigation('aboutUs');
			break;
	}
	 
}

function navigation(target){
	var win = Alloy.createController(target).getView();
	Alloy.Globals.Drawer.setCenterWindow(win); 
	Alloy.Globals.Drawer.closeLeftWindow();
}


$.drawer.addEventListener('android:back', function (e) {
	if(flag == 1){
		var nav = Alloy.createController("storeLocator").getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);  
	}else{
		var nav = Alloy.createController("home").getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);  
	}
  	
});