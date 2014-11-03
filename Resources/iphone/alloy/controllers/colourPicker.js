function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "colourPicker";
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
    $.__views.mainView = Ti.UI.createView({
        backgroundColor: "white",
        id: "mainView",
        layout: "vertical"
    });
    $.__views.mainView && $.addTopLevelView($.__views.mainView);
    $.__views.toggle = Ti.UI.createView({
        layout: "horizontal",
        id: "toggle",
        height: "80"
    });
    $.__views.mainView.add($.__views.toggle);
    $.__views.__alloyId41 = Alloy.createController("toggle", {
        id: "__alloyId41",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId41.setParent($.__views.toggle);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        font: {
            fontSize: 22
        },
        text: "Colour Picker",
        color: "black",
        width: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId42"
    });
    $.__views.toggle.add($.__views.__alloyId42);
    $.__views.canvas = Ti.UI.createWebView({
        id: "canvas",
        url: "/html/colour_picker.html",
        height: "40%",
        enableZoomControls: "false"
    });
    $.__views.mainView.add($.__views.canvas);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: "50%",
        bottom: "0",
        id: "__alloyId43"
    });
    $.__views.mainView.add($.__views.__alloyId43);
    $.__views.bottomColorBar = Ti.UI.createView({
        id: "bottomColorBar",
        layout: "vertical"
    });
    $.__views.__alloyId43.add($.__views.bottomColorBar);
    $.__views.__alloyId44 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        bottom: "10",
        id: "__alloyId44"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "RECOMMEND COLOURS",
        color: "black",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId45"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId45);
    $.__views.recommendView = Ti.UI.createScrollView({
        id: "recommendView",
        backgroundColor: "white",
        layout: "vertical",
        scrollType: "horizontal",
        height: "50"
    });
    $.__views.bottomColorBar.add($.__views.recommendView);
    $.__views.__alloyId46 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        bottom: "10",
        id: "__alloyId46"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "COLOUR LIBRARY",
        color: "black",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId47"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId47);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        backgroundColor: "white",
        layout: "vertical",
        scrollType: "horizontal",
        height: "100"
    });
    $.__views.bottomColorBar.add($.__views.scrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var viewHeight = Ti.Platform.displayCaps.platformHeight;
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var toggleHeight = $.toggle.getHeight();
    var canvasHeight = pHeight - toggleHeight;
    var colour_lib = Alloy.createCollection("colour");
    colour_lib.getColourList();
    $.mainView.setHeight(viewHeight);
    var dialog = Titanium.UI.createOptionDialog({
        title: "Choose an image source...",
        options: [ "Camera", "Photo Gallery", "Cancel" ],
        cancel: 2
    });
    $.canvas.addEventListener("load", function() {
        Ti.App.fireEvent("web:initCanvasSize", {
            height: canvasHeight,
            width: pWidth
        });
    });
    dialog.addEventListener("click", function(e) {
        0 == e.index ? Titanium.Media.showCamera({
            success: function(event) {
                var image = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && Ti.App.Properties.setString("colour_picker_image", image.nativePath);
            },
            cancel: function() {},
            error: function(error) {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                a.setMessage(error.code == Titanium.Media.NO_CAMERA ? "Device does not have camera" : "Unexpected error: " + error.code);
                a.show();
            },
            allowImageEditing: true,
            saveToPhotoGallery: true
        }) : 1 == e.index && Titanium.Media.openPhotoGallery({
            success: function(event) {
                var image = event.media;
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    Ti.App.Properties.setString("colour_picker_image", image.nativePath);
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