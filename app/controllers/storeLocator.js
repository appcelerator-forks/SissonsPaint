var args = arguments[0] || {};

var library = Alloy.createCollection('storeLocator'); 
var details = library.getStoreStateList();


/*generateStoreTable(details);

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
		Ti.API.info(e.source.id);
		Ti.API.info(nav);
	});
}*/

/*listStates();
	
	function listStates(e){
	
	var mainWindow = Ti.UI.createWindow({
		layout: 'vertical'
	});
	
	var subWindow = Ti.UI.createView({
		layout: 'vertical'
	});
	
	var row1 = Ti.UI.createView({
		layout: 'horizontal',
		backgroundColor: 'red'
	});
	
	var row2 = Ti.UI.createView({
		layout: 'horizontal',
		backgroundColor: 'blue'
	});
	
	var row3 = Ti.UI.createView({
		layout: 'horizontal',
		backgroundColor: 'green'
	});
	
	var row4 = Ti.UI.createView({
		layout: 'horizontal',
		backgroundColor: 'yellow'
	});
	
	var zoneA =  Titanium.UI.createImageView({
			image:"/images/icon_store.png",
			width: '40%',
			height: '40%',
			left:20,
		});
		
	var zoneB =  Titanium.UI.createImageView({
			image:"/images/icon_store.png",
			width: '40%',
			height: '40%',
			right:20,
		});
		
	var zoneC =  Titanium.UI.createImageView({
			image:"/images/icon_store.png",
			width: '40%',
			height: '40%',
			left:20,
		});
	
	var zoneD =  Titanium.UI.createImageView({
			image:"/images/icon_store.png",
			width: '40%',
			height: '40%',
			right:20,
		});	
	
	var zoneE =  Titanium.UI.createImageView({
			image:"/images/icon_store.png",
			width: '40%',
			height: '40%',
			left:20,
		});
		
	var zoneF =  Titanium.UI.createImageView({
			image:"/images/icon_store.png",
			width: '40%',
			height: '40%',
			right:20,
		});
		
	var zoneG =  Titanium.UI.createImageView({
			image:"/images/icon_store.png",
			width: '40%',
			height: '40%',
			left:20,
		});
	
	var zoneH =  Titanium.UI.createImageView({
			image:"/images/icon_store.png",
			width: '40%',
			height: '40%',
			right:20,
		});
		
	row1.add(zoneA);
	row1.add(zoneB);
	row2.add(zoneC);
	row2.add(zoneD);
	row3.add(zoneE);
	row3.add(zoneF);
	row4.add(zoneG);
	row4.add(zoneH);
	
	var btn = require('toggle');
	
	subWindow.add(row1);
	subWindow.add(row2);
	subWindow.add(row3);
	subWindow.add(row4);
	mainWindow.add(btn);
	mainWindow.add(subWindow);
}*/

function listState(e){
	var nav = Alloy.createController("storeLocatorByState",{state:e.source.title}).getView(); 
		Alloy.Globals.Drawer.setCenterWindow(nav);
		Ti.API.info(e.source.title);
}
