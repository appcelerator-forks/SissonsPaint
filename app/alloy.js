// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

function toggle(e) { 
   Alloy.Globals.Drawer['toggleLeftWindow']();
}


function PixelsToDPUnits(ThePixels){
  return (ThePixels / (Titanium.Platform.displayCaps.dpi / 160));
}

function DPUnitsToPixels(TheDPUnits){
  return (TheDPUnits * (Titanium.Platform.displayCaps.dpi / 160));
}


function removeAllChildren(viewObject){
    //copy array of child object references because view's "children" property is live collection of child object references
    var children = viewObject.children.slice(0);
 
    for (var i = 0; i < children.length; ++i) {
        viewObject.remove(children[i]);
    }
}