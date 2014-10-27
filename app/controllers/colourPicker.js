var args = arguments[0] || {};
var viewHeight = Ti.Platform.displayCaps.platformHeight;
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight); 
var toggleHeight = $.toggle.getHeight();
var canvasHeight =  pHeight - toggleHeight;
 
var colour_lib = Alloy.createCollection('colour'); 
var details = colour_lib.getColourList();

$.mainView.setHeight(viewHeight);
//console.log($.mainView.getHeight());
//$.bottomColorBar.setBottom(0);

//Alloy.Globals.Drawer.setOpenDrawerGestureMode(module.OPEN_MODE_NONE);
//Create a dialog with options
var dialog = Titanium.UI.createOptionDialog({
    //title of dialog
    title: 'Choose an image source...',
    //options
    options: ['Camera','Photo Gallery', 'Cancel'],
    //index of cancel button
    cancel:2
});

$.canvas.addEventListener("load", function(){ 
	Ti.App.fireEvent('web:initCanvasSize', { height: canvasHeight, width: pWidth });
});	

//add event listener
dialog.addEventListener('click', function(e) {
    //if first option was selected
    if(e.index == 0)
    {
        //then we are getting image from camera
        Titanium.Media.showCamera({
            //we got something
            success:function(event)
            {
                //getting media
                var image = event.media; 
                 
                //checking if it is photo
                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                {
                    //we may create image view with contents from image variable
                    //or simply save path to image
                    Ti.App.Properties.setString("colour_picker_image", image.nativePath);
                }
            },
            cancel:function()
            {
                //do somehting if user cancels operation
            },
            error:function(error)
            {
                //error happend, create alert
                var a = Titanium.UI.createAlertDialog({title:'Camera'});
                //set message
                if (error.code == Titanium.Media.NO_CAMERA)
                {
                    a.setMessage('Device does not have camera');
                }
                else
                {
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
                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                {
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

var getColor = function(e){
	//alert(e.r +","+e.g+","+e.b+","+e.a);
	$.colourPicker.backgroundColor = "rgba("+e.r +","+e.g+","+e.b+","+e.a+")";
};
 
Ti.App.addEventListener("app:getColour", getColor);
/**
generateColour();

function generateColour(){
	console.log(details.length);
	var viewWidth = (Math.ceil((details.length+1) / 2) * 50) + 10;
	var topRow = Titanium.UI.createView({
	   layout: 'horizontal',
	   bottom: 10,
	   height: 40,
	   width: viewWidth
	});
	
	var bottomRow = Titanium.UI.createView({
	   layout: 'horizontal',
	   height: 40,
	   width: viewWidth
	});
	
	for (var i=0; i< details.length; i++) {
		//console.log(details[i]);
		var colours =  $.UI.create('View', {  
				backgroundColor: "rgb("+details[i].rgb +")",
				width: "40", 
				height: "40",
				left: "5",
				right: "5"
			});
		if(i%2 == 1)
		{
			topRow.add(colours);
		}
		else
		{
			bottomRow.add(colours);
		}
	}
	$.scrollView.add(topRow);
	$.scrollView.add(bottomRow);
}


/*

var app = {
        sharer: {
            
            chooser: function( content ){
                var intShare = Ti.Android.createIntent({
                    action: Ti.Android.ACTION_SEND,
	                type:"image/*"
                }); 
                intShare.putExtra( Ti.Android.EXTRA_TEXT, "itten kontent" );
                Ti.Android.currentActivity.startActivity( intShare );
            }
        }
};
var MESSAGE = "#sissons_paint";


var btnShareChooser = Ti.UI.createButton({
    title: "Media Share"
});
btnShareChooser.addEventListener( "click", app.sharer.chooser.bind( null, MESSAGE ) );
$.colourPicker.add( btnShareChooser );//change to imageView*/
