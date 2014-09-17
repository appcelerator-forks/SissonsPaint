var args = arguments[0] || {};

var API = require('api');
var COMM = require('common');
var submitContactForm = function(){
	
	var name 	   = $.username.value;
	var contact    = $.phone.value;
	var email 	   = $.email.value;
	var message    = $.message.value;
	 
	if(name == ''){
		COMM.createAlert('Request Rejected','Full name cannot be empty.');
		return;
	}
	if(email == ''){
		COMM.createAlert('Request Rejected','Email cannot be empty.');
		return;
	}
	if(message == ''){
		COMM.createAlert('Request Rejected','Message cannot be empty.');
		return;
	}
	
	var url = API.sendContactMsg + "&name="+name+"&email="+email+"&contact="+contact+"&message="+message;
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         if(res.status == "success"){
	         	COMM.createAlert('Message Sent','Your messages successfully sent to admin.');
	         	$.username.value = "";
				$.phone.value = "";
				$.email.value = "";
				$.message.value = "";
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         COMM.createAlert('Network declined','Failed to contact with server. Please make sure your device are connected to internet.');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
};
