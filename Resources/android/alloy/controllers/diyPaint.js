function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function PixelsToDPUnits(ThePixels) {
        return ThePixels / (Titanium.Platform.displayCaps.dpi / 160);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diyPaint";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.diyPaint = Ti.UI.createView({
        id: "diyPaint"
    });
    $.__views.diyPaint && $.addTopLevelView($.__views.diyPaint);
    $.__views.__alloyId24 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId24"
    });
    $.__views.diyPaint.add($.__views.__alloyId24);
    $.__views.toggle = Ti.UI.createView({
        id: "toggle",
        layout: "horizontal",
        height: "80",
        top: "0"
    });
    $.__views.__alloyId24.add($.__views.toggle);
    $.__views.__alloyId25 = Alloy.createController("toggle", {
        id: "__alloyId25",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId25.setParent($.__views.toggle);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "DIY Paint",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId26"
    });
    $.__views.toggle.add($.__views.__alloyId26);
    $.__views.canvas = Ti.UI.createWebView({
        id: "canvas",
        url: "/html/canvas-paint-bucket.html",
        disableBounce: "true"
    });
    $.__views.__alloyId24.add($.__views.canvas);
    $.__views.toolbar = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: "0",
        id: "toolbar"
    });
    $.__views.__alloyId24.add($.__views.toolbar);
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
    Ti.Platform.displayCaps.platformWidth;
    var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var toolbarHeight = $.toolbar.rect.height;
    var toggleHeight = $.toggle.getHeight();
    $.toolbar.addEventListener("postlayout", function() {
        toolbarHeight = $.toolbar.rect.height;
        var canvasHeight = pHeight - toolbarHeight - 48 - toggleHeight;
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