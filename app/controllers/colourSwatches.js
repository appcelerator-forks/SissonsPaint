var args = arguments[0] || {};

var library = Alloy.createCollection('category'); 
var details = library.getCategoryList();

console.log(details);
