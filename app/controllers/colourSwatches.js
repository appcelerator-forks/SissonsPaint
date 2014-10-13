var args = arguments[0] || {};

var library = Alloy.createCollection('category'); 
var details = library.getCategoryList();


details.forEach(function(cate) {
		       			
	console.log(cate.name);
});