
var args = arguments[0] || {};
var category   = args.details;
var colour   = args.colour_details;
var library = Alloy.createCollection('favourite');  
var isFav   = library.checkFavouriteByColourId(colour.id); 
var isRefresh = args.isRefresh || {};
 
if(colour.sample != ""){
	$.colourDetails.backgroundImage = colour.sample;
}else{
	$.colourDetails.backgroundColor = "rgb("+colour.rgb +")";
}
//$.colourDetails.backgroundColor = "rgb("+colour.rgb +")";
$.boxDetails.backgroundColor = "rgb("+colour.rgb +")";
$.colourCode.text = colour.code;
$.colourName.text = colour.name; 
 
//var cmyk = colour.cmyk;
//var res = cmyk.split(",");
//$.colourC.text =  (res[0] * 100).toFixed(2);
//$.colourC.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
//$.colourM.text =  (res[1] * 100).toFixed(2);
//$.colourY.text =  (res[2] * 100).toFixed(2);
//$.colourK.text =  (res[3] * 100).toFixed(2);
console.log(JSON.stringify(args.details));

$.colourCategoryImage.image = category.image;
$.colourCategoryImage.width = "80%";
$.colourCategoryDescription.text = category.description;
 
function popWindow(e){
	var str = "";
	if(isFav.length == 0){
		str = "add";
	}else{
		str = "remove";
	}
	var dialog = Ti.UI.createAlertDialog({
	  cancel: 1,
	  buttonNames: ['Cancel','Confirm'],
	  message: 'Are you sure want to '+str+' '+colour.code+' to favourite list?',
	  title: 'Colour favourite'
	});
	dialog.addEventListener('click', function(e){
	
	  if (e.index === e.source.cancel){
	    //Do nothing
	  }
	  if (e.index === 1){
	  	if(isFav.length == 0){
	  		addToFavourite();
	  	}else{
	  		removeFavourite();
	  	}
	  }
	});
	dialog.show(); 
} 
 
if(isFav.length == 0){ 
	$.favButton.image = "/images/icon_favourite.png"; 
}else{
	$.favButton.image = "/images/icon_fav_remove.png"; 
}

/*
 michaelmoo - 20141030
 - remove alert.
 */
function removeFavourite(){
	library.removeFavouriteColour(colour.id); 
	$.favButton.image = "/images/icon_favourite.png"; 
	isFav = "";
}

/*
 michaelmoo - 20141030
 - remove alert.
 */
function addToFavourite(){
	var library = Alloy.createModel('favourite', {
			colour_id: colour.id,
	});
	library.save();	 
	$.favButton.image = "/images/icon_fav_remove.png"; 
	isFav ="1";
}

$.colourDetails.addEventListener('android:back', function (e) {
	$.colourDetails.close();
	if(isRefresh == 1){  
		var nav = Alloy.createController("favourite").getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);  
	}
 
});

