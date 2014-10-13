<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="diyPaint",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var e=this,t={};e.__views.diyPaint=Ti.UI.createView({backgroundColor:"white",layout:"vertical",id:"diyPaint"}),e.__views.diyPaint&&e.addTopLevelView(e.__views.diyPaint),e.__views.__alloyId27=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId27"}),e.__views.diyPaint.add(e.__views.__alloyId27),e.__views.__alloyId28=Alloy.createController("toggle",{id:"__alloyId28",__parentSymbol:e.__views.__alloyId27}),e.__views.__alloyId28.setParent(e.__views.__alloyId27),e.__views.__alloyId29=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:28},text:"DIY Paint",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId29"}),e.__views.__alloyId27.add(e.__views.__alloyId29),e.__views.__alloyId30=Ti.UI.createLabel({width:Ti.UI.SIZE,height:Ti.UI.SIZE,color:"#000",text:"This DIY Paint",id:"__alloyId30"}),e.__views.diyPaint.add(e.__views.__alloyId30),t.destroy=function(){},_.extend(e,e.__views),arguments[0]||{},_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function Controller() {
    function PixelsToDPUnits(ThePixels) {
        return ThePixels / (Titanium.Platform.displayCaps.dpi / 160);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diyPaint";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.diyPaint = Ti.UI.createView({
        id: "diyPaint"
    });
    $.__views.diyPaint && $.addTopLevelView($.__views.diyPaint);
    $.__views.__alloyId16 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId16"
    });
    $.__views.diyPaint.add($.__views.__alloyId16);
    $.__views.canvas = Ti.UI.createWebView({
        id: "canvas",
        url: "/html/canvas-paint-bucket.html",
        disableBounce: "true"
    });
    $.__views.__alloyId16.add($.__views.canvas);
    $.__views.toolbar = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: "0",
        id: "toolbar"
    });
    $.__views.__alloyId16.add($.__views.toolbar);
    $.__views.settings1 = Ti.UI.createImageView({
        width: "16.6%",
        id: "settings1",
        mod: "settings",
        left: "0",
        image: "/images/power-icons.png"
    });
    $.__views.toolbar.add($.__views.settings1);
    $.__views.settings = Ti.UI.createImageView({
        width: "16.6%",
        id: "settings",
        mod: "settings",
        left: "16.6%",
        image: "/images/power-icons.png"
    });
    $.__views.toolbar.add($.__views.settings);
    $.__views.settings = Ti.UI.createImageView({
        width: "16.6%",
        id: "settings",
        mod: "settings",
        left: "33.2%",
        image: "/images/power-icons.png"
    });
    $.__views.toolbar.add($.__views.settings);
    $.__views.settings = Ti.UI.createImageView({
        width: "16.6%",
        id: "settings",
        mod: "settings",
        left: "49.8%",
        image: "/images/power-icons.png"
    });
    $.__views.toolbar.add($.__views.settings);
    $.__views.settings = Ti.UI.createImageView({
        width: "16.6%",
        id: "settings",
        mod: "settings",
        left: "66.4%",
        image: "/images/power-icons.png"
    });
    $.__views.toolbar.add($.__views.settings);
    $.__views.settings = Ti.UI.createImageView({
        width: "16.6%",
        id: "settings",
        mod: "settings",
        left: "83%",
        image: "/images/power-icons.png"
    });
    $.__views.toolbar.add($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var toolbarHeight = $.toolbar.rect.height;
    $.toolbar.addEventListener("postlayout", function() {
        console.log(pWidth);
        console.log(PixelsToDPUnits(pWidth));
        toolbarHeight = $.toolbar.rect.height;
        var canvasHeight = pHeight - toolbarHeight - 48;
        $.canvas.setBottom(toolbarHeight);
        $.canvas.setHeight(canvasHeight);
    });
    Ti.API.info("Ti.Platform.displayCaps.density: " + Ti.Platform.displayCaps.density);
    Ti.API.info("Ti.Platform.displayCaps.dpi: " + Ti.Platform.displayCaps.dpi);
    Ti.API.info("Ti.Platform.displayCaps.platformHeight: " + Ti.Platform.displayCaps.platformHeight);
    Ti.API.info("Ti.Platform.displayCaps.platformWidth: " + Ti.Platform.displayCaps.platformWidth);
    Ti.API.info("Ti.Platform.displayCaps.xdpi: " + Ti.Platform.displayCaps.xdpi);
    Ti.API.info("Ti.Platform.displayCaps.ydpi: " + Ti.Platform.displayCaps.ydpi);
    Ti.API.info("Ti.Platform.displayCaps.logicalDensityFactor: " + Ti.Platform.displayCaps.logicalDensityFactor);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
