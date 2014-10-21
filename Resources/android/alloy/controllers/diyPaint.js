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
    $.__views.__alloyId25 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId25"
    });
    $.__views.diyPaint.add($.__views.__alloyId25);
    $.__views.toggle = Ti.UI.createView({
        backgroundColor: "yellow",
        id: "toggle",
        layout: "horizontal",
        height: "80",
        top: "0"
    });
    $.__views.__alloyId25.add($.__views.toggle);
    $.__views.__alloyId26 = Alloy.createController("toggle", {
        id: "__alloyId26",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId26.setParent($.__views.toggle);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "DIY Paint",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId27"
    });
    $.__views.toggle.add($.__views.__alloyId27);
    $.__views.canvas = Ti.UI.createWebView({
        backgroundColor: "h",
        id: "canvas",
        url: "/html/canvas-paint-bucket.html",
        enableZoomControls: "false"
    });
    $.__views.__alloyId25.add($.__views.canvas);
    $.__views.toolbar = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: "0",
        backgroundColor: "orange",
        id: "toolbar"
    });
    $.__views.__alloyId25.add($.__views.toolbar);
    $.__views.settings = Ti.UI.createImageView({
        width: "16.6%",
        id: "settings",
        mod: "settings",
        left: "0",
        image: "/images/power-icons.png"
    });
    $.__views.toolbar.add($.__views.settings);
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
    var toggleHeight = $.toggle.getHeight();
    var canvasHeight = 0;
    $.toolbar.addEventListener("postlayout", function() {
        console.log(pWidth);
        console.log(PixelsToDPUnits(pWidth));
        toolbarHeight = $.toolbar.rect.height;
        canvasHeight = pHeight - toolbarHeight - 25 - toggleHeight;
        console.log("page height: " + pHeight + ", toolbar:" + toolbarHeight + ", toggle" + toggleHeight + ", canvas:" + canvasHeight);
        $.canvas.setBottom(toolbarHeight);
        $.canvas.setHeight(canvasHeight);
    });
    $.canvas.addEventListener("load", function() {
        console.log(canvasHeight);
        console.log(pWidth);
        Ti.App.fireEvent("web:initCanvasSize", {
            height: canvasHeight,
            width: pWidth
        });
    });
    var dialog = Titanium.UI.createOptionDialog({
        title: "Choose an image source...",
        options: [ "Camera", "Photo Gallery", "Cancel" ],
        cancel: 2
    });
    dialog.addEventListener("click", function(e) {
        0 == e.index ? Titanium.Media.showCamera({
            success: function(event) {
                var image = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && Ti.App.Properties.setString("image", image.nativePath);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Device does not have camera") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            allowImageEditing: true,
            saveToPhotoGallery: true
        }) : 1 == e.index && Titanium.Media.openPhotoGallery({
            success: function(event) {
                var image = event.media;
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    Ti.App.Properties.setString("image", image.nativePath);
                    Ti.App.fireEvent("web:loadImage", {
                        image: image.nativePath
                    });
                }
            },
            cancel: function() {}
        });
    });
    dialog.show();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;