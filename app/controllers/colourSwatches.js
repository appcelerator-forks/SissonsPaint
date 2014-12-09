var args = arguments[0] || {};

var library = Alloy.createCollection('category'); 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour');
var type_lib = Alloy.createCollection('type');

var from = 0;
var firstRecords = "1";
var minHeight = 2797;
var tableData = [];
var details = library.getCategoryListByType("2",from); 
$.TheScrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 140;
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

var searchFlag = 0;
var filterFlag = 0;

var searchView = Titanium.UI.createView({
   		layout: 'composite',
   		width: "100%",
   		height: 80,
   		bottom: 60,
   		backgroundImage: '/images/tool_bar.jpg'
	});
searchView.hide();
$.mainViewContainer.add(searchView);

	
var row1 = Ti.UI.createTableViewRow({
    title: 'All',
    width: 150,
    left: 10,
    touchEnabled: true,
    top: 5,
    bottom:10,
    height: 40,
    className: "DataRow"
  });
tableData.push(row1);
row1 = null;

category_tag.forEach(function(tags) { 
	var row_tag = Ti.UI.createTableViewRow({
    	title: tags.ctype,
	    width: 150,
	    left: 10, 
	    touchEnabled: true,
	    className: "DataRow",
	    height: 40,
	    bottom:5
	});
	tableData.push(row_tag);
});
 
var table = Titanium.UI.createTableView({
	separatorColor: 'transparent',
	backgroundImage: '/images/pop_window.png',
	height: Ti.UI.SIZE,
	width: 150,
	bottom: 60,
	zIndex: 999,
	left: '20%', 
	data: tableData
});

$.mainViewContainer.add(table);

setTimeout(function(){ 
	searchView.hide();
	table.hide();
}, 10);

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
			
			var colours = category_colour_lib.getCategoryColourByCategory(details[i]['id']);
			var categoryHeader = Titanium.UI.createImageView({ 
				width : "95%",
				height : Ti.UI.SIZE,
				touchEnabled : false,
				top:15,
				image : details[i]['image']
			});

			var description = $.UI.create('Label', {
				width : "95%",
				text: details[i].description , 
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
				
			  	var colour_details = colour_lib.getColourById(colour.colour_id);
			  	
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
				
				createColorEvent(subView, colour_details, details[i]);
						 
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
 	
	 
	setTimeout(function(){ 
		Ti.App.Properties.setString('swatchMinHeight', 2797); 
		var swatchMinHeight = Ti.App.Properties.getString('swatchMinHeight');
	}, 1000);

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

var filter = function(e){
	
	closeWindow();
	searchView.hide();
	//$.mainViewContainer.remove(searchView);
	searchFlag = 0;
	
	if(filterFlag == 1){
		filterFlag = 0;
		//$.mainViewContainer.remove(table);
		table.hide();
	}else{
		filterFlag = 1;
		//$.mainViewContainer.add(table);
		table.show();
		table.addEventListener('click', tableListener);
	}
	 
};
 

var closeWindow = function(e){
	table.removeEventListener('click', tableListener);
};

var search = function(e){
	//$.mainViewContainer.remove(table);
	filterFlag = 0;
	table.hide();
	if(searchFlag == 1){
		searchFlag = 0; 
		searchView.hide();
		//$.mainViewContainer.remove(searchView);
	}else {
		searchFlag = 1;
		 
		var hintTextLabel = Ti.UI.createLabel({
		    text : 'Enter Colour, Name or Colour Code',
		    color : '#A5A5A5',
		    font :  {
		        fontSize : 14
		    },
		    backgroundColor : 'transparent',
		});
		
		var textField = Ti.UI.createTextField({
		  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		  color: 'black',
		  hintText : 'Enter Colour, Name or Colour Code',
		  backgroundColor: 'white',
		  borderColor: '#A5A5A5',
		  borderRadius: 5,
		  font: hintTextLabel.font,
		  left: 10,
		  top: 10,
		  width: "70%", 
		  height: 60
		});
		  
		var searchButton = Ti.UI.createButton({ backgroundColor: 'white', color: '#A5A5A5', textAlign: 'Titanium.UI.TEXT_ALIGNMENT_CENTER', title: 'SEARCH', borderColor: '#A5A5A5', borderRadius: 5, left: 5, top: 10, height: 60 });
		
		var searchWrapper = Titanium.UI.createView({
			layout: 'horizontal',
		});
		
		searchWrapper.add(textField);
		searchWrapper.add(searchButton);
		searchView.add(searchWrapper);
		//$.mainViewContainer.add(searchView);
		searchView.show();
		var searchColours = function(e){ 
			searchFlag = 0;
			 
			Ti.UI.Android.hideSoftKeyboard(); 
			if(textField.value.length != 0)
			{
				Ti.App.Properties.setString('query', textField.value);
				var nav = Alloy.createController("search").getView(); 
				Alloy.Globals.Drawer.setCenterWindow(nav);
			}
	 
			$.mainViewContainer.remove(searchView);
		 	searchButton.removeEventListener('click', searchColours);
		};
		
		searchButton.addEventListener('click', searchColours); 
	}
};


Ti.App.Properties.setString('swatchMinHeight', minHeight);
$.TheScrollView.addEventListener('scroll', function (e) {  
	
	var swatchMinHeight = Ti.App.Properties.getString('swatchMinHeight');

	if( e.y >= swatchMinHeight  ){ 
		swatchMinHeight = parseInt(swatchMinHeight) + parseInt(minHeight); 
		Ti.App.Properties.setString('swatchMinHeight', swatchMinHeight);
		from += 3;
 		
 		var currentCategory = Ti.App.Properties.getString('currentCategory');
 		if(currentCategory != "All"){
 			/**
 			var result = category_type_lib.getCategoryTypeByTag(currentCategory);
			//console.log("geo: "+from);
			result.forEach(function(tags) {
				data = library.getCategoryById(tags.cate_id,"2",from);
				if(data != ""){
					details.push(data);
				} 
			});
			generateTable(); 
			**/ 
 		}else{
 			$.activityIndicator.show();
			$.loadingBar.opacity = "1";
			$.loadingBar.height = "120";
			$.loadingBar.top = ((PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight)/2)-($.loadingBar.getHeight()/2));
 			details = library.getCategoryListByType("2",from);
 			generateTable();
 		}
		 
		
	}
	
    
   // Ti.API.info('near bottom', ($.TheScrollView.getRect().height - e.y) <= ($.TheScrollView.getRect().height + tolerance));
});
/** **/
//$.win.show();
//$.win.hide();
if(Ti.App.Properties.getString('swatchesCheckBox') == 1)
{
	$.win.hide();
}
else
{
	$.win.show();
}
 
var removeIcon = Ti.UI.createImageView({
	   				image: "/images/icon_remove.png", 
	   				width:30, 
	   				height:30,
	   				top:0, 
	   				right:0
	   			});

$.view4.add(removeIcon);

removeIcon.addEventListener( "click", function(){
	$.win.hide();
	removeIcon = null; 
	if($.checkBox.value == 1){
		Ti.App.Properties.setString('swatchesCheckBox', 1);
	}
});

