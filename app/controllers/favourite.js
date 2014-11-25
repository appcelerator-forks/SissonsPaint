var args = arguments[0] || {};

var library = Alloy.createCollection('favourite'); 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour');
var cate_lib = Alloy.createCollection('category');
var favourite_list = library.getFavouriteList();

var removeFlag = "0"; 
var TheScrollView = Titanium.UI.createScrollView({
		backgroundColor: "white", 
		width:"100%",
		layout: 'vertical',
		height: PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 140,
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		top: 80,
		overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
});
	
loadFavouriteList();


favourite_list.forEach(function(fav) { 
	favourite_list.colour_details = colour_lib.getColourById(fav.colour_id);
	favourite_list.colour_cate = category_colour_lib.getCateByColourId(fav.colour_id);
	//favourite_list.details = cate_lib.getCategoryById(colour_cate.cate_id, "2");
});
console.log(favourite_list);
function loadFavouriteList(){
	var data=[];
	removeAllChildren(TheScrollView);
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
			var details = cate_lib.getCategoryById(colour_cate.cate_id, "2");
			 
			var subView = $.UI.create('View', { 
				textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
				layout: 'vertical',
				width: "25%", 
				top:3,
				height: Ti.UI.SIZE
			});
			 
			if(colour_details.sample != ""){
				var subViewColor = $.UI.create('View', {  
					backgroundImage: colour_details.sample,
					borderColor: "#A5A5A5",
					borderWidth: 1,
					width: "97%", 
					height: "80"
				});
				
			}else{
				var subViewColor = $.UI.create('View', {  
					backgroundColor: "rgb("+colour_details.rgb +")",
					borderColor: "#A5A5A5",
					borderWidth: 1,
					width: "97%", 
					height: "80"
				});
			}
			
			
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
		/*
		 keanmeng - 20141031
		 - move removeAllChildren to top
		 */
		// removeAllChildren(TheScrollView);
		TheScrollView.add(colourView); 
	}
	
	$.mainFavContainer.add(TheScrollView); 
	//$.mainFavContainer.add(bottomBar); 
}

var unFavButton = function(e){
	if(removeFlag == "1"){
		removeFlag ="0";
		unFavButton.image = "/images/icon_fav_remove.png";
		
	}else{
		removeFlag ="1";
		//unFavButton.image = "/images/icon_favourite.png";
		unFavButton.image = "/images/icon_fav_remove.png";
	}
	
	loadFavouriteList();
};

/*
 michaelmoo - 20141030
 - remove alert.
 */
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
			//alert("Colour removed!");
			library = Alloy.createCollection('favourite');
			favourite_list = library.getFavouriteList(); 
			loadFavouriteList();
		  }
		});
		dialog.show();  
		return false;
	});
}
	
 

function createColorEvent(subView, colour_details, details){
 
	subView.addEventListener( "click", function(){
		Ti.App.Properties.setString('from', 'favourite');
		var nav = Alloy.createController("colourDetails",{colour_details:colour_details, details:details}).getView(); 
		//Alloy.Globals.Drawer.setCenterWindow(nav);
		nav.open();
	});

}
	