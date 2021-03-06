var args = arguments[0] || {};

//Library Required
var fb = require('facebook');
var ImageFactory = require('fh.imagefactory');

//Variables
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
var list_colours = colour_lib.getColourList();
var sizeShow = 0;
var colorShow = 0;
var filterFlag = 0;
var shareFlag = 0;
var tableData = [];
var imgPath = "";
fb.appid = 752094718209236;
var t = Titanium.UI.create2DMatrix();
    t = t.rotate(-90);

$.slider.transform = t;
 
$.activityIndicator.show();
$.loadingBar.opacity = "1";
$.loadingBar.height = "120";
$.loadingBar.top = ((PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2)-($.loadingBar.getHeight()/2));

setTimeout(function(){
	generateFavourite();
	generateColour();
	if(Ti.App.Properties.getString('diyCheckBox') == 1){
		takePhoto();
	}
}, 1000);
	 
$.toolbar.addEventListener('postlayout', function(e) { 
	toolbarHeight = $.toolbar.rect.height;
	canvasHeight = pHeight - toolbarHeight   - toggleHeight;
	$.canvas.setBottom(toolbarHeight);
	$.canvas.setHeight(canvasHeight); 
});
	
$.canvas.addEventListener("load", function(){  
	Ti.App.fireEvent('web:initCanvasSize', { height: canvasHeight, width: pWidth });
});	 
 
function sizePop(e){
	 var animation = Titanium.UI.createAnimation({
					    bottom: e,
					    duration:500,
					    curve: Titanium.UI.ANIMATION_CURVE_LINEAR
					});
	$.sizeBar.animate(animation);
}

 
var tableDataShare = [];

var saveRow = Ti.UI.createTableViewRow({ 
    width: 150,
    height: Ti.UI.SIZE,
    left: 10,
    touchEnabled: true,
    height: 60
  });
  
var shareRow = Ti.UI.createTableViewRow({
   
    width: 150,
    height: Ti.UI.SIZE,
    left: 10,
    touchEnabled: true,
    height: 60
  });

var instagramRow = Ti.UI.createTableViewRow({
   
    width: 150,
    height: Ti.UI.SIZE,
    left: 10,
    touchEnabled: true,
    height: 60
  });

var shareImage = Ti.UI.createImageView({
    image: '/images/fb.png',
    width: 25,
    height: Ti.UI.SIZE,
    left: 20,
    touchEnabled: true,
    height: 25
  });
 
var instagramImage = Ti.UI.createImageView({
    image: '/images/icon_sissons_instagram.png',
    width: 25,
    height: Ti.UI.SIZE,
    left: 20,
    touchEnabled: true,
    height: 25
  });
  
 var saveImage = Ti.UI.createImageView({
    image: '/images/save.png',
    width: 25,
    height: Ti.UI.SIZE,
    left: 20,
    touchEnabled: true,
    height: 25
  });
 
var saveLabel = Ti.UI.createLabel({
   text:'Save',
   width:85,
   left: 65,
   textAlign:'left',
   // left: 10,
   height: 60,
   //font:{fontSize:16,fontWeight:'bold'}
});
 
var shareLabel = Ti.UI.createLabel({
   text:'Facebook',
   width:85,
   left: 65,
   textAlign:'left',
   height: 60, 
});
 
var instagramLabel = Ti.UI.createLabel({
   text:'Instagram',
   width:85,
   left: 65,
   textAlign:'left',
   height: 60, 
});

instagramRow.add(instagramImage);
instagramRow.add(instagramLabel);
shareRow.add(shareImage);
shareRow.add(shareLabel);
saveRow.add(saveImage);
saveRow.add(saveLabel);

tableDataShare.push(saveRow);
tableDataShare.push(shareRow);
tableDataShare.push(instagramRow);
  
var tableShare = Titanium.UI.createTableView({
	separatorColor: 'transparent',
	backgroundImage: '/images/pop_up.png',
	height: Ti.UI.SIZE,
	width: 150,
	//top: (pHeight/2)-60,
	bottom: 60,
	right: '9%',
	overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
	data: tableDataShare
});

$.diyPaint.add(tableShare);

var share = function(e){
	 
	closeShareWindow();
	if(shareFlag == 1) {
		shareFlag = 0;
		//$.diyPaint.remove(tableShare);
		tableShare.hide();
	}else {
		shareFlag = 1;
		
		tableShare.show();
		//$.diyPaint.add(tableShare);
		tableShare.addEventListener('click', tableShareListener);
		
	} 
};

var tableShareListener = function(e){ 
	shareFlag = 0;
	//$.diyPaint.remove(tableShare);
	tableShare.hide();
	Ti.App.addEventListener('app:saveToGallery', save); 
	if(e.index == 0){
		Ti.App.fireEvent('web:saveAndShare',{'share': 0 });
	}else if(e.index == 1){
		Ti.App.fireEvent('web:saveAndShare',{'share': 1 });
	}else{
		Ti.App.fireEvent('web:saveAndShare',{'share': 2 });
		
	}
};

var closeShareWindow = function(e){
	tableShare.removeEventListener('click', tableShareListener);
};

