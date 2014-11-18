var args = arguments[0] || {};

var fb = require('facebook');
fb.appid = 752094718209236;

var viewHeight = Ti.Platform.displayCaps.platformHeight;
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight); 
var toggleHeight = $.toggle.getHeight();
var canvasHeight =  pHeight - toggleHeight;
 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour'); 
var details = "";//colour_lib.getColourList(); //original

var library = Alloy.createCollection('category'); 
var recommended = library.getCategoryListByType(1);

$.colorSelection.hide();

setTimeout(function(){
	takePhoto();
}, 800);

function takePhoto()
{
	var dialog = Titanium.UI.createOptionDialog({ 
	    title: 'Choose an image source...', 
	    options: ['Camera','Photo Gallery', 'Cancel'], 
	    cancel:2
	});

	//add event listener
	dialog.addEventListener('click', function(e) { 
	    if(e.index == 0){ 
	        Titanium.Media.showCamera({
	            //we got something
	            success:function(event) {
	                //getting media
	                var image = event.media; 
	                 
	                //checking if it is photo
	                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
	                {
	                    //we may create image view with contents from image variable
	                    //or simply save path to image
	                    Ti.App.Properties.setString("colour_picker_image", image.nativePath);
	                    Ti.App.fireEvent('web:loadImage', { image: image.nativePath });
	                }
	                 
	            },
	            cancel:function() {
	                //do somehting if user cancels operation
	            },
	            error:function(error) {
	                //error happend, create alert
	                var a = Titanium.UI.createAlertDialog({title:'Camera'});
	                //set message
	                if (error.code == Titanium.Media.NO_CAMERA) {
	                    a.setMessage('Device does not have camera');
	                }
	                else {
	                    a.setMessage('Unexpected error: ' + error.code);
	                }
	 
	                // show alert
	                a.show();
	            },
	            allowImageEditing:true,
	            saveToPhotoGallery:true
	        });
	    }
	    else if(e.index == 1)
	    {
	        //obtain an image from the gallery
	        Titanium.Media.openPhotoGallery({
	            success:function(event)
	            {
	                //getting media
	                var image = event.media; 
	                // set image view
	                 
	                //checking if it is photo
	                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
	                    //we may create image view with contents from image variable
	                    //or simply save path to image
	               
	                    Ti.App.Properties.setString("colour_picker_image", image.nativePath);
	                   
	                    Ti.App.fireEvent('web:loadImage', { image: image.nativePath });
	                }   
	            },
	            cancel:function()
	            {
	                //user cancelled the action fron within
	                //the photo gallery
	            }
	        });
	    }
	    else
	    {
	        //cancel was tapped
	        //user opted not to choose a photo
	    }
	});
	 
	//show dialog
	dialog.show();
}

function toggleActivation()
{
	if ($.colorSelection.visible) {
		$.colorSelection.hide();
	} else {
		$.colorSelection.show();
	}
}
 
$.canvas.addEventListener("load", function(){ 
	$.colorSelection.hide();
	Ti.App.fireEvent('web:initCanvasSize', { height: canvasHeight, width: pWidth });
});	

//show dialog
if(Ti.App.Properties.getString('back') == 1){
	Ti.App.Properties.setString('back', 0);
} 

generateRecommended();

var getColor = function(e){
	$.activityIndicator.show();
	$.loadingBar.opacity = "1";
	$.loadingBar.height = "120";
	$.loadingBar.top = ((PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2)-($.loadingBar.getHeight()/2));
	
	$.colorSelection.hide();
	details = colour_lib.getClosestColourList(e.r,e.g,e.b); //edited by Moo
 
	generateColour();
};
 
Ti.App.addEventListener("app:getColour", getColor);

