function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function generateRecommended() {
        console.log(recommended.length);
        var recommendedRow = Titanium.UI.createView({
            layout: "horizontal",
            bottom: 10,
            height: 40,
            width: "100%"
        });
        for (var i = 0; i < recommended.length; i++) {
            console.log(recommended[i]);
            var random = Math.floor(Math.random() * recommended.length);
            var list_colours = category_colour_lib.getCategoryColourByCategory(recommended[random].id);
            for (var j = 0; j < list_colours.length; j++) {
                var colour_details = colour_lib.getColourById(list_colours[j].colour_id);
                var colours = $.UI.create("View", {
                    backgroundColor: "rgb(" + colour_details.rgb + ")",
                    width: "40",
                    height: "40",
                    left: "5",
                    right: "5"
                });
                var cat_colour = category_colour_lib.getCateByColourId(colour_details.id);
                var cat_details = library.getCategoryById(cat_colour.cate_id);
                createColorEvent(colours, colour_details, cat_details);
                console.log("listColour: " + colour_details.rgb);
                recommendedRow.add(colours);
            }
        }
        $.recommendView.add(recommendedRow);
    }
    function generateColour() {
        console.log(details.length);
        var topRow = Titanium.UI.createView({
            layout: "horizontal",
            bottom: 10,
            height: 40,
            width: "100%"
        });
        var bottomRow = Titanium.UI.createView({
            layout: "horizontal",
            height: 40,
            width: "100%"
        });
        for (var i = 0; i < details.length; i++) {
            console.log(details[i]);
            var colours = $.UI.create("View", {
                backgroundColor: "rgb(" + details[i].rgb + ")",
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            });
            i % 2 == 1 ? topRow.add(colours) : bottomRow.add(colours);
            var cat_colour = category_colour_lib.getCateByColourId(details[i].id);
            var cat_details = library.getCategoryById(cat_colour.cate_id);
            createColorEvent(colours, details[i], cat_details);
        }
        $.scrollView.add(topRow);
        $.scrollView.add(bottomRow);
    }
    function shareFacebook() {
        var f = Ti.Filesystem.getFile("file:///storage/sdcard0/Pictures/Survival Wallpaper/1380785291867.jpg");
        var blob = f.read();
        var data = {
            message: "Sissons Paints Omnicolor",
            picture: blob
        };
        fb.requestWithGraphPath("me/photos", data, "POST", function(e) {
            alert(e.success && e.result ? "Success : " + e.result : e.error ? e.error : "cancel");
        });
    }
    function createColorEvent(colours, colour_details, details) {
        colours.addEventListener("click", function() {
            Ti.App.Properties.setString("from", "colourPicker");
            var nav = Alloy.createController("colourDetails", {
                colour_details: colour_details,
                details: details
            }).getView();
            Alloy.Globals.Drawer.setCenterWindow(nav);
        });
    }
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
    $.__views.colourPicker = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "colourPicker"
    });
    $.__views.colourPicker && $.addTopLevelView($.__views.colourPicker);
    $.__views.toggle = Ti.UI.createView({
        layout: "horizontal",
        id: "toggle",
        height: "80"
    });
    $.__views.colourPicker.add($.__views.toggle);
    $.__views.__alloyId39 = Alloy.createController("toggle", {
        id: "__alloyId39",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId39.setParent($.__views.toggle);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        font: {
            fontSize: 22
        },
        text: "Colour Picker",
        color: "black",
        width: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId40"
    });
    $.__views.toggle.add($.__views.__alloyId40);
    $.__views.canvas = Ti.UI.createWebView({
        id: "canvas",
        url: "/html/colour_picker.html",
        height: "40%",
        enableZoomControls: "false",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.colourPicker.add($.__views.canvas);
    $.__views.__alloyId41 = Ti.UI.createView({
        height: "50%",
        bottom: "0",
        id: "__alloyId41"
    });
    $.__views.colourPicker.add($.__views.__alloyId41);
    $.__views.bottomColorBar = Ti.UI.createView({
        id: "bottomColorBar",
        layout: "vertical"
    });
    $.__views.__alloyId41.add($.__views.bottomColorBar);
    $.__views.__alloyId42 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        bottom: "10",
        id: "__alloyId42"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        text: "RECOMMEND COLOURS",
        color: "black",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId43"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId43);
    $.__views.recommendView = Ti.UI.createScrollView({
        id: "recommendView",
        backgroundColor: "white",
        layout: "horizontal",
        scrollType: "horizontal",
        height: "50",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.bottomColorBar.add($.__views.recommendView);
    $.__views.__alloyId44 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        bottom: "10",
        id: "__alloyId44"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "COLOUR LIBRARY",
        color: "black",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId45"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId45);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        backgroundColor: "white",
        layout: "vertical",
        scrollType: "horizontal",
        height: "100",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.bottomColorBar.add($.__views.scrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var fb = require("facebook");
    fb.appid = 752094718209236;
    Ti.Platform.displayCaps.platformHeight;
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var toggleHeight = $.toggle.getHeight();
    var canvasHeight = pHeight - toggleHeight;
    var category_colour_lib = Alloy.createCollection("category_colour");
    var colour_lib = Alloy.createCollection("colour");
    var details = colour_lib.getClosestColourList("100", "100", "100");
    var library = Alloy.createCollection("category");
    var recommended = library.getCategoryListByType(1);
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
                    console.log(image.nativePath);
                    Ti.App.Properties.setString("colour_picker_image", image.nativePath);
                    Ti.App.fireEvent("web:loadImage", {
                        image: image.nativePath
                    });
                }
            },
            cancel: function() {}
        });
    });
    1 == Ti.App.Properties.getString("back") ? Ti.App.Properties.setString("back", 0) : dialog.show();
    generateRecommended();
    var getColor = function(e) {
        $.colourPicker.backgroundColor = "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")";
    };
    Ti.App.addEventListener("app:getColour", getColor);
    generateColour();
    var app = {
        sharer: {
            chooser: function() {
                if (fb.loggedIn) shareFacebook(); else {
                    fb.permissions = [ "publish_actions" ];
                    fb.addEventListener("login", function(e) {
                        e.success && shareFaceboo();
                    });
                    fb.authorize();
                }
            }
        }
    };
    var MESSAGE = "#sissons_paint";
    var btnShareChooser = Ti.UI.createButton({
        title: "Media Share"
    });
    btnShareChooser.addEventListener("click", app.sharer.chooser.bind(null, MESSAGE));
    $.recommendView.add(btnShareChooser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;