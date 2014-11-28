var args = arguments[0] || {};

var library = Alloy.createCollection('favourite'); 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour');
var cate_lib = Alloy.createCollection('category'); 
var geo = [];


setTimeout(function(){ 
	getFav();
	loadFavouriteList();
}, 500);

function  getFav(){
	var count = 0;

	var favourite_list = library.getFavouriteList();
	geo = [];
	favourite_list.forEach(function(favs) { 
		f_colour_details = colour_lib.getColourById(favs.colour_id);
		f_colour_cate = category_colour_lib.getCateByColourId(favs.colour_id);
		f_details = cate_lib.getCategoryById(f_colour_cate.cate_id, "2"); 
		geo[count] = { 
			colour_id: favs.colour_id,
			cate_id: f_colour_cate.cate_id,
			sample: f_colour_details.sample,
			name: f_colour_details.name,
			code: f_colour_details.code,
			rgb: f_colour_details.rgb,
			colour_details :f_colour_details,
			details :f_details
		};	
		//favourite_list.details = cate_lib.getCategoryById(colour_cate.cate_id, "2");
		count++;
	});
	favourite_list = null;
	console.log(geo);
}


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


function loadFavouriteList(){
	var data=[]; 
	if( geo.length > 0){
		var colourView = $.UI.create('View', { 
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			layout: 'horizontal',
			width: "95%",
			bottom: 10,
			height: Ti.UI.SIZE,
		});
		var counter = 0;
			
		geo.forEach(function(fav) {  
			var subView = $.UI.create('View', { 
				textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
				layout: 'vertical',
				width: "25%", 
				top:3,
				height: Ti.UI.SIZE
			});
			 

			if(fav.colour_details.sample != ""){
				var subViewColor = $.UI.create('View', {
					borderColor: "#A5A5A5",
					borderWidth: 1,
					width: "97%", 
					height: "80"
				});
				var img = Ti.UI.createImageView({
				  	image: fav.colour_details.sample,
				  	borderColor: "#A5A5A5",
					borderWidth: 1,
					width: "97%", 
					height: "80"
				});
				subViewColor.add(img);
			}else{
				var subViewColor = $.UI.create('View', {  
					backgroundColor: "rgb("+fav.rgb +")",
					borderColor: "#A5A5A5",
					borderWidth: 1,
					width: "97%", 
					height: "80"
				});
			}
			
			
			var subLabelName = $.UI.create('Label', { 
				text: fav.name , 
				classes: ['colorDesc'],
			});
			
			var subLabelCode = $.UI.create('Label', { 
				text: fav.code , 
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
	   			
	   			removeFavEvent(subView,fav.colour_id,fav.code);	
	   			subViewColor.add(removeIcon);  
			}else{
				console.log(fav.details);
				createColorEvent(subView, fav.colour_details, fav.details);
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
		removeAllChildren(TheScrollView);
		TheScrollView.add(colourView); 
	}
	
	$.mainFavContainer.add(TheScrollView); 
	
	//$.mainFavContainer.add(bottomBar); 
}

var unFavButton = function(e){
	if(removeFlag == "1"){
		removeFlag ="0"; 
		
	}else{
		removeFlag ="1"; 
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
			getFav();
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
		var nav = Alloy.createController("colourDetails",{colour_details:colour_details, details:details,isRefresh : 1}).getView(); 
		//Alloy.Globals.Drawer.setCenterWindow(nav);
		nav.open();
	});

}
