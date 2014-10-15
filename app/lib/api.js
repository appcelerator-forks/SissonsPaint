/*********************
*** SETTING / API ***
**********************/
var API_DOMAIN = "sissons.playlab.com.my/";
var XHR = require("xhr");
var xhr = new XHR();

// APP authenticate user and key
var USER  = 'mobile';
var KEY   = '06b53047cf294f7207789ff5293ad2dc';
var getStoreLocatorList	  = "http://"+API_DOMAIN+"/api/getStore?user="+USER+"&key="+KEY;
var getBrochureList	      = "http://"+API_DOMAIN+"/api/getBrochure?user="+USER+"&key="+KEY;
var getCategoryList       = "http://"+API_DOMAIN+"/api/getCategoryList?user="+USER+"&key="+KEY;
var getColourList	      = "http://"+API_DOMAIN+"/api/getColourList?user="+USER+"&key="+KEY;

exports.sendContactMsg    = "http://"+API_DOMAIN+"/api/sendMessage?user="+USER+"&key="+KEY;

exports.forgotPassword    = "http://"+API_DOMAIN+"/api/doForgotPassword?user="+USER+"&key="+KEY;
/*********************
**** API FUNCTION*****
**********************/
//load Colour and save to local db
exports.loadColour = function (ex){
	 var url = getColourList;
	 var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	       var res = JSON.parse(this.responseText);
	       if(res.status == "success"){
		       	/**reset current category**/
		       	var library = Alloy.createCollection('colour'); 
				library.resetColour();
				
				/**load new set of category from API**/
		       	var arr = res.data;
		       
		       	arr.forEach(function(entry) {
					var colour = Alloy.createModel('colour', {
				        id: entry.id,
					    name: entry.name,
					    code: entry.code,
					    rgb: entry.RGB,
					    cmyk: entry.CMYK,
					    sample: entry.sample
				    });
				    colour.save();
				});
	       }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	     },
	     timeout : 50000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
};

//load Category and save to local db
exports.loadCategory = function(ex){
	var url = getCategoryList;
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) { 
	       var res = JSON.parse(this.responseText);
	       
	       if(res.status == "success"){
		       	/**reset current category**/
		       	var lib_cate = Alloy.createCollection('category'); 
		       	var lib_type = Alloy.createCollection('category_type'); 
		       	var lib_colour = Alloy.createCollection('category_colour'); 
		       	
				lib_cate.resetCategory();
				lib_type.resetCategoryType();
				lib_colour.resetCategoryColour();
				
				/**load new set of category from API**/
		       	var arr = res.data;
		       
		       	arr.forEach(function(entry) {
		       		
		       		/***Category Info***/
		       		var product_category = Alloy.createModel('category', { 
		       			id: entry.id, 
						name: entry.name, 
						type: entry.type,
						image: entry.image,
						description : entry.description,
					});
					product_category.save();
					    
		       		/*** Category Type***/
		       		var categories = entry.arr_category;
		       		categories.forEach(function(category) {
		       			var category_type = Alloy.createModel('category_type', { 
						    cate_id: entry.id, 
						    tag: category
					    });
					    category_type.save();
		       		});
					
					/*** Category Colour***/
					var colours = entry.arr_colour;
		       		colours.forEach(function(colour) {
		       			var category_colour = Alloy.createModel('category_colour', { 
						    cate_id: entry.id, 
						    colour_id: colour
					    });
					    category_colour.save();
		       		});
				});
				console.log("saved category done");
		 
	       }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	     },
	     timeout : 50000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
};

//load Brochure and save to local db
exports.loadBrochure = function (ex){
	 var url = getBrochureList;
	 var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	     	   
	       var res = JSON.parse(this.responseText);
	       
	       if(res.status == "success"){
		       	/**reset current category**/
		       	var library = Alloy.createCollection('brochure'); 
				library.resetBrochure();
				
				/**load new set of category from API**/
		       	var arr = res.data;
		       
		       	arr.forEach(function(entry) {
					var brochure = Alloy.createModel('brochure', {
				        id: entry.b_id,
					    title: entry.b_title,
					    cover: entry.cover,
					    content: entry.attachment,
					    status: entry.b_status,
					    format: entry.b_format
				    });
				    brochure.save();
				});
				
				console.log("saved brochure done");
	       }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	     },
	     timeout : 50000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
};

//load store locator to db
exports.loadStoreLocator = function (ex){
	 var url = getStoreLocatorList;
	 
	 var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	     	  
	       var res = JSON.parse(this.responseText);
	       
	       if(res.status == "success"){
		       	/**reset current category**/
		       	var library = Alloy.createCollection('storeLocator'); 
				library.resetStore();
				
				/**load new set of category from API**/
		       	var arr = res.data; 
		       	arr.forEach(function(entry) {
					var storeLocator = Alloy.createModel('storeLocator', {
				        
				        id: entry.f_id,
					    outlet: entry.f_outlet,
					    area: entry.f_area,
					    state: entry.f_state,
					    address: entry.f_address,
					    mobile: entry.f_mobile,
					    fax: entry.f_fax,
					    email: entry.f_email,
					    latitude: entry.f_lat,
					    longitude: entry.f_lng,
					    category: entry.f_category
				    });
				    storeLocator.save();
				 
				});
				
				console.log("saved store locator done");
	       }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	     },
	     timeout : 50000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
};

//private function

function onErrorCallback(e) {
	var common = require('common');
	// Handle your errors in here
	common.createAlert("Error", e);
};
