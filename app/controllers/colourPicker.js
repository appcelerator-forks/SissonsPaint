var args = arguments[0] || {};

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
$.colourPicker.add( btnShareChooser );
