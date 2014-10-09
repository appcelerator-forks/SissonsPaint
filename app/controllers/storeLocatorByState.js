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
		separatorColor: '#ffffff',
		backgroundColor: '#fffff6', 
	});
	
	for (var i=0; i< details.length; i++) {
		
	   var row = Titanium.UI.createTableViewRow({
		    touchEnabled: true,
		    height: 120,
		    id: details[i].id,
		    backgroundSelectedColor: "#FFE1E1",
		    backgroundColor: "#ECF6CE" 
		  });
		
		var outlet_name = $.UI.create('Label', {
			text: details[i].outlet , 
			id: details[i].id, 
			color: "#848484",
			width:'auto',
			textAlign:'left',
			top:10,
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
				top:30,
				left:20
			});
		}
		
		if(details[i].mobile == ""){
			details[i].mobile = "-";
		}
		
		var mobile =  Titanium.UI.createLabel({
			text:"TEL: "+details[i].mobile,
			id: details[i].id, 
			font:{fontSize:12},
			width:'auto',
			color: "#848484",
			textAlign:'left',
			top:50,
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
			top:70,
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
			top:90,
			left:20
		});
		
		var rightForwardBtn =  Titanium.UI.createImageView({
			image:"/images/btn-forward.png",
			width:15,
			height:15,
			right:20,
			top:20
		});		
		
		row.add(outlet_name);
		if(details[i].area != ""){
			row.add(location);
		}
		row.add(mobile);
		row.add(fax);
		row.add(cateType);
		row.add(rightForwardBtn);
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
