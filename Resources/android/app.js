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

function printDate() {
    var temp = new Date();
    var dateStr = padStr(temp.getFullYear()) + padStr(1 + temp.getMonth()) + padStr(temp.getDate()) + padStr(temp.getHours()) + padStr(temp.getMinutes()) + padStr(temp.getSeconds());
    return dateStr;
}

function padStr(i) {
    return 10 > i ? "0" + i : "" + i;
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.createController("index");