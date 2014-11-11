var args = arguments[0] || {};

var library = Alloy.createCollection('storeLocator'); 
var details = library.getStoreStateList();

function listState(e){
	var nav = Alloy.createController("storeLocatorByState",{state:e.source.title}).getView(); 
	Alloy.Globals.Drawer.setCenterWindow(nav); 
}
