var args = arguments[0] || {};
var imgPath   = args.imgPath;
var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
var pWidth = PixelsToDPUnits(Ti.Platform.displayCaps.platformWidth);
var fb = require('facebook');
fb.appid = 752094718209236;
 
$.saveImage.width = pWidth;
$.saveImage.height = pHeight - 140;
$.saveImage.image = imgPath;

$.activityIndicator.show();
$.loadingBar.opacity = "1";
$.loadingBar.height = "120";
$.loadingBar.top = ((pHeight/2)-($.loadingBar.getHeight()/2));


$.shareView.addEventListener("load", function(){ 
	shareFunction();
});	

function shareFunction(e)
{
	if (fb.loggedIn)
			{
		  		shareFacebook();
		  	}
		  	else
		  	{
		  		$.loadingBar.hide();
		  		$.loadingBar.opacity = "0";
		  		fb.permissions = ['publish_actions'];
          		fb.addEventListener('login', function(e){
          			if (e.success){
          				$.loadingBar.show();
          				$.loadingBar.opacity = "1";
         				shareFacebook();	
              		}
          		});
		  		fb.authorize();
			}
}

function shareFacebook(){
	var f = Ti.Filesystem.getFile(imgPath);
	var blob = f.read();
  	var data = {
  	//	message : 'Sissons Omnicolor',
  		picture : blob
  	};
  	
  	fb.requestWithGraphPath('me/photos', data, 'POST', function(e){
	  	if (e.success && e.result)
	   	{
	   		$.loadingBar.hide();
	   		$.loadingBar.opacity = "0"; 
	   		alert("You have shared successfully on Facebook.");
	   	}	
	   	else
	   	{
	   		if (e.error) {
	   			$.loadingBar.hide();
	   			$.loadingBar.opacity = "0";
	   			alert(e.error); 
	   		}
	   		else
	   		{
	   			$.loadingBar.hide();
	   			$.loadingBar.opacity = "0";
	   			alert('cancel');
	   		}
	   	} 
  	}); 
  	
  	imgPath = "";	
}

$.sharePage.addEventListener('android:back', function (e) {
	$.sharePage.close();
	var nav = Alloy.createController("diyPaint").getView(); 
	Alloy.Globals.Drawer.setCenterWindow(nav);  
});