
Ti.App.Properties.setString('module', 'index');
Ti.App.Properties.setString('from', 'index');

Ti.App.Properties.setString('loadStoreLocator', '0');
Ti.App.Properties.setString('loadBrochure', '0');
Ti.App.Properties.setString('loadColour', '0');
Ti.App.Properties.setString('loadCategory', '0');

var API = require('api');
var flag =0;	

$.activityIndicator.show();
$.loadingBar.opacity = "1";
$.loadingBar.height = "120";
$.loadingBar.top = "100";
	
// Load API function

setTimeout(function(){
	
	var clickTime = Ti.App.Properties.getString('clickTime');
  	var currentTime = printDate();
	if (currentTime - clickTime > 1800) {
		API.loadStoreLocator();
		API.loadBrochure();
		API.loadColour();
		API.loadCategory();
	}else{
		Ti.App.Properties.setString('loadStoreLocator', '1');
		Ti.App.Properties.setString('loadBrochure', '1');
		Ti.App.Properties.setString('loadColour', '1');
		Ti.App.Properties.setString('loadCategory', '1');
	}
	Ti.App.Properties.setString('clickTime',currentTime);	
	
	checkLoadStatus();
}, 500);

function checkLoadStatus(){
	var loadStoreLocator = Ti.App.Properties.getString('loadStoreLocator');
	var loadBrochure = Ti.App.Properties.getString('loadBrochure');
	var loadColour = Ti.App.Properties.getString('loadColour');
	var loadCategory = Ti.App.Properties.getString('loadCategory');

	if(loadStoreLocator == "1" && loadBrochure == "1" && loadColour == "1" && loadCategory == "1"){
		
		//$.loadingBar.opacity = "0";
		var nav = Alloy.createController("colourSwatches").getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);  
		$.drawer.open({
			navBarHidden: true,
			fullscreen: true
		});
	}else{
		setTimeout(function(){
			checkLoadStatus();
		}, 500);	
	}
	
	
}

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
			navigation('favourite');
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
	mod = Ti.App.Properties.getString('module');
	if(mod == "storeLocator"){
		Ti.App.Properties.setString('module', 'index');
		var nav = Alloy.createController("storeLocator").getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);  
	}else if(mod == "search"){
		from = Ti.App.Properties.getString('from');
		Ti.App.Properties.setString('module', 'index');
		var nav = Alloy.createController(from).getView(); 
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
