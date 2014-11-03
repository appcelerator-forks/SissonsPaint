function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
<<<<<<< HEAD
    function generateColour() {
        console.log(details.length);
        var viewWidth = 50 * Math.ceil((details.length + 1) / 2) + 10;
        var topRow = Titanium.UI.createView({
            layout: "horizontal",
            bottom: 10,
            height: 40,
            width: viewWidth
        });
        var bottomRow = Titanium.UI.createView({
            layout: "horizontal",
            height: 40,
            width: viewWidth
        });
        for (var i = 0; i < details.length; i++) {
            var colours = $.UI.create("View", {
                backgroundColor: "rgb(" + details[i].rgb + ")",
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            });
            i % 2 == 1 ? topRow.add(colours) : bottomRow.add(colours);
        }
        $.scrollView.add(topRow);
        $.scrollView.add(bottomRow);
    }
=======
>>>>>>> FETCH_HEAD
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
        id: "mainView"
    });
<<<<<<< HEAD
    $.__views.mainView && $.addTopLevelView($.__views.mainView);
    $.__views.__alloyId41 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        top: "0",
        id: "__alloyId41"
    });
    $.__views.mainView.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Alloy.createController("toggle", {
        id: "__alloyId42",
        __parentSymbol: $.__views.__alloyId41
    });
    $.__views.__alloyId42.setParent($.__views.__alloyId41);
    $.__views.__alloyId43 = Ti.UI.createLabel({
=======
    $.__views.colourPicker && $.addTopLevelView($.__views.colourPicker);
    $.__views.toggle = Ti.UI.createView({
        layout: "horizontal",
        id: "toggle",
        height: "80"
    });
    $.__views.colourPicker.add($.__views.toggle);
    $.__views.__alloyId40 = Alloy.createController("toggle", {
        id: "__alloyId40",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId40.setParent($.__views.toggle);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
>>>>>>> FETCH_HEAD
        font: {
            fontSize: 22
        },
        text: "Colour Picker",
        color: "black",
        width: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
        id: "__alloyId43"
    });
    $.__views.__alloyId41.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        height: "50%",
        bottom: "0",
        id: "__alloyId44"
    });
    $.__views.mainView.add($.__views.__alloyId44);
    $.__views.bottomColorBar = Ti.UI.createView({
        id: "bottomColorBar",
        layout: "vertical"
    });
    $.__views.__alloyId44.add($.__views.bottomColorBar);
    $.__views.__alloyId45 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        bottom: "10",
        id: "__alloyId45"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "RECOMMEND COLOURS",
        color: "black",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId46"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId46);
    $.__views.recommendView = Ti.UI.createScrollView({
        id: "recommendView",
        backgroundColor: "white",
        layout: "vertical",
        scrollType: "horizontal",
        height: "50"
    });
    $.__views.bottomColorBar.add($.__views.recommendView);
    $.__views.__alloyId47 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        bottom: "10",
        id: "__alloyId47"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "COLOUR LIBRARY",
        color: "black",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId48"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId48);
=======
        id: "__alloyId41"
    });
    $.__views.toggle.add($.__views.__alloyId41);
    $.__views.canvas = Ti.UI.createWebView({
        id: "canvas",
        url: "/html/colour_picker.html",
        height: "100%",
        enableZoomControls: "false"
    });
    $.__views.colourPicker.add($.__views.canvas);
<<<<<<< HEAD
=======
=======
    $.__views.colourPicker.add($.__views.__alloyId43);
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        backgroundColor: "white",
        layout: "vertical",
        scrollType: "horizontal",
        height: "100"
    });
<<<<<<< HEAD
    $.__views.bottomColorBar.add($.__views.scrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var viewHeight = Ti.Platform.displayCaps.platformHeight;
    $.mainView.setHeight(viewHeight);
    console.log($.mainView.getHeight());
    $.bottomColorBar.setBottom(0);
    var colour_lib = Alloy.createCollection("colour");
    var details = colour_lib.getColourList();
    generateColour();
=======
    $.__views.colourPicker.add($.__views.scrollView);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var toggleHeight = $.toggle.getHeight();
    var canvasHeight = pHeight - toggleHeight;
    var colour_lib = Alloy.createCollection("colour");
    colour_lib.getColourList();
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
<<<<<<< HEAD
    var getColor = function(e) {
        $.colourPicker.backgroundColor = "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")";
    };
    Ti.App.addEventListener("app:getColour", getColor);
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;