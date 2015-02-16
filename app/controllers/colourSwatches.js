var args = arguments[0] || {};

var library = Alloy.createCollection('category'); 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour');
var type_lib = Alloy.createCollection('type');

var from = 0;
var firstRecords = "1"; 
var minHeight = 1797;
 
var tableData = [];
var details = library.getCategoryListByType("2",from); 
$.TheScrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)-160;
Ti.App.Properties.setString('currentCategory', "All");

$.activityIndicator.show();
$.loadingBar.opacity = "1";
$.loadingBar.height = "120";
$.loadingBar.top = ((PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2)-($.loadingBar.getHeight()/2));

/*
 michaelmoo - 20141030
 - Using function getCategoryListByType
 */ 
// var details = library.getCategoryList();
setTimeout(function(){ 
	
	generateTable();
}, 1000);


var pHeight = Ti.Platform.displayCaps.platformHeight;

function generateTable(){
	
	$.TheScrollView.opacity ="1";
	var data=[];
	var totalDetails = details.length; 
 	 
	for (var i=0; i< totalDetails; i++) { 
		if(details[i] != ""){
			var separator = Titanium.UI.createImageView({ 
				width : Titanium.UI.FILL,
				height : 30,
				//bottom: -1,
				touchEnabled : false,
				image : "/images/scroll_up.png"
			}); 
			
			if(firstRecords == "1"){
				firstRecords = "0";
			}else{
				$.TheScrollView.add(separator);
			} 
			separator = null;
			
			var cateView = Titanium.UI.createView({ 
				width : "100%", 
				layout : "horizontal",
				height : Ti.UI.SIZE
			}); 
			
			var categoryHeader = Titanium.UI.createImageView({ 
				width : "85%",
				height : Ti.UI.SIZE, 
				left: 15,
				top:5,
				image : details[i]['image']
			});
			
			var arrowLink = Titanium.UI.createImageView({ 
				width : "5%",
				height : Ti.UI.SIZE, 
				top:35,
				image : "/images/btn-forward.png"
			});
		 
			 
		 	cateView.add(categoryHeader); 
			cateView.add(arrowLink); 
			createCateEvent(categoryHeader, details[i]['id']);
			$.TheScrollView.add(cateView); 
		  
		}else{
			totalDetails--;
		} 
		
	}
	details =null;
	$.activityIndicator.hide();
	$.loadingBar.opacity = "0";
	$.loadingBar.height = "0"; 
	
}

function createCateEvent(subView, cate_id){ 
	subView.addEventListener( "click", function(){  
		var nav = Alloy.createController("categoryDetails",{cate_id:cate_id}).getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);
		//nav.open();
	});
}

var tableListener = function(e){ 
	$.activityIndicator.show();
	$.loadingBar.opacity = "1";
	$.loadingBar.height = "120";
	$.loadingBar.top = ((PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2)-($.loadingBar.getHeight()/2));
	$.TheScrollView.opacity ="0";
	filterFlag = 0;
	//$.mainViewContainer.remove(table);
	table.hide(); 
	removeAllChildren($.TheScrollView); 

	if(e.source.title == "All"){
		 
		details = library.getCategoryListByType("2",0);
	    generateTable();
	}else{
		//details = library.getCategoryByType(e.rowData.title);
		Ti.App.Properties.setString('currentCategory', e.source.title);
		var result = category_type_lib.getCategoryTypeByTag(e.source.title);
		var data = [];
		details =[];
		  
		result.forEach(function(tags) {
			data = library.getCategoryById(tags.cate_id,"2",0);
			if(data != ""){
				details.push(data);
			}
			
		});
		 
	    generateTable();
	}
	
	closeWindow();
};
 

var closeWindow = function(e){
	table.removeEventListener('click', tableListener);
};
 
var removeIcon = Ti.UI.createImageView({
	   				image: "/images/icon_remove.png", 
	   				width:30, 
	   				height:30,
	   				top:0, 
	   				right:0
	   			});

$.view4.add(removeIcon);

var searchButton = function(e){ 
	$.activityIndicator.show();
	$.loadingBar.opacity = "1";
	$.loadingBar.height = "120";
	$.loadingBar.top = ((PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2)-($.loadingBar.getHeight()/2));
	Ti.UI.Android.hideSoftKeyboard();  
	if($.textField.value.length != 0) { 
		Ti.App.Properties.setString('query', $.textField.value);
		var nav = Alloy.createController("search").getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);
	}
	   
};
		
removeIcon.addEventListener( "click", function(){
	$.win.hide();
	removeIcon = null; 
	if($.checkBox.value == 1){
		Ti.App.Properties.setString('swatchesCheckBox', 1);
	}
});

