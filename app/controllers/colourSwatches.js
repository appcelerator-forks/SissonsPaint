var args = arguments[0] || {};

var library = Alloy.createCollection('category'); 
var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour'); 
var details = library.getCategoryList();

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
  	image:'/images/icon_filter.png'
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
    title: 'Interior',
    width: 150,
    left: 10,
    touchEnabled: true,
    height: 60
  });
  
var row2 = Ti.UI.createTableViewRow({
    title: 'Exterior',
    width: 150,
    left: 10,
    touchEnabled: true,
    height: 60
  });
  
var row3 = Ti.UI.createTableViewRow({
    title: 'Wood',
	width: 150,
	left: 10,
    touchEnabled: true,
    height: 60
  });

var row4 = Ti.UI.createTableViewRow({
    title: 'Metal',
	width: 150,
	left: 10,
    touchEnabled: true,
    height: 60
  });

tableData.push(row1);
tableData.push(row2);
tableData.push(row3);
tableData.push(row4);

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

function generateTable(){
	var data=[];
	var TheScrollView = Titanium.UI.createScrollView({
		backgroundColor: "white", 
		width:"95%",
		layout: 'vertical',
		height: "80%",
		top: 80,
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
	});
	 
	for (var i=0; i< details.length; i++) {
		
		var colours = category_colour_lib.getCategoryColourByCategory(details[i]['id']);
		var categoryHeader = Titanium.UI.createImageView({ 
			width : "100%",
			height : Ti.UI.SIZE,
			touchEnabled : false,
			top:15,
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

filterButton.addEventListener('click', function(e){
	console.log("popWindow");
	
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
		//table.show();
		
		table.addEventListener('click', function(e){
			console.log(e.index);
			filterFlag = 1;
			$.mainViewContainer.remove(table);
			//table.close();
		});
	}
});

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
		  color: '#336699',
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
			//console.log(e.index);
			searchFlag = 0;
			$.mainViewContainer.remove(searchView);
			//table.close();
		});
		
		// }
	}
});