function generateRecommended(){
	var random = Math.floor((Math.random() * recommended.length));
	var list_colours = category_colour_lib.getCategoryColourByCategory(recommended[random].id);
	var viewWidth = (Math.ceil((list_colours.length)) * 50) + 10;
	var recommendedRow = Titanium.UI.createView({
	   layout: 'horizontal',
	   bottom: 10,
	   height: 40,
	   width: viewWidth
	});
	
	for (var j=0; j<list_colours.length; j++)
	{
		var colour_details = colour_lib.getColourById(list_colours[j].colour_id);
		
		var colours;
		
		if(colour_details.thumb != ""){
	  		colours = $.UI.create('ImageView', {  
				image: colour_details.thumb,
				borderColor: "#A5A5A5",
				borderWidth: 1,
				width: "40", 
				height: "40",
				left: "5",
				right: "5"
			});
	  	}else{
	  		 colours = $.UI.create('View', {  
				backgroundColor: "rgb("+colour_details.rgb +")",
				borderColor: "#A5A5A5",
				borderWidth: 1,
				width: "40", 
				height: "40",
				left: "5",
				right: "5"
			});
	  	}
		
		var cat_colour = category_colour_lib.getCateByColourId(colour_details.id);
		var cat_details = library.getCategoryById(cat_colour.cate_id, "2");
		
		createColorEvent(colours, colour_details, cat_details);
		recommendedRow.add(colours);	
	}
		
	$.recommendView.add(recommendedRow);
}

function generateColour(){
	 
	removeAllChildren($.scrollView);
	var viewWidth = (details.length * 50) + 20;
	
	var closestRow = Titanium.UI.createView({
	   layout: 'horizontal',
	   height: 40,
	   width: viewWidth
	});
	
	console.log("details: "+details.length);
	
	for (var i=0; i< details.length; i++) {
		var colours;
		
		if(details[i].thumb != ""){
	  		colours = $.UI.create('ImageView', {  
				image: details[i].thumb,
				borderColor: "#A5A5A5",
				borderWidth: 1,
				width: "40", 
				height: "40",
				left: "5",
				right: "5"
			});
	  	}else{
	  		 colours = $.UI.create('View', {  
				backgroundColor: "rgb("+details[i].rgb +")",
				borderColor: "#A5A5A5",
				borderWidth: 1,
				width: "40", 
				height: "40",
				left: "5",
				right: "5"
			});
	  	}
		
		var cat_colour = category_colour_lib.getCateByColourId(details[i].id);
		var cat_details = library.getCategoryById(cat_colour.cate_id, "2");
			
			
		createColorEvent(colours, details[i], cat_details);
		
		closestRow.add(colours);
	}
	$.loadingBar.opacity = "0";
	$.loadingBar.height = "0";
	$.loadingBar.top = "0";
	$.scrollView.add(closestRow);
	$.colorSelection.show();
}

var app = {
	sharer: {
		chooser: function( content ){
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
    }
};

function shareFacebook()
{
	var f = Ti.Filesystem.getFile('file:///storage/sdcard0/Pictures/Survival Wallpaper/1380785291867.jpg');
	var blob = f.read();
  	var data = {
  		message : 'Sissons Paints Omnicolor',
  		picture : blob
  	};
  	
  	fb.requestWithGraphPath('me/photos', data, 'POST', function(e){
	  	if (e.success && e.result)
	   	{
	   		alert("Success : " + e.result);
	   	}	
	   	else
	   	{
	   		if (e.error) {
	   			alert(e.error);
	   		}
	   		else
	   		{
	   			alert('cancel');
	   		}
	   	} 
  	}); 	
}

var MESSAGE = "#sissons_paint";

function savePicture(e){
	
	var image1 = Ti.UI.createImageView({
	    image: "https://i1.sndcdn.com/avatars-000019461253-59ynf1-t500x500.jpg",
	    width: 250,  
	    height: 250
	    });
	
	var f = image1.toBlob();
	Titanium.Media.saveToPhotoGallery(f);
	alert('Success');
}

function createColorEvent(colours, colour_details, details){
	colours.addEventListener( "click", function(){
		Ti.App.Properties.setString('from', 'colourPicker');
		var nav = Alloy.createController("colourDetails",{colour_details:colour_details, details:details}).getView(); 
		//Alloy.Globals.Drawer.setCenterWindow(nav);
		nav.open();
	});
}

/****************Tutorial View***************/
//$.win.show();
$.win.hide();

var removeIcon = Ti.UI.createImageView({
	   				image: "/images/icon_remove.png", 
	   				width:30, 
	   				height:30,
	   				top:0, 
	   				right:0
	   			});

$.view3.add(removeIcon);

removeIcon.addEventListener( "click", function(){
	$.win.hide();
	console.log($.checkBox.value);
});