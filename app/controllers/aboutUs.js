var args = arguments[0] || {};

var API = require('api');
var COMM = require('common');
var submitContactForm = function(){
	
	var name 	   = $.name.value;
	//var contact    = $.phone.value;
	var email 	   = $.email.value;
	var message    = $.message.value;
	 
	if(name == ''){
		// COMM.createAlert('Request Rejected','Full name cannot be empty.');
		var alert = Titanium.UI.createAlertDialog({
			title: 'Request Rejected',
			message: 'Full name cannot be empty.',
			buttonNames: ['OK'],
			cancel: 1
		});
		alert.addEventListener('click', function(e){
			if (e.cancel === e.index || e.cancel === true)
			{
				return false;
			}
		});
		alert.show();
		return;
	}
	if(email == ''){
		// COMM.createAlert('Request Rejected','Email cannot be empty.');
		var alert = Titanium.UI.createAlertDialog({
			title: 'Request Rejected',
			message: 'Email cannot be empty.',
			buttonNames: ['OK'],
			cancel: 1
		});
		alert.addEventListener('click', function(e){
			if (e.cancel === e.index || e.cancel === true)
			{
				return false;
			}
		});
		alert.show();
		return;
	}
	if(message == ''){
		// COMM.createAlert('Request Rejected','Message cannot be empty.');
		var alert = Titanium.UI.createAlertDialog({
			title: 'Request Rejected',
			message: 'Message cannot be empty.',
			buttonNames: ['OK'],
			cancel: 1
		});
		alert.addEventListener('click', function(e){
			if (e.cancel === e.index || e.cancel === true)
			{
				return false;
			}
		});
		alert.show();
		return;
	}
	
	var url = API.sendContactMsg + "&name="+name+"&email="+email+"&message="+message;
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         var res = JSON.parse(this.responseText);
	         if(res.status == "success"){
	         	// COMM.createAlert('Message Sent','Your messages successfully sent to Sissons Paint.');
				var alert = Titanium.UI.createAlertDialog({
					title: 'Message Sent',
					message: 'Your messages successfully sent to Sissons Paint.',
					buttonNames: ['OK'],
					cancel: 1
				});
				alert.addEventListener('click', function(e){
					if (e.cancel === e.index || e.cancel === true)
					{
						return false;
					}
				});
				alert.show();
	         	$.name.value = "";
			//	$.phone.value = "";
				$.email.value = "";
				$.message.value = "";
	         }
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	        // COMM.createAlert('Network declined','Failed to contact with server. Please make sure your device are connected to internet.');
			var alert = Titanium.UI.createAlertDialog({
				title: 'Network declined',
				message: 'Failed to contact with server. Please make sure your device are connected to internet.',
				buttonNames: ['OK'],
				cancel: 1
			});
			alert.addEventListener('click', function(e){
				if (e.cancel === e.index || e.cancel === true)
				{
					return false;
				}
			});
			alert.show();
	     },
	     timeout : 5000  // in milliseconds
	 });
	 // Prepare the connection.
	 client.open("GET", url);
	 // Send the request.
	 client.send(); 
};

$.message.addEventListener('return', submitContactForm);
