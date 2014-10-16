var args = arguments[0] || {};
var pdf = require('pdf');
var library = Alloy.createCollection('brochure'); 
var details = library.getBrochureList();
//createFrame();
 
var displayCover = function(){ 
   	var counter = 0;
   	var imagepath, adImage, row, image, cellWrapper, cell = '';
 	var last = details.length-1;
	for(var i=0; i< details.length; i++) {
   		var id = details[i].id; 
   		
   		imagepath = details[i].cover;
   		
   		Ti.API.info(imagepath);
   		
   		/*adImage = Utils.RemoteImage({
			image: imagepath,
			bottom: 0,
			//width: "100%"
		});*/
		
		adImage = Ti.UI.createImageView({image: imagepath, bottom: 0,});
		
   		if(counter%3 == 0){
   			row = $.UI.create('View', {textAlign:'center', bottom: 0, layout: "vertical", height: Ti.UI.SIZE,  width: "100%"});
   			image = Ti.UI.createImageView({image:'/images/wood_rack.png', top: 0, width: "100%", right: 5, left: 5});
   			cellWrapper = Titanium.UI.createView({layout: "horizontal", height: Ti.UI.SIZE, width: "100%",bottom: 0, left: "5%", right: "5%"});
   		}
   		cell = $.UI.create('View', {bottom: "0", height: Ti.UI.SIZE, width: "30%", right: 5});
   		
   		console.log("adImage:"+adImage);
   		console.log("id:"+id);
   		console.log("details:"+details[i].content);
   		createAdImageEvent(adImage, id, details[i].content);
   		
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

/*function createFrame()
{
	var picture = details.length;
	
	var totalView = picture / 3;
	if(picture%3 == 1 || picture%3 ==2)
	{
		totalView++;
	}
		
	for(var j = 0; j < totalView; j++)
	{
		var viewContainer = new Array();
		viewContainer[j] = Titanium.UI.createView({
			layout: "horizontal",
			height: "Ti.UI.SIZE",
			bottom: "0"
		});
		
		var imageWood = new Array();
		imageWood[j] = Titanium.UI.createImageView({
				top: "0",
				image : "/images/wood_rack.png"
			});
			
		for(var i = 0; i < picture; i++)
		{
			var imagePath = details[i].cover;
			var image = new Array();
			image[i] = Titanium.UI.createImageView({
					width : "30%",
					bottom: "0",
					right: "4.5%",
					image : imagePath
				});
			
			if(j == 0)
			{
				viewContainer[j].add(image[0]);
				viewContainer[j].add(image[1]);
				viewContainer[j].add(image[2]);
				$.mainView.add(viewContainer[j]);
				$.mainView.add(imageWood[j]);
			}
			// if(j == 1)
			// {
				// viewContainer[j].add(image[3]);
				// viewContainer[j].add(image[4]);
				// viewContainer[j].add(image[5]);
				// $.mainView.add(viewContainer[j]);
				// $.mainView.add(imageWood[j]);
			// }
			// if(j == 2)
			// {
				// viewContainer[j].add(image[6]);
				// viewContainer[j].add(image[7]);
				// viewContainer[j].add(image[8]);
				// $.mainView.add(viewContainer[j]);
				// $.mainView.add(imageWood[j]);
			// }
		}
	}
	
}*/
