var args = arguments[0] || {};

var API = require('api');
var COMM = require('common');

/****************Tutorial View***************/
/*if(Ti.App.Properties.getString('check') == 1)
{
	$.win.hide();
}
else
{
	$.win.show();
}
//$.win.hide();

var removeIcon = Ti.UI.createImageView({
	   				image: "/images/icon_remove.png", 
	   				width:30, 
	   				height:30,
	   				top:0, 
	   				right:0
	   			});

$.view3.add(removeIcon);

removeIcon.addEventListener( "click", function(){
	$.win.hide();
	console.log($.checkBox.value);
	if($.checkBox.value == 1){
		Ti.App.Properties.setString('check', 1);
	}
	console.log(Ti.App.Properties.getString('check'));
});*/