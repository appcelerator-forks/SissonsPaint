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


exports.sendContactMsg    = "http://"+API_DOMAIN+"/api/sendMessage?user="+USER+"&key="+KEY;

exports.forgotPassword    = "http://"+API_DOMAIN+"/api/doForgotPassword?user="+USER+"&key="+KEY;
/*********************
**** API FUNCTION*****
**********************/

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
					    latitude: entry.f_lat,
					    longitude: entry.f_lng,
					    category: entry.f_category
				    });
				    storeLocator.save();
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

//private function

function onErrorCallback(e) {
	var common = require('common');
	// Handle your errors in here
	common.createAlert("Error", e);
};
