$.drawer.open({
	navBarHidden: true,
	fullscreen: true
});
Ti.App.Properties.setString('module', 'index');
var API = require('api');
var flag =0;	
// Load API function

setTimeout(function(){
	API.loadColour();
	API.loadStoreLocator();
	API.loadBrochure();
	API.loadCategory();
}, 1500);


function toggle(e) {
   $.drawer['toggleLeftWindow']();
}
Alloy.Globals.Drawer = $.drawer;
function doMenuClick(e){
	switch(e.index){
		
		case 0: 
			navigation('diyPaint');
			break;
		case 1: 
			navigation('colourPicker');
			break;
		case 2: 
			navigation('colourSwatches');
			break;
		case 3: 
			navigation('brochure');
			break;
		case 4: 
			navigation('storeLocator');
			break;
		case 5: 
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
	mod = Ti.App.Properties.getString('module');
	if(mod == "storeLocator"){
		Ti.App.Properties.setString('module', 'index');
		var nav = Alloy.createController("storeLocator").getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);  
	}else{
		//Alloy.Globals.Drawer['toggleLeftWindow']();
		var dialog = Ti.UI.createAlertDialog({
		    cancel: 1,
		    buttonNames: ['Cancel','Confirm'],
		    message: 'Would you like to exit Sissons Paint?',
		    title: 'Exit app'
		  });
		  dialog.addEventListener('click', function(e){
		  
		    if (e.index === e.source.cancel){
		      //Do nothing
		    }
		    if (e.index === 1){
		    	var activity = Titanium.Android.currentActivity;
				activity.finish();
		    }
		  });
		  dialog.show(); 
	}
  	
});

var module= require('dk.napp.drawer'); 
