var args = arguments[0] || {};
var pdf = require('pdf');
var library = Alloy.createCollection('brochure'); 
var details = library.getBrochureList();
 
var displayCover = function(){ 
   	var counter = 0;
   	var imagepath, adImage, row, cell = '';
 	var last = details.length-1;
	for(var i=0; i< details.length; i++) {
   		var id = details[i].id; 
   		
   		imagepath = details[i].cover;
   		
   		adImage = Utils.RemoteImage({
			image: imagepath
		});
		
   		if(counter%3 == 0){
   			row = $.UI.create('View', {classes: ["row"],textAlign:'center'});
   		}
   		cell = $.UI.create('View', {classes: ["cell"], top: 2});
   		
   		createAdImageEvent(adImage, id, details[i].content);
   		
		cell.add(adImage);
		row.add(cell);
		if(counter%3 == 2 || last == counter){
   			$.scrollview.add(row);
   		}
   		counter++;
	 }
};

//displayCover();


function createAdImageEvent(adImage, id,content) {
    adImage.addEventListener( "click", function(){
    	 pdf(content,true, function (err) {
		    if (err) alert(err);
		  });

    } );
}