function shareFunction(e){
	
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

function shareFacebook(){
	
	var f = Ti.Filesystem.getFile(imgPath);
	var blob = f.read();
  	var data = {
  		message : 'Sissons Paints Omnicolor',
  		picture : blob
  	};
  	
  	fb.requestWithGraphPath('me/photos', data, 'POST', function(e){
	  	if (e.success && e.result) { 
	   		//Success
	   	}	
	   	else
	   	{
	   		if (e.error) {
	   			//alert(e.error); 
	   		}
	   		else
	   		{
	   			alert('cancel');
	   		}
	   	} 
  	}); 
  	
  	imgPath = "";	
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
		if(filterFlag == 1) {toolspop();}
		sizeShow = 0;
		sizePop(-250); 
	}else{
		if(sizeShow){
			sizePop(-250);
			sizeShow = 0;
		}else{
			sizePop(40);
			sizeShow = 1;
		}
		if(filterFlag == 1) {toolspop();}
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



var row1 = Ti.UI.createTableViewRow({
    title: 'Bucket',
    width: 150,
    left: 10,
    touchEnabled: true,
    height: 50
  });
  
var row2 = Ti.UI.createTableViewRow({
    title: 'Brush',
    width: 150,
    left: 10,
    touchEnabled: true,
    height: 50
  });
  
var row3 = Ti.UI.createTableViewRow({
    title: 'Eraser',
	width: 150,
	left: 10,
    touchEnabled: true,
    height: 50
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
	left: '8%',
	overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
	data: tableData
});
 
$.diyPaint.add(table);

var tableListener = function(e){
	filterFlag = 0;
	table.hide();
	//$.diyPaint.remove(table);
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
		table.hide();
		//$.diyPaint.remove(table);
	}else {
		filterFlag = 1;
		colorSwatches(-330);
		sizePop(-250);
		colorShow = 0;
		sizeShow = 0;
		table.show();
		//$.diyPaint.add(table);
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
	$.activityIndicator.hide();
	$.loadingBar.opacity = "0";
	$.loadingBar.height = "0";
 
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
	                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
	                    toolbarHeight = $.toolbar.rect.height;
						canvasHeight = pHeight - toolbarHeight - toggleHeight;
						$.canvas.setBottom(toolbarHeight);
						$.canvas.setHeight(canvasHeight);
	                    var nativePath = event.media.nativePath;
	                   
						ImageFactory.rotateResizeImage(nativePath, pWidth, 100);
		                Ti.App.Properties.setString("image", nativePath); 
		                Ti.App.fireEvent('web:loadImage', { image: nativePath, height:canvasHeight}); 
		                $.shareButton.touchEnabled = 'true';
	                }
	            },
	            cancel:function(){
	                //do somehting if user cancels operation
	            },
	            error:function(error) {
	                //error happend, create alert
	                var a = Titanium.UI.createAlertDialog({title:'Camera'});
	                //set message
	                if (error.code == Titanium.Media.NO_CAMERA){
	                    a.setMessage('Device does not have camera');
	                }else{
	                    a.setMessage('Unexpected error: ' + error.code);
	                }
	 
	                // show alert
	                a.show();
	            },
	            allowImageEditing:true,
	            saveToPhotoGallery:true
	        });
	    } else if(e.index == 1){
	    	 
	    	//obtain an image from the gallery
	        Titanium.Media.openPhotoGallery({
	            success:function(event){
	            	// set image view
	            	toolbarHeight = $.toolbar.rect.height;
					canvasHeight = pHeight - toolbarHeight - toggleHeight;
					$.canvas.setBottom(toolbarHeight);
					$.canvas.setHeight(canvasHeight);
	            	var nativePath = event.media.nativePath;
					//ImageFactory.rotateResizeImage(nativePath, 4208, 100); 
	                Ti.App.Properties.setString("image", nativePath); 
	                Ti.App.fireEvent('web:loadImage', { image: nativePath,height:canvasHeight});
	                $.shareButton.touchEnabled = 'true';
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

function generateFavourite(){
	var viewWidth = (Math.ceil((list_favourite.length)) * 50) + 10;
	var favouriteRow = Titanium.UI.createView({
	   layout: 'horizontal',
	   bottom: 10,
	   height: 40,
	   width: viewWidth
	});
	
	for (var j=0; j<list_favourite.length; j++) {
		var colour_details = colour_lib.getColourById(list_favourite[j].colour_id);
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
	//console.log(list_colours);
	for (var i=0; i<list_colours.length; i++) {
		if(list_colours[i].contrast <= 730){
		 
			index = listArr.length;
			 
			for (var j=0; j<listArr.length; j++) {
				if (list_colours[i].contrast >= listArr[j].contrast) {
					index = j;
					break;
				}	
			}
			
			listArr.splice(index, 0, list_colours[i]);
		}
	}
	
	var whiteListArr = [];
	for (var i=0; i<list_colours.length; i++) {
		if(list_colours[i].contrast >= 730){
			index = whiteListArr.length;
			 
			for (var j=0; j<whiteListArr.length; j++) {
				if (list_colours[i].contrast >= whiteListArr[j].contrast) {
					index = j;
					break;
				}	
			}
			
			whiteListArr.splice(index, 0, list_colours[i]);
		}
	}
	
	var finalList = listArr.concat(whiteListArr);
	for (var i=0; i<finalList.length; i++) {
		 
		var colours;
			
		if(finalList[i].thumb != ""){
	  		colours = $.UI.create('ImageView', {  
				image: finalList[i].thumb,
				borderColor: "#A5A5A5",
				borderWidth: 1,
				width: "40", 
				height: "40",
				left: "5",
				right: "5"
			});
	  	}else{
	  		 colours = $.UI.create('View', {  
				backgroundColor: "rgb("+finalList[i].rgb +")",
				borderColor: "#A5A5A5",
				borderWidth: 1,
				width: "40", 
				height: "40",
				left: "5",
				right: "5"
			});
	  	}
			
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
		
		createColorEvent(colours, finalList[i]);
	}
	
	$.scrollView.add(topRow);
	$.scrollView.add(middleRow);
	$.scrollView.add(bottomRow);
}
 
var save = function(e) {
	var blob = e.blob;
	var index = blob.indexOf('base64,');
	blob = blob.substring(index + 'base64,'.length); 
	var img_view =Ti.Utils.base64decode(blob);

	var filename = "sissons_diy"+printDate()+".png";
	var mediaPath = "file://storage/sdcard0"+ Ti.Filesystem.separator + 'Pictures' + Ti.Filesystem.separator + 'Sissons Omnicolor DIY';
	var imgDir = Titanium.Filesystem.getFile(mediaPath );
	if (!imgDir.exists()){
		imgDir.createDirectory();
	}
 	
	var imageFile = Titanium.Filesystem.getFile(imgDir.resolve(), filename);
	if (imageFile.write(img_view)===false) {
	    // handle write error 
	    var toast = Ti.UI.createNotification({
		    message:"Saved FAILED",
		    duration: Ti.UI.NOTIFICATION_DURATION_SHORT
		}); 
	    toast.show();
	}
	else{
		imgPath = imageFile.nativePath; 
		var toast = Ti.UI.createNotification({
		    message:"Saved Done",
		    duration: Ti.UI.NOTIFICATION_DURATION_SHORT
		});
		toast.show();
	} 
	//Share!
	console.log(e.share);
	if(e.share == 1){ 	
		var nav = Alloy.createController("share",{imgPath:imgPath}).getView(); 
		nav.open();
	}else if(e.share == 2){
		var uri = imageFile.nativePath; 
			console.log(uri);
			var igIntent = Ti.Android.createIntent({
				action:Ti.Android.ACTION_SEND,
				packageName:"com.instagram.android",
				type:"image/*",
			});
		 
			igIntent.putExtraUri(Titanium.Android.EXTRA_STREAM, uri);
			setTimeout(function(){
				try{
					Ti.Android.currentActivity.startActivity(igIntent);
				}catch(err){
					alert("Kindly install the Instagram application on your device.");
				}
			}, 400);
	}
	
	Ti.Media.Android.scanMediaFiles([mediaPath+Ti.Filesystem.separator+filename],["image/png"],function(e){
		// dispose of file handles
		imageFile = null;
		imgDir = null;
	 });
	Ti.App.removeEventListener('app:saveToGallery', save);
};

 /****************Tutorial View***************/
//$.win.show();
//$.win.hide();
if(Ti.App.Properties.getString('diyCheckBox') == 1){ 
	$.win.hide();
}else{
	$.win.show();
}

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
	takePhoto();
	if($.checkBox.value == 1){
		Ti.App.Properties.setString('diyCheckBox', 1);
	}
});

setTimeout(function(){
	table.hide();
	tableShare.hide();
}, 3);

var clearObject = function(){
	console.log("clear!!!");
	 fb = null;
	 ImageFactory = null;
	 pWidth = null;
	 pHeight = null;
	 toolbarHeight = null;
	 toggleHeight = null;
	 canvasHeight = null;
	 bucketWidth = null;
	 brushWidth = null;
	 eraseWidth = null;
	 tools = null;
	 category_colour_lib = null;
	 colour_lib = null; 
	 library = null;
	 favourite_lib = null;
	 list_favourite = null;
	 list_colours = null;
	 sizeShow = null;
	 colorShow = null;
	 filterFlag = null;
	 shareFlag = null;
	 tableData = null;
	 imgPath = null;
	tableDataShare = null;
	  saveRow = null;
	  shareRow = null;
	  instagramRow = null;
	  shareImage= null; 
	  instagramImage= null;
	  saveImage = null;
	  saveLabel = null;
	  shareLabel = null;
	  instagramLabel = null;
	  tableShare = null;
	  share = null;
	  tableShareListener = null;
	  closeShareWindow = null;
	  row1 = null;
	  row2 = null;
	  row3 = null;
	  table = null;
	  tableListener = null;
	Ti.App.removeEventListener("clearObject", clearObject);
};

Ti.App.addEventListener("clearObject", clearObject);
