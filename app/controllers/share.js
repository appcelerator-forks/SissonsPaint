var args = arguments[0] || {};
var imgPath   = args.imgPath;
var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
var pWidth = PixelsToDPUnits(Ti.Platform.displayCaps.platformWidth);
var fb = require('facebook');
fb.appid = 752094718209236;

console.log(imgPath);
$.saveImage.width = pWidth;
$.saveImage.height = pHeight;
$.saveImage.image = imgPath;
<<<<<<< HEAD

$.activityIndicator.show();
$.loadingBar.opacity = "1";
$.loadingBar.height = "120";
$.loadingBar.top = ((pHeight/2)-($.loadingBar.getHeight()/2));
shareFunction();

function shareFunction(e)
{
=======
 
function share(e){
>>>>>>> FETCH_HEAD
	if (fb.loggedIn)
			{
		  		shareFacebook();
		  	}
		  	else
		  	{
		  		$.loadingBar.hide();
		  		fb.permissions = ['publish_actions'];
          		fb.addEventListener('login', function(e){
          			if (e.success){
          				$.loadingBar.show();
         				shareFacebook();	
              		}
          		});
		  		fb.authorize();
			}
}

function shareFacebook()
{
	var f = Ti.Filesystem.getFile(imgPath);
	var blob = f.read();
  	var data = {
  		message : 'Sissons Omnicolor',
  		picture : blob
  	};
  	
  	fb.requestWithGraphPath('me/photos', data, 'POST', function(e){
	  	if (e.success && e.result)
<<<<<<< HEAD
	   	{
	   		$.loadingBar.hide();
	   		//alert("Success : " + e.result);
=======
	   	{ 
>>>>>>> FETCH_HEAD
	   		console.log("Success : " + e.result);
	   		alert("Successfully posted on Facebook");
	   	}	
	   	else
	   	{
<<<<<<< HEAD
	   		if (e.error) {
	   			$.loadingBar.hide();
	   			alert(e.error);
	   			console.log(e.error);
	   		}
	   		else
	   		{
	   			$.loadingBar.hide();
=======
	   		if (e.error) { 
	   		} else {
>>>>>>> FETCH_HEAD
	   			alert('cancel');
	   		}
	   	} 
  	}); 
  	
  	imgPath = "";	
<<<<<<< HEAD
}
=======
}
 
>>>>>>> FETCH_HEAD
