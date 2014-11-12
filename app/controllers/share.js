var args = arguments[0] || {};
var imgPath   = args.imgPath;
var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-60;
var fb = require('facebook');
fb.appid = 752094718209236;

console.log(imgPath);
$.saveImage.width = pHeight;
$.saveImage.image = imgPath;
 
function share(e){
	if (fb.loggedIn)
			{
		  		shareFacebook();
		  	}
		  	else
		  	{
		  		fb.permissions = ['publish_actions'];
          		fb.addEventListener('login', function(e){
          			if (e.success){
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
	   	{ 
	   		console.log("Success : " + e.result);
	   		alert("Successfully posted on Facebook");
	   	}	
	   	else
	   	{
	   		if (e.error) { 
	   		} else {
	   			alert('cancel');
	   		}
	   	} 
  	}); 
  	
  	imgPath = "";	
}
 
