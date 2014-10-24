var args = arguments[0] || {};

var library = Alloy.createCollection('favourite'); 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour');
var cate_lib = Alloy.createCollection('category');
var favourite_list = library.getFavouriteList();

var removeFlag = "0";
var pHeight = Ti.Platform.displayCaps.platformHeight; 
var TheScrollView = Titanium.UI.createScrollView({
		backgroundColor: "white", 
		width:"100%",
		layout: 'vertical',
		height: PixelsToDPUnits(pHeight) - 80,
		top:10, 
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
});
	
var bottomBar = Titanium.UI.createView({
   layout: 'composite',
   bottom: 0,
  // top: Ti.Platform.displayCaps.platformHeight - 60,
   height: 60,
   width: Ti.Platform.displayCaps.platformWidth
});

var buttonWrapper = Titanium.UI.createView({
	layout: 'horizontal',
	left : (Ti.Platform.displayCaps.platformWidth-220) / 2,
   	width: 120
});

var backgroundImg = Ti.UI.createImageView({
	height: 60,
	width: Ti.UI.FILL,
  	image:'/images/tool_bar.jpg'
});

var unFavButton = Ti.UI.createImageView({
  	width: 50,
  	height: 40, 
  	top: 10,
  	bottom: 5,
  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  	image:'/images/icon_fav_remove.png', 

});
buttonWrapper.add(unFavButton);
bottomBar.add(backgroundImg);
bottomBar.add(buttonWrapper);
loadFavouriteList();

function loadFavouriteList(){
	var data=[];
	if( favourite_list.length > 0){
		
		var colourView = $.UI.create('View', { 
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			layout: 'horizontal',
			width: "95%",
			bottom: 10,
			height: Ti.UI.SIZE,
		});
		var counter = 0;
			
		favourite_list.forEach(function(fav) { 
			var colour_details = colour_lib.getColourById(fav.colour_id);
			var colour_cate = category_colour_lib.getCateByColourId(fav.colour_id);
			var details = cate_lib.getCategoryById(colour_cate.cate_id);
			 
			var subView = $.UI.create('View', { 
				textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
				layout: 'vertical',
				width: "25%", 
				top:3,
				height: Ti.UI.SIZE
			});
			 
			var subViewColor = $.UI.create('View', {  
				backgroundColor: "rgb("+colour_details.rgb +")",
				width: "97%", 
				height: "80"
			});
			
			var subLabelName = $.UI.create('Label', { 
				text: colour_details.name , 
				classes: ['colorDesc'],
			});
			
			var subLabelCode = $.UI.create('Label', { 
				text: colour_details.code , 
				classes: ['colorDesc'],
			});  
			
			if(removeFlag == "1"){
				/*** Add download icon for those haven't download***/
	   			removeIcon = Ti.UI.createImageView({
	   				image: "/images/icon_remove.png", 
	   				width:30, 
	   				height:30,
	   				top:0, 
	   				right:0
	   			});
	   			
	   			removeFavEvent(subView,fav.colour_id,colour_details.code);	
	   			subViewColor.add(removeIcon);  
			}else{
				createColorEvent(subView, colour_details, details);
			}
			
			subView.add(subViewColor);		
			subView.add(subLabelName);		 
			subView.add(subLabelCode);	
			
			colourView.add(subView);	 
			counter++; 
		});
		TheScrollView.add(colourView); 
	}
	
	$.mainFavContainer.add(TheScrollView); 
	$.mainFavContainer.add(bottomBar); 
}

unFavButton.addEventListener('click',function(){
	if(removeFlag == "1"){
		removeFlag ="0";
		unFavButton.image = "/images/icon_fav_remove.png";
		
	}else{
		removeFlag ="1";
		unFavButton.image = "/images/icon_favourite.png";
	}
	removeAllChildren(TheScrollView);
	loadFavouriteList();
});

function removeFavEvent(removeIcon, colour_id, colour_code){
	removeIcon.addEventListener( "click", function(){
		var dialog = Ti.UI.createAlertDialog({
		  cancel: 1,
		  buttonNames: ['Cancel','Confirm'],
		  message: 'Are you sure want to remove '+colour_code+' from favourite list?',
		  title: 'Colour favourite'
		});
		dialog.addEventListener('click', function(e){
		
		  if (e.index === e.source.cancel){
		    //Do nothing
		  }
		  if (e.index === 1){
		  	library.removeFavouriteColour(colour_id);
			alert("Colour removed!");
		  }
		});
		dialog.show();  
		return false;
	});
}
	
function removeAllChildren(viewObject){
    //copy array of child object references because view's "children" property is live collection of child object references
    var children = viewObject.children.slice(0);
 
    for (var i = 0; i < children.length; ++i) {
        viewObject.remove(children[i]);
    }
}

function createColorEvent(subView, colour_details, details){
 
	subView.addEventListener( "click", function(){
		Ti.App.Properties.setString('from', 'favourite');
		var nav = Alloy.createController("colourDetails",{colour_details:colour_details, details:details}).getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);
	});

}
	