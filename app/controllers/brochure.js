var args = arguments[0] || {};
var pdf = require('pdf'); 
var youtubePlayer = require("titutorial.youtubeplayer");
var library = Alloy.createCollection('brochure'); 
var details = library.getBrochureList(); 
var filterFlag = 0;
 
var displayCover = function(){ 
   	var counter = 0;
   	var imagepath, adImage, row, image, cellWrapper, cell = '';
 	var last = details.length-1;
	for(var i=0; i< details.length; i++) {
   		var id = details[i].id; 
   		imagepath = details[i].cover;

		adImage = Ti.UI.createImageView({image: imagepath, bottom: 0, width:90, height: "auto"});
   		
   		if(counter%3 == 0){
   			row = $.UI.create('View', {textAlign:'center', bottom: 0, layout: "vertical", height: Ti.UI.SIZE,  width: "100%"});
   			image = Ti.UI.createImageView({image:'/images/wood_rack.png', top: 0, width: "100%", right: 5, left: 5});
   			cellWrapper = Titanium.UI.createView({layout: "horizontal", height: Ti.UI.SIZE, width: "100%",bottom: 0, left: "5%", right: "5%"});
   		}
   		cell = $.UI.create('View', {bottom: "0", height: Ti.UI.SIZE, width: "30%", right: 5});
   		
		cell.add(adImage);
		cellWrapper.add(cell); 
		row.add(cellWrapper);
		row.add(image);
		if(details[i].format == "pdf"){
			var downloadIcon = "";
   			if(details[i].isDownloaded == "0"){
   				/*** Add download icon for those haven't download***/
   				downloadIcon = Ti.UI.createImageView({
   					image: "/images/icon_download.png", 
   					width:30, 
   					height:30,
   					top:0, 
   					right:0
   				});
   				cell.add(downloadIcon);
   			}
   			/*** Image click event for PDF***/
   			createAdImageEvent(adImage, id, details[i].content, cell, details[i].isDownloaded,downloadIcon);
   		}else{
   			
   			/*** Add play icon for youtube***/
   			playIcon = Ti.UI.createImageView({image: "/images/icon_play.png", width:40, height:40});
   			
   			/*** Image click event for youtube***/
   			createVideoEvent(adImage, id, details[i].url);
   			createVideoEvent(playIcon, id, details[i].url);
   			
   			cell.add(playIcon);
   		}
	 
		if(counter%3 == 2 || last == counter){
   			$.scrollview.add(row);
   		}
   		
   		counter++;
	 }
};

displayCover();

function createAdImageEvent(adImage, id,content, cell, downloaded, downloadIcon) {
    adImage.addEventListener( "click", function(){
    	var ind=Titanium.UI.createProgressBar({
					width: "90%",
					height:Ti.UI.FILL,
					min:0,
					max:1,
					value:0,
					message:'',
					font:{fontSize:12},
					color:'red',
					//backgroundColor: "#A6A5A5",
					//opacity: "0.5"
				});
				var imageHeight = adImage.size.height;
				var imageWidth = adImage.size.width;
				var gray = Titanium.UI.createView({height: imageHeight, width: imageWidth, backgroundColor: "#A5A5A5", opacity:0.5, bottom: 0 });
				var label = Ti.UI.createLabel({
				  color: 'black',
				  font: { fontSize:8, fontWeight:"bold" },
				  text: '',
				  top: 2,
				  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
				  width: imageWidth, height: imageHeight
				});
				
		//cell.add(ind);
		if(downloaded == "0")
		{
			cell.add(gray);
			cell.add(ind);
			cell.add(label);
		}
		else
		{
			cell.remove(gray);
			cell.remove(ind);
			cell.remove(label);
		}
		
    	pdf(content,true, ind, label, function (err) {
		    if (err) alert(err);
		    else
		    {
		    	library.updateDownloadedBrochure(id);
		    	if(downloadIcon != ""){
		    		cell.remove(downloadIcon);
		    	}
		    	
		    	cell.remove(gray);
		    	cell.remove(ind);
		    	cell.remove(label);
		    	
		    }
		  });

    } );
}

function createVideoEvent(adImage, id,content){
	adImage.addEventListener( "click", function(){ 
		youtubePlayer.playVideo(content);
	 });
}

var tableData = [];

var row1 = Ti.UI.createTableViewRow({
    title: 'LATEST',
    width: 150,
    left: 10,
    touchEnabled: true,
    height: 60
  });
  
var row2 = Ti.UI.createTableViewRow({
    title: 'DOWNLOADED',
    width: 150,
    left: 10,
    touchEnabled: true,
    height: 60
  });
  
var row3 = Ti.UI.createTableViewRow({
    title: 'VIDEO',
	width: 150,
	left: 10,
    touchEnabled: true,
    height: 60
  });

tableData.push(row1);
tableData.push(row2);
tableData.push(row3);

var table = Titanium.UI.createTableView({
	separatorColor: 'transparent',
	backgroundImage: '/images/pop_window.png',
	height: Ti.UI.SIZE,
	width: 150,
	bottom: 60,
	overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
	data: tableData
});

var tableListener = function(e){ 
	filterFlag = 0;
	$.brochureView.remove(table);
	removeAllChildren($.scrollview);
	if(e.index == 0)
	{
		details = library.getBrochureList(); 
		displayCover();
	}
	else if(e.index == 1)
	{
		details = library.getDownloadedList(); 
		displayCover();
	}
	else
	{
		details = library.getVideoList();
		displayCover();
	}
};

var popWindow = function(e){
	 
	closeWindow();
	if(filterFlag == 1) {
		filterFlag = 0;
		$.brochureView.remove(table);
	}else {
		filterFlag = 1;
		
		$.brochureView.add(table);
		table.addEventListener('click', tableListener);
		
	}
};

var closeWindow = function(e){
	table.removeEventListener('click', tableListener);
};
