var args = arguments[0] || {};
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
var toolbarHeight = $.toolbar.rect.height;
var toggleHeight = $.toggle.getHeight();
var canvasHeight = 0;

$.toolbar.addEventListener('postlayout', function(e) { 
	toolbarHeight = $.toolbar.rect.height;
	canvasHeight = pHeight - toolbarHeight - 25 - toggleHeight;
	console.log("page height: "+pHeight+", toolbar:"+toolbarHeight+", toggle"+toggleHeight+", canvas:"+canvasHeight);
	$.canvas.setBottom(toolbarHeight);
	$.canvas.setHeight(canvasHeight);
});
	
$.canvas.addEventListener("load", function(){
	console.log(canvasHeight);
	console.log(pWidth);
	Ti.App.fireEvent('web:initCanvasSize', { height: canvasHeight, width: pWidth });
});	

function PixelsToDPUnits(ThePixels)
{
  return (ThePixels / (Titanium.Platform.displayCaps.dpi / 160));
}
 
 
function DPUnitsToPixels(TheDPUnits)
{
  return (TheDPUnits * (Titanium.Platform.displayCaps.dpi / 160));
}

function toolspop(e){
	var row1 = Ti.UI.createTableViewRow({
	    title: 'Bucket',
	    width: 150,
	    left: 10,
	    touchEnabled: true,
	    height: 60
	  });
	  
	var row2 = Ti.UI.createTableViewRow({
	    title: 'Brush',
	    width: 150,
	    left: 10,
	    touchEnabled: true,
	    height: 60
	  });
	  
	var row3 = Ti.UI.createTableViewRow({
	    title: 'Eraser',
		width: 150,
		left: 10,
	    touchEnabled: true,
	    height: 60
	  });
	
	var tableData = [];
	
	tableData.push(row1);
	tableData.push(row2);
	tableData.push(row3);
	
	var table = Titanium.UI.createTableView({
		separatorColor: 'transparent',
		backgroundImage: '/images/pop_window.png',
		height: Ti.UI.SIZE,
		width: 150,
		bottom: 60,
		overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
		data: tableData
	});
	
	$.diyPaint.add(table);
	
	table.addEventListener('click', function(e){
		console.log(e.index);
		if(e.index == 0){
			Ti.App.fireEvent('web:changeTools', { tools: "bucket" });
			$.tools.image = "/images/icon_bucket.png";
		}
		if(e.index == 1){
			Ti.App.fireEvent('web:changeTools', { tools: "brush" });
			$.tools.image = "/images/icon_brush.png";
		}
		if(e.index == 2){
			$.tools.image = "/images/icon_erase.png";
		}
		$.diyPaint.remove(table);
	});
}

function photoPop(e){
	//Create a dialog with options
	var dialog = Titanium.UI.createOptionDialog({
	    //title of dialog
	    title: 'Choose an image source...',
	    //options
	    options: ['Camera','Photo Gallery', 'Cancel'],
	    //index of cancel button
	    cancel:2
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
	                    Ti.App.Properties.setString("image", image.nativePath);
	                    Ti.App.fireEvent('web:loadImage', { image: image.nativePath });
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
	                    Ti.App.Properties.setString("image", image.nativePath);
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


