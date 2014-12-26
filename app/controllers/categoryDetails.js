var args = arguments[0] || {};
var cate_id = args.cate_id; 
var library = Alloy.createCollection('category'); 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour');
var type_lib = Alloy.createCollection('type');

Ti.App.Properties.setString('module', 'colourSwatches');
var from = 0;
var firstRecords = "1"; 
var minHeight = 1797;
 
var tableData = [];
//var details = library.getCategoryListByType("2",from); 
var details = library.getCategoryByIdOnly(cate_id); 
$.TheScrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
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
var category_type_lib =  Alloy.createCollection('category_type');
//var category_tag = category_type_lib.selectTypeByDistinct(); 
var category_tag =  type_lib.getType();

  
function generateTable(){
	
	$.TheScrollView.opacity ="1";
	var data=[];
	var totalDetails = details.length; 
 	  
		if(details != ""){
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
			
			var colours = category_colour_lib.getCategoryColourByCategory(details['id']);
			var categoryHeader = Titanium.UI.createImageView({ 
				width : "95%",
				height : Ti.UI.SIZE,
				touchEnabled : false,
				top:15,
				image : details['image']
			});

			var description = $.UI.create('Label', {
				width : "95%",
				text: details.description , 
				width : "95%",
				classes: ['aboutContent'],
				bottom: 30
			});
			 
			$.TheScrollView.add(categoryHeader);
			$.TheScrollView.add(description);
			categoryHeader = null;
			description = null;
			
			var colourView = $.UI.create('View', { 
				textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
				layout: 'horizontal',
				width: "95%",
				bottom: 10,
				height: Ti.UI.SIZE,
						
			});
			var counter = 0;
			colours.forEach(function(colour) { 
				var subView = $.UI.create('View', { 
					textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
					layout: 'vertical',
					width: "24.5%", 
					top:3,
					height: Ti.UI.SIZE
				});
				
				var colour_details = {
					thumb: colour.thumb,
					rgb: colour.rgb,
					name: colour.name,
					code: colour.code,
					sample: colour.sample,
					id: colour.cid
				};
			  	//var colour_details = colour_lib.getColourById(colour.colour_id);
			  	 
			  	if(colour_details.thumb != ""){
			  		var subViewColor = $.UI.create('ImageView', {  
						image: colour_details.thumb,
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
					bottom: 10
				});  
				
				createColorEvent(subView, colour_details, details);
						 
				subView.add(subViewColor);		 
				subView.add(subLabelName);		 
				subView.add(subLabelCode);	
				
				colour_details = null;
				subViewColor = null;
				subLabelName = null;
				subLabelCode = null;
				colourView.add(subView);	
				subView=null; 
				counter++; 
			});
		 	
		 	$.TheScrollView.add(colourView); 
			colourView =null;
		}else{
			totalDetails--;
		} 
		 
	details =null;
	$.activityIndicator.hide();
	$.loadingBar.opacity = "0";
	$.loadingBar.height = "0"; 
	
}

function createColorEvent(subView, colour_details, details){
	subView.addEventListener( "click", function(){ 
		var nav = Alloy.createController("colourDetails",{colour_details:colour_details, details:details}).getView(); 
		//Alloy.Globals.Drawer.setCenterWindow(nav);
		nav.open();
	});
}


