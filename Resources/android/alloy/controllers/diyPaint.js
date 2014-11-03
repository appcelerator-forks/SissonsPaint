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
    function toolspop() {
        var row1 = Ti.UI.createTableViewRow({
            title: "Bucket",
            width: 150,
            left: 10,
            touchEnabled: true,
            height: 60
        });
        var row2 = Ti.UI.createTableViewRow({
            title: "Brush",
            width: 150,
            left: 10,
            touchEnabled: true,
            height: 60
        });
        var row3 = Ti.UI.createTableViewRow({
            title: "Eraser",
            width: 150,
            left: 10,
            touchEnabled: true,
            height: 60
        });
        var tableData = [];
        tableData.push(row1);
        tableData.push(row2);
        tableData.push(row3);
        var table = Titanium.UI.createTableView({
            separatorColor: "transparent",
            backgroundImage: "/images/pop_window.png",
            height: Ti.UI.SIZE,
            width: 150,
            bottom: 60,
            overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
            data: tableData
        });
        $.diyPaint.add(table);
        table.addEventListener("click", function(e) {
            console.log(e.index);
            if (0 == e.index) {
                tools = "bucket";
                $.slider.setValue(bucketWidth);
                Ti.App.fireEvent("web:setStroke", {
                    value: bucketWidth
                });
                Ti.App.fireEvent("web:changeTools", {
                    tools: "bucket"
                });
                $.tools.image = "/images/icon_bucket.png";
            }
            if (1 == e.index) {
                tools = "brush";
                $.slider.setValue(brushWidth);
                Ti.App.fireEvent("web:setStroke", {
                    value: brushWidth
                });
                Ti.App.fireEvent("web:changeTools", {
                    tools: "brush"
                });
                $.tools.image = "/images/icon_brush.png";
            }
            if (2 == e.index) {
                tools = "erase";
                $.slider.setValue(eraseWidth);
                Ti.App.fireEvent("web:setStroke", {
                    value: eraseWidth
                });
                Ti.App.fireEvent("web:changeTools", {
                    tools: "erase"
                });
                $.tools.image = "/images/icon_erase.png";
            }
            $.diyPaint.remove(table);
        });
    }
    function photoPop() {
        var dialog = Titanium.UI.createOptionDialog({
            title: "Choose an image source...",
            options: [ "Camera", "Photo Gallery", "Cancel" ],
            cancel: 2
        });
        dialog.addEventListener("click", function(e) {
            if (0 == e.index) Titanium.Media.showCamera({
                success: function(event) {
                    var image = event.media;
                    if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                        Ti.App.Properties.setString("image", image.nativePath);
                        Ti.App.fireEvent("web:loadImage", {
                            image: "image.nativePath"
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
            }); else if (1 == e.index) {
                Ti.App.fireEvent("foo", {
                    name: "bar"
                });
                Titanium.Media.openPhotoGallery({
                    success: function(event) {
                        var image = event.media;
                        if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                            Ti.App.Properties.setString("image", image.nativePath);
                            console.log(image.nativePath);
                            Ti.App.fireEvent("web:loadImage", {
                                image: image.nativePath
                            });
                        }
                    },
                    cancel: function() {}
                });
            }
        });
        dialog.show();
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
    var __defers = {};
    $.__views.diyPaint = Ti.UI.createView({
        id: "diyPaint"
    });
    $.__views.diyPaint && $.addTopLevelView($.__views.diyPaint);
    $.__views.__alloyId49 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId49"
    });
    $.__views.diyPaint.add($.__views.__alloyId49);
    $.__views.toggle = Ti.UI.createView({
        id: "toggle",
        layout: "horizontal",
        height: "80",
        top: "0"
    });
    $.__views.__alloyId49.add($.__views.toggle);
    $.__views.__alloyId50 = Alloy.createController("toggle", {
        id: "__alloyId50",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId50.setParent($.__views.toggle);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        text: "DIY Paint",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId51"
    });
    $.__views.toggle.add($.__views.__alloyId51);
    $.__views.canvas = Ti.UI.createWebView({
        id: "canvas",
        url: "/html/canvas-paint-bucket.html",
        enableZoomControls: "false",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
<<<<<<< HEAD
    $.__views.__alloyId49.add($.__views.canvas);
=======
<<<<<<< HEAD
    $.__views.__alloyId51.add($.__views.canvas);
    $.__views.slider = Ti.UI.createSlider({
        id: "slider",
        bottom: "60",
        min: "0",
        max: "100",
        width: "100%",
        value: "20"
    });
    $.__views.__alloyId51.add($.__views.slider);
    updateAdjustment ? $.__views.slider.addEventListener("change", updateAdjustment) : __defers["$.__views.slider!change!updateAdjustment"] = true;
=======
    $.__views.__alloyId50.add($.__views.canvas);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    $.__views.toolbar = Ti.UI.createView({
        height: "60",
        bottom: "0",
        id: "toolbar"
    });
<<<<<<< HEAD
    $.__views.__alloyId49.add($.__views.toolbar);
    $.__views.__alloyId52 = Ti.UI.createImageView({
=======
<<<<<<< HEAD
    $.__views.__alloyId51.add($.__views.toolbar);
    $.__views.__alloyId54 = Ti.UI.createImageView({
        image: "/images/tool_bar.jpg",
        height: "60",
        width: Titanium.UI.FILL,
        id: "__alloyId54"
    });
    $.__views.toolbar.add($.__views.__alloyId54);
=======
    $.__views.__alloyId50.add($.__views.toolbar);
    $.__views.__alloyId53 = Ti.UI.createImageView({
>>>>>>> FETCH_HEAD
        image: "/images/tool_bar.jpg",
        height: "60",
        width: Titanium.UI.FILL,
        id: "__alloyId52"
    });
<<<<<<< HEAD
    $.__views.toolbar.add($.__views.__alloyId52);
=======
    $.__views.toolbar.add($.__views.__alloyId53);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    $.__views.photoButton = Ti.UI.createImageView({
        id: "photoButton",
        image: "/images/icon_photo.png",
        left: "5",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.photoButton);
    photoPop ? $.__views.photoButton.addEventListener("click", photoPop) : __defers["$.__views.photoButton!click!photoPop"] = true;
    $.__views.photoButton = Ti.UI.createImageView({
        id: "photoButton",
        image: "/images/icon_undo.png",
        left: "65",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.photoButton);
    photoPop ? $.__views.photoButton.addEventListener("click", photoPop) : __defers["$.__views.photoButton!click!photoPop"] = true;
    $.__views.tools = Ti.UI.createImageView({
        id: "tools",
        image: "/images/icon_bucket.png",
        left: "125",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.tools);
    toolspop ? $.__views.tools.addEventListener("click", toolspop) : __defers["$.__views.tools!click!toolspop"] = true;
    $.__views.photoButton = Ti.UI.createImageView({
        id: "photoButton",
        image: "/images/icon_size.png",
        left: "185",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.photoButton);
    photoPop ? $.__views.photoButton.addEventListener("click", photoPop) : __defers["$.__views.photoButton!click!photoPop"] = true;
    $.__views.photoButton = Ti.UI.createImageView({
        id: "photoButton",
        image: "/images/icon_color.png",
        left: "245",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.photoButton);
    photoPop ? $.__views.photoButton.addEventListener("click", photoPop) : __defers["$.__views.photoButton!click!photoPop"] = true;
    $.__views.photoButton = Ti.UI.createImageView({
        id: "photoButton",
        image: "/images/icon_share.png",
        left: "305",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.photoButton);
    photoPop ? $.__views.photoButton.addEventListener("click", photoPop) : __defers["$.__views.photoButton!click!photoPop"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var pWidth = Ti.Platform.displayCaps.platformWidth;
    var pHeight = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight);
    var toolbarHeight = $.toolbar.rect.height;
    var toggleHeight = $.toggle.getHeight();
    var canvasHeight = 0;
    var bucketWidth = $.slider.value;
    var brushWidth = 10;
    var eraseWidth = 10;
    var tools = "bucket";
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
    __defers["$.__views.photoButton!click!photoPop"] && $.__views.photoButton.addEventListener("click", photoPop);
    __defers["$.__views.photoButton!click!photoPop"] && $.__views.photoButton.addEventListener("click", photoPop);
    __defers["$.__views.tools!click!toolspop"] && $.__views.tools.addEventListener("click", toolspop);
    __defers["$.__views.photoButton!click!photoPop"] && $.__views.photoButton.addEventListener("click", photoPop);
    __defers["$.__views.photoButton!click!photoPop"] && $.__views.photoButton.addEventListener("click", photoPop);
    __defers["$.__views.photoButton!click!photoPop"] && $.__views.photoButton.addEventListener("click", photoPop);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;