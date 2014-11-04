var args = arguments[0] || {};

Ti.App.Properties.setString('from', 'colourSwatches');
Ti.App.Properties.setString('module', 'search');

var category_colour_lib = Alloy.createCollection('category_colour');
var colour_lib = Alloy.createCollection('colour');
var cate_lib = Alloy.createCollection('category');
var search_list = colour_lib.getColourByQuery(Ti.App.Properties.getString('query'));
for(var i = 0; i < search_list.length; i++){
	console.log("search: " +search_list[i].code);}

var removeFlag = "0"; 
var TheScrollView = Titanium.UI.createScrollView({
		backgroundColor: "white", 
		width:"100%",
		layout: 'vertical',
		height: PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 80,
		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
});
	
loadSearchList();

function loadSearchList(){
	var data=[];
	if( search_list.length > 0){
		
		var colourView = $.UI.create('View', { 
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			layout: 'horizontal',
			width: "95%",
			bottom: 10,
			height: Ti.UI.SIZE,
		});
		var counter = 0;
			
		search_list.forEach(function(search) { 
			console.log("search: "+search.id);
			console.log("category_color_lib: " +category_colour_lib);
			var colour_details = colour_lib.getColourById(search.id);
			console.log("colour_details: " +colour_details);
			var colour_cate = category_colour_lib.getCateByColourId(search.id);
			console.log("colour_cate: " +colour_cate);
			var details = cate_lib.getCategoryById(colour_cate.cate_id);
			console.log("details: " +details);
			
			var subView = $.UI.create('View', { 
				textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
				layout: 'vertical',
				width: "25%", 
				top:3,
				height: Ti.UI.SIZE
			});
			 
			var subViewColor = $.UI.create('View', {  
				backgroundColor: "rgb("+search.rgb +")",
				borderColor: "#A5A5A5",
				borderWidth: 1,
				width: "97%", 
				height: "80"
			});
			
			var subLabelName = $.UI.create('Label', { 
				text: search.name , 
				classes: ['colorDesc'],
			});
			
			var subLabelCode = $.UI.create('Label', { 
				text: search.code , 
				classes: ['colorDesc'],
			});  
			
			createColorEvent(subView, colour_details, details);
			
			subView.add(subViewColor);		
			subView.add(subLabelName);		 
			subView.add(subLabelCode);	
			
			colourView.add(subView);	 
			counter++; 
		});
		removeAllChildren(TheScrollView);
		TheScrollView.add(colourView); 
	}
	
	$.mainSearchContainer.add(TheScrollView); 
}

function createColorEvent(subView, colour_details, details){
	subView.addEventListener( "click", function(){
		Ti.App.Properties.setString('from', 'search');
		var nav = Alloy.createController("colourDetails",{colour_details:colour_details, details:details}).getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);
	});

}
	