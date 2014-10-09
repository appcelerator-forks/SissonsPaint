var args = arguments[0] || {};
var state   = args.state;
var library = Alloy.createCollection('storeLocator'); 
var details = library.getStoreByState(state); 
console.log(details);
generateStoreTable(details);

function generateStoreTable(details){
	var data=[];
	var TheTable = Titanium.UI.createTableView({
		width:'100%',
		//separatorColor: '#ffffff',
		backgroundColor: '#fffff6', 
	});
	
	for (var i=0; i< details.length; i++) {
		
	   var row = Titanium.UI.createTableViewRow({
	   		layout: "vertical",
		    touchEnabled: true,
		   // height: 180,
		    id: details[i].id,
		    backgroundSelectedColor: "#FFE1E1",
		    //backgroundColor: "#ECF6CE" 
		    backgroundColor: "#FFFFFF" 
		  });
		
		var outlet_name = $.UI.create('Label', {
			text: details[i].outlet , 
			id: details[i].id, 
			color: "#848484",
			font: {fontSize: 18},//newly added
			width:'auto',
			textAlign:'left',
			//top:10,
			left:20,
		});
		
		if(details[i].area != ""){
			var location =  Titanium.UI.createLabel({
				text:details[i].area,
				id: details[i].id, 
				font:{fontSize:12},
				width:'auto',
				color: "#848484",
				textAlign:'left',
				//top:30,
				//top:60,
				left:20
			});
		}
		
		if(details[i].mobile == ""){
			details[i].mobile = "-";
		}
		
		var infoViewContainer = Titanium.UI.createView({
			layout: "horizontal",
			height: 60,
			width: "100%",
		});
		
		var infoView = Titanium.UI.createView({
			layout: "vertical",
			width: "80%",
		});
		
		var mobile =  Titanium.UI.createLabel({
			text:"TEL: "+details[i].mobile,
			id: details[i].id, 
			font:{fontSize:12},
			width:'auto',
			color: "#848484",
			textAlign:'left',
			//top:50,
			//top:90,
			left:20
		});
		
		if(details[i].fax == ""){
			details[i].fax = "-";
		}
		var fax =  Titanium.UI.createLabel({
			text:"FAX: "+details[i].fax,
			id: details[i].id, 
			font:{fontSize:12},
			width:'auto',
			color: "#848484",
			textAlign:'left',
			//top:70,
			//top:110,
			left:20
		});
		
		
		switch(details[i].category){
			
			case 1:
				var categoryName ='Branches';
				break;
			case 2: 
				var categoryName ='Stockists';
				break;
			case 3: 
				var categoryName ='Dealers';
				break;
			
		}
		
		var cateType =  Titanium.UI.createLabel({
			text:categoryName,
			id: details[i].id, 
			font:{fontSize:12},
			width:'auto',
			color: "#848484",
			textAlign:'left',
			//top:90,
			//top:130,
			left:20
		});
		
		var rightForwardBtn =  Titanium.UI.createImageView({
			//image:"/images/btn-forward.png",
			image:"/images/icon_store.png",
			//width:15,
			//height:15,
			width:40,
			height:40,
			right:20,
			//top:20
			//bottom:40
		});		
		
		var separator = Titanium.UI.createImageView({
			left : 0,
			bottom : 0,
			width : Titanium.UI.FILL,
			height : 30,
			touchEnabled : false,
			image : "/images/scroll_up.png"
		});
		
		row.add(outlet_name);
		if(details[i].area != ""){
			row.add(location);
		}
		//row.add(mobile);
		//row.add(fax);
		//row.add(cateType);
		infoView.add(mobile);
		infoView.add(fax);
		infoView.add(cateType);
		infoViewContainer.add(infoView);
		infoViewContainer.add(rightForwardBtn);
		//row.add(rightForwardBtn);
		row.add(infoViewContainer);
		if(i < details.length-1){
			row.add(separator);
		}
		data.push(row);
	}
	
	TheTable.setData(data);
	addClickEvent(TheTable);
	
	$.tableContainer.add(TheTable); 
}

NavigateTo = function(latitude, longitude){
		  var url = 'waze://?ll='+latitude+','+longitude+'&navigate=yes';
			if (Ti.Android){
				try {
					Ti.API.info('Trying to Launch via Intent');
					var intent = Ti.Android.createIntent({
						action: Ti.Android.ACTION_VIEW,
						data: url
						
					});
					Ti.Android.currentActivity.startActivity(intent);
				} catch (e){
					Ti.API.info('Caught Error launching intent: '+e);
					exports.Install();
				}
			}else{
				if (Ti.Platform.canOpenURL(url)){
					Ti.Platform.openURL(url);
				} else {
					exports.Install();
				}
				
			}
				
		};
		
function addClickEvent(table){
	table.addEventListener('click', function(e){
		
		NavigateTo("3.100118","101.686962");
	});
}
