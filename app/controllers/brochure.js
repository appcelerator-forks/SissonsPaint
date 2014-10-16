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
		adImage = Ti.UI.createImageView({image: imagepath, bottom: 0, width:80});
   		
		
   		if(counter%3 == 0){
   			row = $.UI.create('View', {textAlign:'center', bottom: 0, layout: "vertical", height: Ti.UI.SIZE,  width: "100%"});
   			image = Ti.UI.createImageView({image:'/images/wood_rack.png', top: 0, width: "100%", right: 5, left: 5});
   			cellWrapper = Titanium.UI.createView({layout: "horizontal", height: Ti.UI.SIZE, width: "100%",bottom: 0, left: "5%", right: "5%"});
   		}
   		cell = $.UI.create('View', {bottom: "0", height: Ti.UI.SIZE, width: "30%", right: 5});
   		
   		if(details[i].format == "pdf"){
   			createAdImageEvent(adImage, id, details[i].content);
   		}else{
   			createVideoEvent(adImage, id, details[i].url);
   		}
   		
		cell.add(adImage);
		cellWrapper.add(cell);
		//row.add(cell);
		row.add(cellWrapper);
		row.add(image);
		//row.add(wood);
		if(counter%3 == 2 || last == counter){
   			$.scrollview.add(row);
   		}
   		
   		counter++;
	 }
};

displayCover();


function createAdImageEvent(adImage, id,content) {
    adImage.addEventListener( "click", function(){
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
