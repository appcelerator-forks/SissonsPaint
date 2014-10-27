function toggle() {
    Alloy.Globals.Drawer["toggleLeftWindow"]();
}

function PixelsToDPUnits(ThePixels) {
    return ThePixels / (Titanium.Platform.displayCaps.dpi / 160);
}

function DPUnitsToPixels(TheDPUnits) {
    return TheDPUnits * (Titanium.Platform.displayCaps.dpi / 160);
}

function removeAllChildren(viewObject) {
    var children = viewObject.children.slice(0);
    for (var i = 0; i < children.length; ++i) viewObject.remove(children[i]);
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.createController("index");