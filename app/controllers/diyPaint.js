var args = arguments[0] || {};
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
var toolbarHeight = $.toolbar.rect.height;
var toggleHeight = $.toggle.getHeight();
var canvasHeight = 0;
var bucketWidth = $.slider.value;
var brushWidth = 10;
var eraseWidth = 10;
var tools = "bucket";
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour'); 
var library = Alloy.createCollection('category'); 
var favourite_lib = Alloy.createCollection('favourite');
var list_favourite = favourite_lib.getFavouriteList();
var list_category = library.getCategoryListByType(2);
var list_colours = colour_lib.getColourList();
var sizeShow = 0;
var colorShow = 0;
var filterFlag = 0;

// takePhoto();
	 
$.toolbar.addEventListener('postlayout', function(e) { 
	toolbarHeight = $.toolbar.rect.height;
	canvasHeight = pHeight - toolbarHeight - 25 - toggleHeight;
	$.canvas.setBottom(toolbarHeight);
	$.canvas.setHeight(canvasHeight);
});
	
$.canvas.addEventListener("load", function(){ 
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

function sizePop(e){
	 var animation = Titanium.UI.createAnimation({
					    bottom: e,
					    duration:500,
					    curve: Titanium.UI.ANIMATION_CURVE_LINEAR
					});
	$.sizeBar.animate(animation);
}

function share(e){
	Ti.App.fireEvent('web:saveAndShare');
}

function saveToGallery(e)
{
	
}

function slideUp(e){
	var bottom = 0;
	if(e.source.mod == "color"){
		if(colorShow){
			colorSwatches(-330);
			colorShow = 0;
		}else{
			colorSwatches(60);
			colorShow = 1;
		}
		sizeShow = 0;
		sizePop(0); 
	}else{
		if(sizeShow){
			sizePop(0);
			sizeShow = 0;
		}else{
			sizePop(60);
			sizeShow = 1;
		}
		colorShow = 0;
		colorSwatches(-330); 
	}
}

function colorSwatches(e){
	 var animation = Titanium.UI.createAnimation({
					    bottom: e,
					    duration:500,
					    curve: Titanium.UI.ANIMATION_CURVE_LINEAR
					});
	$.colorSwatches.animate(animation);
}

var tableData = [];

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
	
var tableListener = function(e){
	filterFlag = 0;
	$.diyPaint.remove(table);
	if(e.index == 0){
		tools = "bucket";
		$.slider.setValue(bucketWidth);
		Ti.App.fireEvent('web:setSensetive', { value: bucketWidth });
		Ti.App.fireEvent('web:changeTools', { tools: "bucket" });
		$.tools.image = "/images/icon_bucket.png";
	}
	if(e.index == 1){
		tools = "brush";
		$.slider.setValue(brushWidth);
		Ti.App.fireEvent('web:setStroke', { value: brushWidth });
		Ti.App.fireEvent('web:changeTools', { tools: "brush" });
		$.tools.image = "/images/icon_brush.png";
	}
	if(e.index == 2){
		tools = "erase";
		$.slider.setValue(eraseWidth);
		Ti.App.fireEvent('web:setStroke', { value: eraseWidth });
		Ti.App.fireEvent('web:changeTools', { tools: "erase" });
		$.tools.image = "/images/icon_erase.png";
	}
};
	
function toolspop(e){
	
	closeWindow();
	if(filterFlag == 1) {
		filterFlag = 0;
		$.diyPaint.remove(table);
	}else {
		filterFlag = 1;
		
		$.diyPaint.add(table);
		table.addEventListener('click', tableListener);
		
	}
}

var closeWindow = function(e){
	table.removeEventListener('click', tableListener);
};


function updateAdjustment(e){
	if(tools == "bucket"){
		bucketWidth = parseInt(e.value);
		Ti.App.fireEvent('web:setSensetive', { value: bucketWidth });
	}else if(tools == "brush"){
		brushWidth = parseInt(e.value);
		Ti.App.fireEvent('web:setStroke', { value: brushWidth });
	}else if(tools == "erase"){
		eraseWidth = parseInt(e.value);
		Ti.App.fireEvent('web:setStroke', { value: eraseWidth });
	}
}

function takePhoto(){
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
	    	Ti.App.fireEvent('foo', {name:'bar'});
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
	                    console.log(image.nativePath);
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

function fireLoadImage(e)
{
	console.log('fireLoadImage');
	Ti.App.fireEvent('foo', {name:'bar'});
	console.log('fireLoadImage2');
}


// generateFavourite();
// generateColour();

function generateFavourite(){
	var viewWidth = (Math.ceil((list_favourite.length)) * 50) + 10;
	var favouriteRow = Titanium.UI.createView({
	   layout: 'horizontal',
	   bottom: 10,
	   height: 40,
	   width: viewWidth
	});
	
	for (var j=0; j<list_favourite.length; j++)
	{
		var colour_details = colour_lib.getColourById(list_favourite[j].colour_id);
		
		var colours =  $.UI.create('View', {  
			backgroundColor: "rgb("+colour_details.rgb +")",
			borderColor: "#A5A5A5",
			borderWidth: 1,
			width: "40", 
			height: "40",
			left: "5",
			right: "5"
		});
		
		createColorEvent(colours, colour_details);
		favouriteRow.add(colours);	
	}
	$.recommendView.add(favouriteRow);
}

function createColorEvent(colours, colour_details){
	colours.addEventListener( "click", function(){
		var rgbArray = colour_details.rgb.split(',');
		var hex = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);
		
		$.color.setBackgroundColor(hex);
		
		Ti.App.fireEvent('web:setColour', { r: rgbArray[0],g: rgbArray[1],b: rgbArray[2], hex: hex });
		
		if(colorShow){
			colorSwatches(-330);
			colorShow = 0;
		}else{
			colorSwatches(60);
			colorShow = 1;
		}
		sizeShow = 0;
		sizePop(0);
	});
}

function generateColour(){
	
	var viewWidth = (Math.ceil((list_colours.length) / 3) * 50) + 10;
			
	var topRow = Titanium.UI.createView({
	   layout: 'horizontal',
	   bottom: 10,
	   height: 40,
	   width: viewWidth
	});
	
	var middleRow = Titanium.UI.createView({
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
			
	var index = -1;
	var listArr = [];
	for (var i=0; i<list_colours.length; i++)
	{
		index = listArr.length;
		
		for (var j=0; j<listArr.length; j++)
        {
			if (list_colours[i].contrast >= listArr[j].contrast)
			{
				index = j;
				break;
			}	
		}
		
		listArr.splice(index, 0, list_colours[i]);
	}
	
	for (var i=0; i<listArr.length; i++)
	{
		console.log(listArr[i].contrast);
		var colours =  $.UI.create('View', {  
				backgroundColor: "rgb("+listArr[i].rgb +")",
				borderColor: "#A5A5A5",
				borderWidth: 1,
				width: "40", 
				height: "40",
				left: "5",
				right: "5"
			});
			
		if((i+1)%3 == 1)
		{
			topRow.add(colours);
		}
		else if((i+1)%3 == 2)
		{
			middleRow.add(colours);
		}
		else if((i+1)%3 == 0)
		{
			bottomRow.add(colours);
		}
		
		createColorEvent(colours, listArr[i]);
	}
	
	$.scrollView.add(topRow);
	$.scrollView.add(middleRow);
	$.scrollView.add(bottomRow);
}

setTimeout(function(){
	generateFavourite();
	generateColour();
}, 0);

Ti.App.addEventListener('app:saveToGallery', function(e) {
	 console.log(e.blob);
	var blob = e.blob;
	var index = blob.indexOf('base64,');
	blob = blob.substring(index + 'base64,'.length); 
	var img_view =Ti.Utils.base64decode(blob);

	var filename = "sissons_diy"+printDate()+".png";
	
	var imgDir = Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory );
	if (!imgDir.exists()){
		imgDir.createDirectory();
	}
 
	var imageFile = Titanium.Filesystem.getFile(imgDir.resolve(), filename);
	if (imageFile.write(img_view)===false) {
	    // handle write error
	    alert("Saved FAILED");
	}
	else{
		alert("Saved Done");
	}
	// dispose of file handles
	imageFile = null;
	imgDir = null;
	 
	/***
    var blob = e.blob;
    if (Ti.Filesystem.isExternalStoragePresent()) {
	var my_folder = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, "sission");
 
	if (!my_folder.exists()) {
		// If the directory doesn't exist, make it
		my_folder.createDirectory();
	};
	
	var dt = new Date();
        var timestamp = dt.getTime().toString();
        var fileName = timestamp + ".jpg";
		
		var f = Ti.Filesystem.getFile(my_folder.nativePath,fileName);
		f.write(blob);
	 
	}*/
});
