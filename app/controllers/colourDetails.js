var args = arguments[0] || {};
var category   = args.details;
var colour   = args.colour_details;

Ti.App.Properties.setString('module', 'colourDetails');

$.colourDetails.backgroundColor = "rgb("+colour.rgb +")";
$.boxDetails.backgroundColor = "rgb("+colour.rgb +")";
$.colourCode.text = colour.code;
$.colourName.text = colour.name;  
 
var cmyk = colour.cmyk;
var res = cmyk.split(",");
$.colourC.text =  (res[0] * 100).toFixed(2);
$.colourC.textAlign = Ti.UI.TEXT_ALIGNMENT_RIGHT;
$.colourM.text =  (res[1] * 100).toFixed(2);
$.colourY.text =  (res[2] * 100).toFixed(2);
$.colourK.text =  (res[3] * 100).toFixed(2);

$.colourCategoryImage.image = category.image;
$.colourCategoryImage.width = "90%";
$.colourCategoryDescription.text = category.description;
 
function popWindow(e){
	alert("Successful");
}
