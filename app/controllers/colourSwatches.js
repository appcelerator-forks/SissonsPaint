var args = arguments[0] || {};

var library = Alloy.createCollection('category'); 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour');
/*
 michaelmoo - 20141030
 - Using function getCategoryListByType
 */ 
// var details = library.getCategoryList();
var details = library.getCategoryListByType(2);
var pHeight = Ti.Platform.displayCaps.platformHeight;
var category_type_lib =  Alloy.createCollection('category_type');
var category_tag = category_type_lib.selectTypeByDistinct();

console.log(category_tag);

var searchFlag = 0;
var filterFlag = 0;

var bottomBar = Titanium.UI.createView({
   layout: 'composite',
   bottom: 0,
  // top: Ti.Platform.displayCaps.platformHeight - 60,
   height: 60,
   width: Ti.Platform.displayCaps.platformWidth
});

var buttonWrapper = Titanium.UI.createView({
	layout: 'horizontal',
	left : (Ti.Platform.displayCaps.platformWidth - 120) / 2,
   	width: 120
});

var backgroundImg = Ti.UI.createImageView({
	height: 60,
	width: Ti.UI.FILL,
  	image:'/images/tool_bar.jpg'
});

var filterButton = Ti.UI.createImageView({
  	width: 50,
  	height: 40,
  	right: 10,
  	top: 10,
  	bottom: 10,
  	image:'/images/icon_filter.png',
});

var searchButton = Ti.UI.createImageView({
  	width: 50,
  	height: 40,
  	left: 10,
  	top: 10,
  	bottom: 10,
  	image:'/images/icon_search.png'
});

var searchView = Titanium.UI.createView({
   		layout: 'composite',
   		width: "100%",
   		height: 80,
   		bottom: 60,
   		backgroundColor: '#A5A5A5'
	});
	
var tableData = [];

var row1 = Ti.UI.createTableViewRow({
    title: 'All',
    width: 150,
    left: 10,
    touchEnabled: true,
    height: 60
  });
tableData.push(row1);

category_tag.forEach(function(tags) { 
	var row_tag = Ti.UI.createTableViewRow({
    title: tags.tag,
    width: 150,
    left: 10,
    touchEnabled: true,
    height: 60
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
		center: filterButton.getCenter(),
		//overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
		data: tableData
	});

buttonWrapper.add(filterButton);
buttonWrapper.add(searchButton);
bottomBar.add(backgroundImg);
bottomBar.add(buttonWrapper);

generateTable();
 
$.TheScrollView.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 140;

function generateTable(){
	var data=[];
	 
	for (var i=0; i< details.length; i++) {
		console.log(details[i]);
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
				width: "25%", 
				top:3,
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
				bottom: 10
			});  
			
			createColorEvent(subView, colour_details, details[i]);
					 
			subView.add(subViewColor);		 
			subView.add(subLabelName);		 
			subView.add(subLabelCode);	
			 
			colourView.add(subView);	 
			counter++; 
		});

	 	$.TheScrollView.add(colourView); 
		
		var separator = Titanium.UI.createImageView({ 
			width : Titanium.UI.FILL,
			height : 30,
			//bottom: -1,
			touchEnabled : false,
			image : "/images/scroll_up.png"
		});
		
	 	if(details.length != (i+1)){
			$.TheScrollView.add(separator);
		} 
	}
	
	$.mainViewContainer.add(bottomBar); 
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

var tableListener = function(e){
	console.log(e.index);
	filterFlag = 0;
	$.mainViewContainer.remove(table);
	removeAllChildren($.TheScrollView);
	if(e.index == 0)
	{
		details = library.getCategoryList();
	    generateTable();
	}
	else
	{
		//details = library.getCategoryByType(e.rowData.title);
		var result = category_type_lib.getCategoryTypeByTag(e.rowData.title);
		var data = [];
		details =[];
		result.forEach(function(tags) {
			data = library.getCategoryById(tags.cate_id);
			details.push(data);
		});
		
		console.log(details);
	    generateTable();
	}
	/*switch (e.index) {
	case 1:
		details = library.getCategoryByType(e.title);
	    generateTable();
	    break;
	case 2:
		details = library.getCategoryByType(e.title);
	    generateTable();
	    break;
	case 3:
		details = library.getCategoryByType(e.title);
	    generateTable();
	    break;
	case 4:
		details = library.getCategoryByType(e.title);
	    generateTable();
	    break;
	default:
		details = library.getCategoryList();
	    generateTable();
	    break;
	}*/
};

filterButton.addEventListener('click', function(e){
	console.log("popWindow");
	closeWindow();
	
	$.mainViewContainer.remove(searchView);
	searchFlag = 0;
	
	if(filterFlag == 1)
	{
		filterFlag = 0;
		$.mainViewContainer.remove(table);
	}
	else
	{
		filterFlag = 1;
	
		$.mainViewContainer.add(table);
		table.addEventListener('click', tableListener);
		/*table.addEventListener('click', function(e){
			console.log(e.index);
			filterFlag = 0;
			$.mainViewContainer.remove(table);
		});*/
	}
});

var closeWindow = function(e){
	table.removeEventListener('click', tableListener);
};

searchButton.addEventListener('click', function(e){
	console.log("searchBar");
	console.log("start:"+searchFlag);
	
	$.mainViewContainer.remove(table);
	filterFlag = 0;
	
	if(searchFlag == 1)
	{
		searchFlag = 0;
		console.log("change:"+searchFlag);
		$.mainViewContainer.remove(searchView);
	}
	else
	{
		searchFlag = 1;
		console.log("change:"+searchFlag);
	
		// console.log("start:"+searchFlag);
		// if(searchFlag == "1")
		// {
			// $.mainViewContainer.remove(searchView);
			// searchFlag = "0";
		// }
		// else{
		// searchFlag = "1";
		
		//$.mainViewContainer.remove(table);
		
		var hintTextLabel = Ti.UI.createLabel({
		    text : 'Enter Colour, Name or Colour Code',
		    color : '#A5A5A5',
		    font : 
		    {
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
		$.mainViewContainer.add(searchView);
		
		searchButton.addEventListener('click', function(e){
			console.log("textField.value: "+textField.value);
			console.log("textField.value.length: "+textField.value.length);
			searchFlag = 0;
			console.log("searchFlag: "+searchFlag);
			Ti.UI.Android.hideSoftKeyboard();
			//textField.blur();
			if(textField.value.length != 0)
			{
				Ti.App.Properties.setString('query', textField.value);
				var nav = Alloy.createController("search").getView(); 
				Alloy.Globals.Drawer.setCenterWindow(nav);
			}
			//Titanium.App.Properties.setString("query",textField.value);
			//console.log(e.textField.value);
			$.mainViewContainer.remove(searchView);
			/*removeAllChildren($.TheScrollView);
			var result = category_colour_lib.getCateByColourId(e.textField.value);
			
			result.forEach(function(colour_id) {
			details = library.getCategoryById(colour_id.cate_id);
			});
			console.log(details);
	    	generateTable();*/
		});
		
		// }
	}
});

function removeAllChildren(viewObject){
    //copy array of child object references because view's "children" property is live collection of child object references
    var children = viewObject.children.slice(0);
 
    for (var i = 0; i < children.length; ++i) {
        viewObject.remove(children[i]);
    }
}
