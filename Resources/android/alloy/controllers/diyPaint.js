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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
    $.__views.__alloyId32 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId32"
    });
    $.__views.diyPaint.add($.__views.__alloyId32);
=======
    $.__views.__alloyId27 = Ti.UI.createView({
=======
    $.__views.__alloyId28 = Ti.UI.createView({
>>>>>>> 21/10/2014
        backgroundColor: "white",
        id: "__alloyId28"
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
    $.__views.diyPaint.add($.__views.__alloyId25);
=======
    $.__views.diyPaint.add($.__views.__alloyId27);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
<<<<<<< HEAD
=======
    $.__views.diyPaint.add($.__views.__alloyId28);
>>>>>>> 21/10/2014
=======
>>>>>>> FETCH_HEAD
    $.__views.toggle = Ti.UI.createView({
        backgroundColor: "yellow",
        id: "toggle",
        layout: "horizontal",
        height: "80",
        top: "0"
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
    $.__views.__alloyId32.add($.__views.toggle);
    $.__views.__alloyId33 = Alloy.createController("toggle", {
        id: "__alloyId33",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId33.setParent($.__views.toggle);
    $.__views.__alloyId34 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId25.add($.__views.toggle);
    $.__views.__alloyId26 = Alloy.createController("toggle", {
        id: "__alloyId26",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId26.setParent($.__views.toggle);
    $.__views.__alloyId27 = Ti.UI.createLabel({
=======
    $.__views.__alloyId27.add($.__views.toggle);
    $.__views.__alloyId28 = Alloy.createController("toggle", {
        id: "__alloyId28",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId28.setParent($.__views.toggle);
    $.__views.__alloyId29 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
<<<<<<< HEAD
=======
    $.__views.__alloyId28.add($.__views.toggle);
    $.__views.__alloyId29 = Alloy.createController("toggle", {
        id: "__alloyId29",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId29.setParent($.__views.toggle);
    $.__views.__alloyId30 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
=======
>>>>>>> FETCH_HEAD
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "DIY Paint",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
        id: "__alloyId34"
    });
    $.__views.toggle.add($.__views.__alloyId34);
=======
<<<<<<< HEAD
        id: "__alloyId27"
    });
    $.__views.toggle.add($.__views.__alloyId27);
=======
        id: "__alloyId29"
    });
    $.__views.toggle.add($.__views.__alloyId29);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
<<<<<<< HEAD
=======
        id: "__alloyId30"
    });
    $.__views.toggle.add($.__views.__alloyId30);
>>>>>>> 21/10/2014
=======
>>>>>>> FETCH_HEAD
    $.__views.canvas = Ti.UI.createWebView({
        backgroundColor: "h",
        id: "canvas",
        url: "/html/canvas-paint-bucket.html",
<<<<<<< HEAD
        enableZoomControls: "false"
=======
        disableBounce: "true",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
>>>>>>> FETCH_HEAD
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
    $.__views.__alloyId32.add($.__views.canvas);
=======
    $.__views.__alloyId27.add($.__views.canvas);
>>>>>>> FETCH_HEAD
<<<<<<< HEAD
=======
    $.__views.__alloyId28.add($.__views.canvas);
>>>>>>> 21/10/2014
=======
>>>>>>> FETCH_HEAD
    $.__views.toolbar = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: "0",
        backgroundColor: "orange",
        id: "toolbar"
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
    $.__views.__alloyId32.add($.__views.toolbar);
=======
<<<<<<< HEAD
    $.__views.__alloyId25.add($.__views.toolbar);
    $.__views.settings = Ti.UI.createImageView({
=======
    $.__views.__alloyId27.add($.__views.toolbar);
>>>>>>> FETCH_HEAD
<<<<<<< HEAD
=======
    $.__views.__alloyId28.add($.__views.toolbar);
>>>>>>> 21/10/2014
=======
>>>>>>> FETCH_HEAD
    $.__views.settings1 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
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
    Ti.Platform.displayCaps.platformWidth;
    var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var toolbarHeight = $.toolbar.rect.height;
    var toggleHeight = $.toggle.getHeight();
    var canvasHeight = 0;
    $.toolbar.addEventListener("postlayout", function() {
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