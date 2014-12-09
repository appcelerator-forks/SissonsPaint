function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function takePhoto() {
        $.activityIndicator.hide();
        $.loadingBar.opacity = "0";
        $.loadingBar.height = "0";
        var dialog = Titanium.UI.createOptionDialog({
            title: "Choose an image source...",
            options: [ "Camera", "Photo Gallery", "Cancel" ],
            cancel: 2
        });
        dialog.addEventListener("click", function(e) {
            0 == e.index ? Titanium.Media.showCamera({
                success: function(event) {
                    var image = event.media;
                    if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                        var nativePath = event.media.nativePath;
                        ImageFactory.rotateResizeImage(nativePath, pWidth, 100);
                        Ti.App.Properties.setString("colour_picker_image", image.nativePath);
                        Ti.App.fireEvent("web:loadImage", {
                            image: image.nativePath
                        });
                    }
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
    }
    function toggleActivation() {
        $.colorSelection.visible ? $.colorSelection.hide() : $.colorSelection.show();
    }
    function generateRecommended() {
        var random = Math.floor(Math.random() * recommended.length);
        var list_colours = category_colour_lib.getCategoryColourByCategory(recommended[random].id);
        var viewWidth = 50 * Math.ceil(list_colours.length) + 10;
        var recommendedRow = Titanium.UI.createView({
            layout: "horizontal",
            bottom: 10,
            height: 40,
            width: viewWidth
        });
        for (var j = 0; j < list_colours.length; j++) {
            var colour_details = colour_lib.getColourById(list_colours[j].colour_id);
            var colours;
            colours = "" != colour_details.thumb ? $.UI.create("ImageView", {
                image: colour_details.thumb,
                borderColor: "#A5A5A5",
                borderWidth: 1,
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            }) : $.UI.create("View", {
                backgroundColor: "rgb(" + colour_details.rgb + ")",
                borderColor: "#A5A5A5",
                borderWidth: 1,
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            });
            var cat_colour = category_colour_lib.getCateByColourId(colour_details.id, "2");
            var cat_details = library.getCategoryByIdOnly(cat_colour.cate_id);
            createColorEvent(colours, colour_details, cat_details);
            recommendedRow.add(colours);
        }
        $.recommendView.add(recommendedRow);
    }
    function generateColour() {
        removeAllChildren($.scrollView);
        var viewWidth = 50 * details.length + 20;
        var closestRow = Titanium.UI.createView({
            layout: "horizontal",
            height: 40,
            width: viewWidth
        });
        for (var i = 0; i < details.length; i++) {
            var colours;
            colours = "" != details[i].thumb ? $.UI.create("ImageView", {
                image: details[i].thumb,
                borderColor: "#A5A5A5",
                borderWidth: 1,
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            }) : $.UI.create("View", {
                backgroundColor: "rgb(" + details[i].rgb + ")",
                borderColor: "#A5A5A5",
                borderWidth: 1,
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            });
            var cat_colour = category_colour_lib.getCateByColourId(details[i].id, "2");
            var cat_details = library.getCategoryById(cat_colour.cate_id, "2");
            createColorEvent(colours, details[i], cat_details);
            closestRow.add(colours);
        }
        $.loadingBar.opacity = "0";
        $.loadingBar.height = "0";
        $.loadingBar.top = "0";
        $.scrollView.add(closestRow);
        $.colorSelection.show();
    }
    function createColorEvent(colours, colour_details, details) {
        colours.addEventListener("click", function() {
            console.log("color detail" + JSON.stringify(details));
            Ti.App.Properties.setString("from", "colourPicker");
            var nav = Alloy.createController("colourDetails", {
                colour_details: colour_details,
                details: details
            }).getView();
            nav.open();
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
    var __defers = {};
    $.__views.colourPicker = Ti.UI.createView({
        backgroundColor: "white",
        id: "colourPicker"
    });
    $.__views.colourPicker && $.addTopLevelView($.__views.colourPicker);
    $.__views.toggle = Ti.UI.createView({
        layout: "horizontal",
        id: "toggle",
        top: "0",
        height: "80",
        backgroundImage: "/images/banner_colour_picker.jpg"
    });
    $.__views.colourPicker.add($.__views.toggle);
    $.__views.__alloyId24 = Alloy.createController("toggle", {
        id: "__alloyId24",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId24.setParent($.__views.toggle);
    $.__views.canvas = Ti.UI.createWebView({
        id: "canvas",
        url: "/html/colour_picker.html",
        top: "80",
        height: "80%",
        enableZoomControls: "false",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
        disableBounce: "true"
    });
    $.__views.colourPicker.add($.__views.canvas);
    $.__views.loadingBar = Ti.UI.createView({
        layout: "vertical",
        id: "loadingBar",
        height: "0",
        width: "120",
        borderRadius: "15",
        top: "0",
        opacity: "1",
        backgroundColor: "#2E2E2E"
    });
    $.__views.colourPicker.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        top: 15,
        left: 30,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ffffff",
        text: "Loading",
        id: "__alloyId25"
    });
    $.__views.loadingBar.add($.__views.__alloyId25);
    $.__views.colorSelection = Ti.UI.createView({
        layout: "vertical",
        height: "40%",
        bottom: "60",
        id: "colorSelection",
        visible: "false"
    });
    $.__views.colourPicker.add($.__views.colorSelection);
    $.__views.__alloyId26 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        top: "0",
        id: "__alloyId26"
    });
    $.__views.colorSelection.add($.__views.__alloyId26);
    $.__views.bottomColorBar = Ti.UI.createView({
        id: "bottomColorBar",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.colorSelection.add($.__views.bottomColorBar);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "COLOURS INSPIRATION",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        backgroundColor: "white",
        id: "__alloyId27"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId27);
    $.__views.recommendView = Ti.UI.createScrollView({
        id: "recommendView",
        backgroundColor: "white",
        layout: "horizontal",
        scrollType: "horizontal",
        height: "50",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.bottomColorBar.add($.__views.recommendView);
    $.__views.__alloyId28 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        id: "__alloyId28"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "CLOSEST COLOUR",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        backgroundColor: "white",
        id: "__alloyId29"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId29);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        backgroundColor: "white",
        layout: "horizontal",
        scrollType: "horizontal",
        height: "50",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.bottomColorBar.add($.__views.scrollView);
    $.__views.toolbar = Ti.UI.createView({
        height: "60",
        bottom: "0",
        id: "toolbar",
        width: "100%",
        backgroundImage: "/images/tool_bar.jpg"
    });
    $.__views.colourPicker.add($.__views.toolbar);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        id: "__alloyId30"
    });
    $.__views.toolbar.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        width: "30%",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    $.__views.takePhoto = Ti.UI.createImageView({
        id: "takePhoto",
        image: "/images/icon_photo.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId32.add($.__views.takePhoto);
    takePhoto ? $.__views.takePhoto.addEventListener("click", takePhoto) : __defers["$.__views.takePhoto!click!takePhoto"] = true;
    $.__views.__alloyId33 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId33"
    });
    $.__views.__alloyId30.add($.__views.__alloyId33);
    $.__views.toggleActivation = Ti.UI.createImageView({
        id: "toggleActivation",
        image: "/images/btn_eyedrop.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId33.add($.__views.toggleActivation);
    toggleActivation ? $.__views.toggleActivation.addEventListener("click", toggleActivation) : __defers["$.__views.toggleActivation!click!toggleActivation"] = true;
    $.__views.__alloyId34 = Ti.UI.createView({
        width: "30%",
        id: "__alloyId34"
    });
    $.__views.__alloyId30.add($.__views.__alloyId34);
    $.__views.win = Ti.UI.createView({
        id: "win",
        height: "90%",
        width: "90%",
        backgroundColor: "transparent",
        theme: "Theme.NoActionBar",
        navBarHidden: "true",
        fullscreen: "true",
        borderColor: "#A5A5A5",
        borderWidth: "2",
        visible: "false"
    });
    $.__views.colourPicker.add($.__views.win);
    var __alloyId35 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "#FFFFFF"
    });
    __alloyId35.push($.__views.view1);
    $.__views.__alloyId36 = Ti.UI.createImageView({
        image: "/images/tutorial/colorPicker/tutorial_picker1.jpg",
        width: "100%",
        id: "__alloyId36"
    });
    $.__views.view1.add($.__views.__alloyId36);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "#FFFFFF"
    });
    __alloyId35.push($.__views.view2);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        image: "/images/tutorial/colorPicker/tutorial_picker2.jpg",
        width: "100%",
        id: "__alloyId37"
    });
    $.__views.view2.add($.__views.__alloyId37);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "#FFFFFF"
    });
    __alloyId35.push($.__views.view3);
    $.__views.__alloyId38 = Ti.UI.createImageView({
        image: "/images/tutorial/colorPicker/tutorial_picker3.jpg",
        width: "100%",
        id: "__alloyId38"
    });
    $.__views.view3.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "4",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId39"
    });
    $.__views.view3.add($.__views.__alloyId39);
    $.__views.checkBox = Ti.UI.createSwitch({
        value: true,
        id: "checkBox",
        style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX
    });
    $.__views.__alloyId39.add($.__views.checkBox);
    $.__views.showWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Don't show next time",
        left: "10",
        id: "showWindow"
    });
    $.__views.__alloyId39.add($.__views.showWindow);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId35,
        id: "scrollableView",
        showPagingControl: "true",
        pagingControlTimeout: "0",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.win.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var ImageFactory = require("fh.imagefactory");
    var fb = require("facebook");
    fb.appid = 752094718209236;
    Ti.Platform.displayCaps.platformHeight;
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var toggleHeight = $.toggle.getHeight();
    var canvasHeight = pHeight - toggleHeight;
    var category_colour_lib = Alloy.createCollection("category_colour");
    var colour_lib = Alloy.createCollection("colour");
    var details = "";
    var library = Alloy.createCollection("category");
    var recommended = library.getCategoryListByType(1);
    $.activityIndicator.show();
    $.loadingBar.opacity = "1";
    $.loadingBar.height = "120";
    $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
    $.colorSelection.hide();
    setTimeout(function() {
        1 == Ti.App.Properties.getString("pickerCheckBox") && takePhoto();
        generateRecommended();
    }, 800);
    $.canvas.addEventListener("load", function() {
        $.colorSelection.hide();
        Ti.App.fireEvent("web:initCanvasSize", {
            height: canvasHeight,
            width: pWidth
        });
    });
    1 == Ti.App.Properties.getString("back") && Ti.App.Properties.setString("back", 0);
    var getColor = function(e) {
        $.activityIndicator.show();
        $.loadingBar.opacity = "1";
        $.loadingBar.height = "120";
        $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
        $.colorSelection.hide();
        details = colour_lib.getClosestColourList(e.r, e.g, e.b);
        generateColour();
    };
    Ti.App.addEventListener("app:getColour", getColor);
    1 == Ti.App.Properties.getString("pickerCheckBox") ? $.win.hide() : $.win.show();
    var removeIcon = Ti.UI.createImageView({
        image: "/images/icon_remove.png",
        width: 30,
        height: 30,
        top: 0,
        right: 0
    });
    $.view3.add(removeIcon);
    removeIcon.addEventListener("click", function() {
        $.win.hide();
        takePhoto();
        1 == $.checkBox.value && Ti.App.Properties.setString("pickerCheckBox", 1);
    });
    __defers["$.__views.takePhoto!click!takePhoto"] && $.__views.takePhoto.addEventListener("click", takePhoto);
    __defers["$.__views.toggleActivation!click!toggleActivation"] && $.__views.toggleActivation.addEventListener("click", toggleActivation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;