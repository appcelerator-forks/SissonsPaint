var args = arguments[0] || {};

var library = Alloy.createCollection('storeLocator'); 
var details = library.getStoreStateList();

generateStoreTable(details);

function generateStoreTable(details){
	var data=[];
	var TheTable = Titanium.UI.createTableView({
		width:'100%',
		separatorColor: '#ffffff',
		backgroundColor: '#fffff6', 
	});
	
	for (var i=0; i< details.length; i++) {
		
	   var row = Titanium.UI.createTableViewRow({
		    touchEnabled: true,
		    height: 50,
		    id: details[i].state,
		    backgroundSelectedColor: "#FFE1E1",
		    backgroundColor: "#ECF6CE" 
		  });
		
		var category_name = $.UI.create('Label', {
			text: details[i].state , 
			id: details[i].state, 
			color: "#848484",
			width:'auto',
			textAlign:'left',
			left:20,
		});
		
		var rightForwardBtn =  Titanium.UI.createImageView({
			image:"/images/btn-forward.png",
			id: details[i].state, 
			width:15,
			height:15,
			right:20,
			top:20
		});		
		row.add(category_name);
		row.add(rightForwardBtn);
		data.push(row);
	}
	
	TheTable.setData(data);
	addClickEvent(TheTable);
	
	$.table2Container.add(TheTable); 
}

function addClickEvent(table){
	table.addEventListener('click', function(e){ 
		var nav = Alloy.createController("storeLocatorByState",{state:e.source.id}).getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);  
	});
}

 