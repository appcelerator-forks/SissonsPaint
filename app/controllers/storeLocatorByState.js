var args = arguments[0] || {};
var state   = args.state;

Ti.App.Properties.setString('module', 'storeLocator');
var library = Alloy.createCollection('storeLocator');  
var details = library.getStoreByState(state);  
generateStoreTable(details);
$.stateName.text = state;
//$.tableContainer.height = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 140;

function generateStoreTable(details){
	var data=[];
	var TheTable = Titanium.UI.createTableView({
		width:'100%',
		height: PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) - 160,
		separatorColor: '#ffffff',
		//backgroundColor: '#fffff6', 
		backgroundColor: '#FFFFFF',
		top: 0,
		overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
	});
	
	for (var i=0; i< details.length; i++) {
	   var row = Titanium.UI.createTableViewRow({
	   		layout: "vertical",
		    touchEnabled: false,
		    backgroundSelectedColor:'transparent',
		    //height: 300,
		    id: details[i].id,
		    //backgroundSelectedColor: "#FFE1E1",
		    //backgroundColor: "#ECF6CE" 
		    backgroundColor: "#FFFFFF" 
		  });
		
		var outlet_name = $.UI.create('Label', {
			text: details[i].outlet , 
			id: details[i].id, 
			//color: "#848484",
			color: "black",
			font: {fontSize: 22},//newly added
			width:'auto',
			textAlign:'left',
			//top:10,
			left:20,
			bottom: 10
		});
		
		if(details[i].address != ""){
			var location =  Titanium.UI.createLabel({
				text:details[i].address,
				id: details[i].id, 
				//font:{fontSize:12},
				width:'auto',
				color: "#848484",
				textAlign:'left',
				//top:30,
				//top:60,
				left:20,
				bottom:10
			});
		}
		
		var infoViewContainer = Titanium.UI.createView({
			layout: "horizontal",
			//height: Ti.UI.SIZE,
			width: "100%",
		});
		
		var infoView = Titanium.UI.createView({
			layout: "vertical",
			width: "80%",
		});
		
		if(details[i].mobile == ""){
			details[i].mobile = "-";
		}
		
		var mobile =  Titanium.UI.createLabel({
			text:"TEL: "+details[i].mobile,
			id: details[i].id, 
			//font:{fontSize:12},
			width:'auto',
			color: "#848484",
			textAlign:'left',
			//top:50,
			//top:90,
			left:20
		});
		
		if(details[i].fax == "" || details[i].fax == null){}
		else
		{	
			var fax =  Titanium.UI.createLabel({
				text:"FAX: "+details[i].fax,
				id: details[i].id, 
				//font:{fontSize:12},
				width:'auto',
				color: "#848484",
				textAlign:'left',
				//top:70,
				//top:110,
				left:20
			});
		}
		
		if(details[i].email == "" || details[i].email == null){}
		else
		{
			console.log("email" +details[i].email);
			console.log("email length" +details[i].email.length);
			var email =  Titanium.UI.createLabel({
				text:"E-mail: "+details[i].email,
				id: details[i].id, 
				//font:{fontSize:12},
				width:'auto',
				color: "#848484",
				textAlign:'left',
				//top:70,
				//top:110,
				left:20
			});
		}
		
		
		// if(details[i].website == "" || details[i].website == null){
			// details[i].website = "-";
		// }
		// var website =  Titanium.UI.createLabel({
			// text:"Website: -",//+details[i].website
			// id: details[i].id, 
			// font:{fontSize:12},
			// width:'auto',
			// color: "#848484",
			// textAlign:'left',
			// //top:70,
			// //top:110,
			// left:20
		// });
		
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
			//font:{fontSize:12},
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
			zIndex: i
			//top:20
			//bottom:40
		});		
		rightForwardBtn.addEventListener('click', function(e){
			//NavigateTo("3.100118","101.686962");
			//NavigateTo("3.160146","101.615076","Menara UAC", "12, Jalan PJU 7/5 Mutiara Damansara 47820 Petaling Jaya, Selangor");
			//console.log("latitude : "+ details[i].latitude);
			//console.log("longitude : "+details[i].longitude);
			// NavigateTo(details[i].latitude, details[i].longitude, details[i].outlet, details[i].address);
			console.log("right button pressed");
			//console.log("index: "+e.data);
			//console.log("index: "+e.source.row.index);
			//console.log("index: "+e.rowData.index);
			//console.log("index: "+ e.selectRow.index);
			console.log("outlet: "+details[e.source.zIndex].outlet);
			console.log("address: "+details[e.source.zIndex].address);
			if(details[e.source.zIndex].latitude == "" || details[e.source.zIndex].longitude == "")
			{
				NavigateTo(0, 0, details[e.source.zIndex].outlet, details[e.source.zIndex].address);
				console.log("null");
			}
			else
			{
				NavigateTo(details[e.source.zIndex].latitude, details[e.source.zIndex].longitude, details[e.source.zIndex].outlet, details[e.source.zIndex].address);
				console.log("latitude: "+details[e.source.zIndex].latitude);
				console.log("longitude: "+details[e.source.zIndex].longitude);
				console.log("!null");
			}
		});
		
		var separator = Titanium.UI.createImageView({
			//left : 0,
			//bottom : 0,
			width : Titanium.UI.FILL,
			height : 30,
			//bottom: -1,
			touchEnabled : false,
			image : "/images/scroll_up.png"
		});
		if(i > 0){
			row.add(separator);
		} 
		row.add(outlet_name);
		// if(details[i].address != ""){
			// row.add(location);
		// }
		//row.add(mobile);
		//row.add(fax);
		//row.add(cateType);
		if(details[i].address != ""){
			infoView.add(location);
		}
		infoView.add(mobile);
		if(details[i].fax == "" || details[i].fax == null){}else{infoView.add(fax);}
		if(details[i].email == "" || details[i].email == null){}else{infoView.add(email);}
		//infoView.add(website);
		//infoView.add(cateType);
		infoViewContainer.add(infoView);
		infoViewContainer.add(rightForwardBtn);
		
		//row.add(rightForwardBtn);
		row.add(infoViewContainer); 
		//if(i < details.length-1){
		//	row.add(separator);
		//}
		data.push(row);
	}
	// var search = Titanium.UI.createSearchBar({
	    // barColor:'#A5A5A5', 
	    // showCancel:false,
	    // hintText: 'Search',
	    // height:"10%",
	    // width: Ti.UI.SIZE,
	    // bottom:0,
	// });
	var searchView = Titanium.UI.createView({
   		layout: 'composite',
   		width: "100%",
   		height: 80,
   		bottom: 0,
   		backgroundColor: '#A5A5A5'
	});
	
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
	  hintText : 'Enter Search Query',
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

	TheTable.setData(data);
	//addClickEvent(TheTable);
	
	$.tableContainer.add(TheTable);
	//$.tableContainer.add(search); 
	searchWrapper.add(textField);
	searchWrapper.add(searchButton);
	searchView.add(searchWrapper);
	$.tableContainer.add(searchView);
	
	searchButton.addEventListener('click', function(e){
		Ti.UI.Android.hideSoftKeyboard();
		if(textField.value.length == 0)
		{
			details = library.getStoreByState(state);  
			generateStoreTable(details);
		}
		else
		{
			details = library.getStoreByName(state, textField.value); 
			generateStoreTable(details);
		}
	});
}

NavigateTo = function(latitude, longitude, name, address){
		  //var url = 'waze://?ll='+latitude+','+longitude+'&navigate=yes';
		  var url = 'geo:'+latitude+','+longitude+"?q="+name+" (" + address + ")";
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
