var args = arguments[0] || {};
var pdf = require('pdf'); 
var youtubePlayer = require("titutorial.youtubeplayer");
var library = Alloy.createCollection('brochure'); 
var details = library.getBrochureList();  
var displayCover = function(){ 
   	var counter = 0;
   	var imagepath, adImage, row, image, cellWrapper, cell = '';
 	var last = details.length-1;
	for(var i=0; i< details.length; i++) {
   		var id = details[i].id; 
   		imagepath = details[i].cover;
		adImage = Ti.UI.createImageView({image: imagepath, bottom: 0, width:90});
   		
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
   			createAdImageEvent(adImage, id, details[i].content);
   		}else{
   			/*** Image click event for youtube***/
   			createVideoEvent(adImage, id, details[i].url);
   			
   			/*** Add play icon for youtube***/
   			playIcon = Ti.UI.createImageView({image: "/images/icon_play.png", width:40, height:40});
   			cell.add(playIcon);
   		}
	 
		if(counter%3 == 2 || last == counter){
   			$.scrollview.add(row);
   		}
   		
   		counter++;
	 }
};

displayCover();

function createAdImageEvent(adImage, id,content) {
    adImage.addEventListener( "click", function(){
    	/*** update download status***/
    	library.updateDownloadedBrochure(id);
    	pdf(content,true, function (err) {
		    if (err) alert(err);
		  });

    } );
}

function createVideoEvent(adImage, id,content){
	adImage.addEventListener( "click", function(){
		youtubePlayer.playVideo(content);
	 });
}
