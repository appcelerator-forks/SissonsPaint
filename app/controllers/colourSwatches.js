var args = arguments[0] || {};

var library = Alloy.createCollection('category'); 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour'); 
var details = library.getCategoryList();
generateTable();

function generateTable(){
	var data=[];
	var TheScrollView = Titanium.UI.createScrollView({
		backgroundColor: "white", 
		width:"95%",
		layout: 'vertical',
		height: Ti.UI.SIZE,
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
	});
	 
	for (var i=0; i< details.length; i++) {
		
		var colours = category_colour_lib.getCategoryColourByCategory(details[i]['id']);
		var categoryHeader = Titanium.UI.createImageView({ 
			width : "100%",
			height : Ti.UI.SIZE,
			touchEnabled : false,
			image : details[i]['image']
		});
		
		var description = $.UI.create('Label', {
			text: details[i].description , 
			classes: ['aboutContent'],
		});
		 
		
		TheScrollView.add(categoryHeader);
		TheScrollView.add(description);
		
		var colourView = $.UI.create('View', { 
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			layout: 'horizontal',
			width: "100%",
			bottom: 10,
			height: Ti.UI.SIZE,
					
		});
		var counter = 0;
		colours.forEach(function(colour) { 
			var subView = $.UI.create('View', { 
				textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
				layout: 'vertical',
				width: "25%", 
				height: Ti.UI.SIZE
			});
			
		  	var colour_details = colour_lib.getColourById(colour.colour_id);
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
			
			createColorEvent(subView, colour_details, details[i]);
					 
			subView.add(subViewColor);		 
			subView.add(subLabelName);		 
			subView.add(subLabelCode);	
			 
			colourView.add(subView);	 
			counter++; 
		});
	 	TheScrollView.add(colourView); 
	}
	
	$.mainViewContainer.add(TheScrollView); 
	 
}

function createColorEvent(subView, colour_details, details){
	subView.addEventListener( "click", function(){
		Ti.App.Properties.setString('from', 'colourSwatches');
		var nav = Alloy.createController("colourDetails",{colour_details:colour_details, details:details}).getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);
	});
}

//details.forEach(function(cate) {
//	console.log(cate.name);
//});