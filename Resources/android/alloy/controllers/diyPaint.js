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
    function sizePop(e) {
        var animation = Titanium.UI.createAnimation({
            bottom: e,
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_LINEAR
        });
        $.sizeBar.animate(animation);
    }
    function share() {
        Ti.App.fireEvent("web:saveAndShare");
    }
    function slideUp(e) {
        if ("color" == e.source.mod) {
            if (colorShow) {
                colorSwatches(-330);
                colorShow = 0;
            } else {
                colorSwatches(60);
                colorShow = 1;
            }
            sizeShow = 0;
            sizePop(0);
        } else {
            if (sizeShow) {
                sizePop(0);
                sizeShow = 0;
            } else {
                sizePop(60);
                sizeShow = 1;
            }
            colorShow = 0;
            colorSwatches(-330);
        }
    }
    function colorSwatches(e) {
        var animation = Titanium.UI.createAnimation({
            bottom: e,
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_LINEAR
        });
        $.colorSwatches.animate(animation);
    }
    function toolspop() {
        closeWindow();
        if (1 == filterFlag) {
            filterFlag = 0;
            $.diyPaint.remove(table);
        } else {
            filterFlag = 1;
            $.diyPaint.add(table);
            table.addEventListener("click", tableListener);
        }
    }
    function updateAdjustment(e) {
        if ("bucket" == tools) {
            bucketWidth = parseInt(e.value);
            Ti.App.fireEvent("web:setSensetive", {
                value: bucketWidth
            });
        } else if ("brush" == tools) {
            brushWidth = parseInt(e.value);
            Ti.App.fireEvent("web:setStroke", {
                value: brushWidth
            });
        } else if ("erase" == tools) {
            eraseWidth = parseInt(e.value);
            Ti.App.fireEvent("web:setStroke", {
                value: eraseWidth
            });
        }
    }
    function takePhoto() {
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
    function generateFavourite() {
        var viewWidth = 50 * Math.ceil(list_favourite.length) + 10;
        var favouriteRow = Titanium.UI.createView({
            layout: "horizontal",
            bottom: 10,
            height: 40,
            width: viewWidth
        });
        for (var j = 0; j < list_favourite.length; j++) {
            var colour_details = colour_lib.getColourById(list_favourite[j].colour_id);
            var colours = $.UI.create("View", {
                backgroundColor: "rgb(" + colour_details.rgb + ")",
                borderColor: "#A5A5A5",
                borderWidth: 1,
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            });
            createColorEvent(colours, colour_details);
            favouriteRow.add(colours);
        }
        $.recommendView.add(favouriteRow);
    }
    function createColorEvent(colours, colour_details) {
        colours.addEventListener("click", function() {
            var rgbArray = colour_details.rgb.split(",");
            var hex = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);
            $.color.setBackgroundColor(hex);
            Ti.App.fireEvent("web:setColour", {
                r: rgbArray[0],
                g: rgbArray[1],
                b: rgbArray[2],
                hex: hex
            });
            if (colorShow) {
                colorSwatches(-330);
                colorShow = 0;
            } else {
                colorSwatches(60);
                colorShow = 1;
            }
            sizeShow = 0;
            sizePop(0);
        });
    }
    function generateColour() {
        var viewWidth = 50 * Math.ceil(list_colours.length / 3) + 10;
        var topRow = Titanium.UI.createView({
            layout: "horizontal",
            bottom: 10,
            height: 40,
            width: viewWidth
        });
        var middleRow = Titanium.UI.createView({
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
        var index = -1;
        var listArr = [];
        for (var i = 0; i < list_colours.length; i++) {
            index = listArr.length;
            for (var j = 0; j < listArr.length; j++) if (list_colours[i].contrast >= listArr[j].contrast) {
                index = j;
                break;
            }
            listArr.splice(index, 0, list_colours[i]);
        }
        for (var i = 0; i < listArr.length; i++) {
            console.log(listArr[i].contrast);
            var colours = $.UI.create("View", {
                backgroundColor: "rgb(" + listArr[i].rgb + ")",
                borderColor: "#A5A5A5",
                borderWidth: 1,
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            });
            (i + 1) % 3 == 1 ? topRow.add(colours) : (i + 1) % 3 == 2 ? middleRow.add(colours) : (i + 1) % 3 == 0 && bottomRow.add(colours);
            createColorEvent(colours, listArr[i]);
        }
        $.scrollView.add(topRow);
        $.scrollView.add(middleRow);
        $.scrollView.add(bottomRow);
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
    $.__views.__alloyId51 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId51"
    });
    $.__views.diyPaint.add($.__views.__alloyId51);
    $.__views.toggle = Ti.UI.createView({
        id: "toggle",
        layout: "horizontal",
        height: "80",
        top: "0"
    });
    $.__views.__alloyId51.add($.__views.toggle);
    $.__views.__alloyId52 = Alloy.createController("toggle", {
        id: "__alloyId52",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId52.setParent($.__views.toggle);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        text: "DIY Paint",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId53"
    });
    $.__views.toggle.add($.__views.__alloyId53);
    $.__views.canvas = Ti.UI.createWebView({
        id: "canvas",
        url: "/html/canvas-paint-bucket.html",
        height: "200",
        enableZoomControls: "false",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.__alloyId51.add($.__views.canvas);
    $.__views.colorSwatches = Ti.UI.createView({
        layout: "vertical",
        height: "330",
        bottom: "-330",
        id: "colorSwatches"
    });
    $.__views.__alloyId51.add($.__views.colorSwatches);
    $.__views.__alloyId54 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        id: "__alloyId54"
    });
    $.__views.colorSwatches.add($.__views.__alloyId54);
    $.__views.bottomColorBar = Ti.UI.createView({
        id: "bottomColorBar",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.colorSwatches.add($.__views.bottomColorBar);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "FAVOURITE COLOURS",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId55"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId55);
    $.__views.recommendView = Ti.UI.createScrollView({
        id: "recommendView",
        backgroundColor: "white",
        layout: "horizontal",
        scrollType: "horizontal",
        height: "50",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.bottomColorBar.add($.__views.recommendView);
    $.__views.__alloyId56 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        id: "__alloyId56"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "COLOUR LIBRARY",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId57"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId57);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        backgroundColor: "white",
        layout: "vertical",
        scrollType: "horizontal",
        height: "150",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.bottomColorBar.add($.__views.scrollView);
    $.__views.sizeBar = Ti.UI.createView({
        height: "60",
        bottom: "0",
        width: "100%",
        id: "sizeBar"
    });
    $.__views.__alloyId51.add($.__views.sizeBar);
    $.__views.slider = Ti.UI.createSlider({
        id: "slider",
        min: "0",
        max: "100",
        value: "20"
    });
    $.__views.sizeBar.add($.__views.slider);
    updateAdjustment ? $.__views.slider.addEventListener("stop", updateAdjustment) : __defers["$.__views.slider!stop!updateAdjustment"] = true;
    $.__views.toolbar = Ti.UI.createView({
        height: "60",
        bottom: "0",
        id: "toolbar"
    });
    $.__views.__alloyId51.add($.__views.toolbar);
    $.__views.__alloyId58 = Ti.UI.createImageView({
        image: "/images/tool_bar.jpg",
        height: "60",
        width: Titanium.UI.FILL,
        id: "__alloyId58"
    });
    $.__views.toolbar.add($.__views.__alloyId58);
    $.__views.photoButton = Ti.UI.createImageView({
        id: "photoButton",
        image: "/images/icon_photo.png",
        left: "5",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.photoButton);
    takePhoto ? $.__views.photoButton.addEventListener("click", takePhoto) : __defers["$.__views.photoButton!click!takePhoto"] = true;
    $.__views.tools = Ti.UI.createImageView({
        id: "tools",
        image: "/images/icon_bucket.png",
        left: "125",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.tools);
    toolspop ? $.__views.tools.addEventListener("click", toolspop) : __defers["$.__views.tools!click!toolspop"] = true;
    $.__views.size = Ti.UI.createImageView({
        id: "size",
        image: "/images/icon_size.png",
        left: "185",
        mod: "size",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.size);
    slideUp ? $.__views.size.addEventListener("click", slideUp) : __defers["$.__views.size!click!slideUp"] = true;
    $.__views.color = Ti.UI.createView({
        id: "color",
        backgroundColor: "#ffffff",
        left: "245",
        height: "40",
        width: "50",
        mod: "color",
        borderColor: "#000000",
        borderWidth: "3",
        borderRadius: "10"
    });
    $.__views.toolbar.add($.__views.color);
    slideUp ? $.__views.color.addEventListener("click", slideUp) : __defers["$.__views.color!click!slideUp"] = true;
    $.__views.__alloyId59 = Ti.UI.createImageView({
        id: "__alloyId59",
        image: "/images/icon_share.png",
        left: "305",
        height: "40",
        width: "50"
    });
    $.__views.toolbar.add($.__views.__alloyId59);
    share ? $.__views.__alloyId59.addEventListener("click", share) : __defers["$.__views.__alloyId59!click!share"] = true;
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
    Alloy.createCollection("category_colour");
    var colour_lib = Alloy.createCollection("colour");
    var library = Alloy.createCollection("category");
    var favourite_lib = Alloy.createCollection("favourite");
    var list_favourite = favourite_lib.getFavouriteList();
    library.getCategoryListByType(2);
    var list_colours = colour_lib.getColourList();
    var sizeShow = 0;
    var colorShow = 0;
    var filterFlag = 0;
    $.toolbar.addEventListener("postlayout", function() {
        toolbarHeight = $.toolbar.rect.height;
        canvasHeight = pHeight - toolbarHeight - 25 - toggleHeight;
        $.canvas.setBottom(toolbarHeight);
        $.canvas.setHeight(canvasHeight);
    });
    $.canvas.addEventListener("load", function() {
        Ti.App.fireEvent("web:initCanvasSize", {
            height: canvasHeight,
            width: pWidth
        });
    });
    var tableData = [];
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
    var tableListener = function(e) {
        filterFlag = 0;
        $.diyPaint.remove(table);
        if (0 == e.index) {
            tools = "bucket";
            $.slider.setValue(bucketWidth);
            Ti.App.fireEvent("web:setSensetive", {
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
    };
    var closeWindow = function() {
        table.removeEventListener("click", tableListener);
    };
    setTimeout(function() {
        generateFavourite();
        generateColour();
    }, 0);
    Ti.App.addEventListener("app:saveToGallery", function(e) {
        var blob = e.blob;
        var index = blob.indexOf("base64,");
        blob = blob.substring(index + "base64,".length);
        var img_view = Ti.Utils.base64decode(blob);
        var filename = "sissons_diy" + printDate() + ".png";
        var imgDir = Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory);
        imgDir.exists() || imgDir.createDirectory();
        var imageFile = Titanium.Filesystem.getFile(imgDir.resolve(), filename);
        alert(false === imageFile.write(img_view) ? "Saved FAILED" : "Saved Done");
        imageFile = null;
        imgDir = null;
    });
    __defers["$.__views.slider!stop!updateAdjustment"] && $.__views.slider.addEventListener("stop", updateAdjustment);
    __defers["$.__views.photoButton!click!takePhoto"] && $.__views.photoButton.addEventListener("click", takePhoto);
    __defers["$.__views.tools!click!toolspop"] && $.__views.tools.addEventListener("click", toolspop);
    __defers["$.__views.size!click!slideUp"] && $.__views.size.addEventListener("click", slideUp);
    __defers["$.__views.color!click!slideUp"] && $.__views.color.addEventListener("click", slideUp);
    __defers["$.__views.__alloyId59!click!share"] && $.__views.__alloyId59.addEventListener("click", share);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;