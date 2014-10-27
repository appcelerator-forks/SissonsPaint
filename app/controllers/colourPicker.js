var args = arguments[0] || {};
var viewHeight = Ti.Platform.displayCaps.platformHeight;

$.mainView.setHeight(viewHeight);
console.log($.mainView.getHeight());
$.bottomColorBar.setBottom(0);

var colour_lib = Alloy.createCollection('colour'); 
var details = colour_lib.getColourList();

generateColour();

function generateColour(){
	console.log(details.length);
	var viewWidth = (Math.ceil((details.length+1) / 2) * 50) + 10;
	var topRow = Titanium.UI.createView({
	   layout: 'horizontal',
	   bottom: 10,
	   height: 40,
	   width: viewWidth
	});
	
	var bottomRow = Titanium.UI.createView({
	   layout: 'horizontal',
	   height: 40,
	   width: viewWidth
	});
	
	for (var i=0; i< details.length; i++) {
		//console.log(details[i]);
		var colours =  $.UI.create('View', {  
				backgroundColor: "rgb("+details[i].rgb +")",
				width: "40", 
				height: "40",
				left: "5",
				right: "5"
			});
		if(i%2 == 1)
		{
			topRow.add(colours);
		}
		else
		{
			bottomRow.add(colours);
		}
	}
	$.scrollView.add(topRow);
	$.scrollView.add(bottomRow);
}



/*
var app = {
        sharer: {
            
            chooser: function( content ){
                var intShare = Ti.Android.createIntent({
                    action: Ti.Android.ACTION_SEND,
	                type:"image/*"
                }); 
                intShare.putExtra( Ti.Android.EXTRA_TEXT, "itten kontent" );
                Ti.Android.currentActivity.startActivity( intShare );
            }
        }
};
var MESSAGE = "#sissons_paint";


var btnShareChooser = Ti.UI.createButton({
    title: "Media Share"
});
btnShareChooser.addEventListener( "click", app.sharer.chooser.bind( null, MESSAGE ) );
$.colourPicker.add( btnShareChooser );//change to imageView*/