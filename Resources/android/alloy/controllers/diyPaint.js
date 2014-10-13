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
<<<<<<< HEAD
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
=======
    $.__views.__alloyId85 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "This DIY Paint",
        id: "__alloyId85"
    });
    $.__views.diyPaint.add($.__views.__alloyId85);
>>>>>>> FETCH_HEAD
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