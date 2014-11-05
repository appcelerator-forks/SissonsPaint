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

function hexstr(number) {
    var chars = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
    var low = 15 & number;
    var high = number >> 4 & 15;
    return "" + chars[high] + chars[low];
}

function rgbToHex(r, g, b) {
    return "#" + hexstr(r) + hexstr(g) + hexstr(b);
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