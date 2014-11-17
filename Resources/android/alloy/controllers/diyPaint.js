function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function sizePop(e) {
        var animation = Titanium.UI.createAnimation({
            bottom: e,
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_LINEAR
        });
        $.sizeBar.animate(animation);
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
            1 == filterFlag && toolspop();
            sizeShow = 0;
            sizePop(-250);
        } else {
            if (sizeShow) {
                sizePop(-250);
                sizeShow = 0;
            } else {
                sizePop(40);
                sizeShow = 1;
            }
            1 == filterFlag && toolspop();
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
            colorSwatches(-330);
            sizePop(-250);
            colorShow = 0;
            sizeShow = 0;
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
            0 == e.index ? Titanium.Media.showCamera({
                success: function(event) {
                    event.media;
                    if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                        toolbarHeight = $.toolbar.rect.height;
                        canvasHeight = pHeight - toolbarHeight - toggleHeight;
                        $.canvas.setBottom(toolbarHeight);
                        $.canvas.setHeight(canvasHeight);
                        var nativePath = event.media.nativePath;
                        console.log(pWidth);
                        ImageFactory.rotateResizeImage(nativePath, pWidth, 100);
                        Ti.App.Properties.setString("image", nativePath);
                        Ti.App.fireEvent("web:loadImage", {
                            image: nativePath,
                            height: canvasHeight
                        });
                        $.shareButton.touchEnabled = "true";
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
                    toolbarHeight = $.toolbar.rect.height;
                    canvasHeight = pHeight - toolbarHeight - toggleHeight;
                    $.canvas.setBottom(toolbarHeight);
                    $.canvas.setHeight(canvasHeight);
                    var nativePath = event.media.nativePath;
                    Ti.App.Properties.setString("image", nativePath);
                    Ti.App.fireEvent("web:loadImage", {
                        image: nativePath,
                        height: canvasHeight
                    });
                    $.shareButton.touchEnabled = "true";
                },
                cancel: function() {}
            });
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
    $.__views.__alloyId81 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId81"
    });
    $.__views.diyPaint.add($.__views.__alloyId81);
    $.__views.toggle = Ti.UI.createView({
        id: "toggle",
        layout: "horizontal",
        height: "80",
        top: "0"
    });
    $.__views.__alloyId81.add($.__views.toggle);
    $.__views.__alloyId82 = Alloy.createController("toggle", {
        id: "__alloyId82",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId82.setParent($.__views.toggle);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        text: "DIY Paint",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId83"
    });
    $.__views.toggle.add($.__views.__alloyId83);
    $.__views.canvas = Ti.UI.createWebView({
        top: "80",
        id: "canvas",
        url: "/html/canvas-paint-bucket.html",
        height: "80%",
        enableZoomControls: "false",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
        disableBounce: "true"
    });
    $.__views.__alloyId81.add($.__views.canvas);
    $.__views.colorSwatches = Ti.UI.createView({
        layout: "vertical",
        height: "330",
        bottom: "-330",
        id: "colorSwatches"
    });
    $.__views.__alloyId81.add($.__views.colorSwatches);
    $.__views.__alloyId84 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        id: "__alloyId84"
    });
    $.__views.colorSwatches.add($.__views.__alloyId84);
    $.__views.bottomColorBar = Ti.UI.createView({
        id: "bottomColorBar",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.colorSwatches.add($.__views.bottomColorBar);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "FAVOURITE COLOURS",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId85"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId85);
    $.__views.recommendView = Ti.UI.createScrollView({
        id: "recommendView",
        backgroundColor: "white",
        layout: "horizontal",
        scrollType: "horizontal",
        height: "50",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.bottomColorBar.add($.__views.recommendView);
    $.__views.__alloyId86 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        id: "__alloyId86"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "COLOUR LIBRARY",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId87"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId87);
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
        height: "250",
        bottom: "-250",
        width: "100",
        id: "sizeBar"
    });
    $.__views.__alloyId81.add($.__views.sizeBar);
    $.__views.__alloyId88 = Ti.UI.createImageView({
        image: "/images/pop_window2.png",
        height: "250",
        width: "100",
        id: "__alloyId88"
    });
    $.__views.sizeBar.add($.__views.__alloyId88);
    $.__views.slider = Ti.UI.createSlider({
        id: "slider",
        min: "0",
        max: "100",
        value: "20",
        thumbImage: "/images/size_toggle.png",
        width: "180"
    });
    $.__views.sizeBar.add($.__views.slider);
    updateAdjustment ? $.__views.slider.addEventListener("stop", updateAdjustment) : __defers["$.__views.slider!stop!updateAdjustment"] = true;
    $.__views.toolbar = Ti.UI.createView({
        height: "60",
        bottom: "0",
        id: "toolbar",
        width: "100%",
        backgroundImage: "/images/tool_bar.jpg"
    });
    $.__views.__alloyId81.add($.__views.toolbar);
    $.__views.__alloyId89 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        id: "__alloyId89"
    });
    $.__views.toolbar.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.photoButton = Ti.UI.createImageView({
        id: "photoButton",
        image: "/images/icon_photo.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId90.add($.__views.photoButton);
    takePhoto ? $.__views.photoButton.addEventListener("click", takePhoto) : __defers["$.__views.photoButton!click!takePhoto"] = true;
    $.__views.__alloyId91 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId91"
    });
    $.__views.__alloyId89.add($.__views.__alloyId91);
    $.__views.tools = Ti.UI.createImageView({
        id: "tools",
        image: "/images/icon_bucket.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId91.add($.__views.tools);
    toolspop ? $.__views.tools.addEventListener("click", toolspop) : __defers["$.__views.tools!click!toolspop"] = true;
    $.__views.__alloyId92 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId92"
    });
    $.__views.__alloyId89.add($.__views.__alloyId92);
    $.__views.size = Ti.UI.createImageView({
        id: "size",
        image: "/images/icon_size.png",
        mod: "size",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId92.add($.__views.size);
    slideUp ? $.__views.size.addEventListener("click", slideUp) : __defers["$.__views.size!click!slideUp"] = true;
    $.__views.__alloyId93 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId93"
    });
    $.__views.__alloyId89.add($.__views.__alloyId93);
    $.__views.color = Ti.UI.createView({
        id: "color",
        backgroundColor: "#ffffff",
        height: "40",
        width: "50",
        mod: "color",
        borderColor: "#000000",
        borderWidth: "3",
        borderRadius: "10",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId93.add($.__views.color);
    slideUp ? $.__views.color.addEventListener("click", slideUp) : __defers["$.__views.color!click!slideUp"] = true;
    $.__views.__alloyId94 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId94"
    });
    $.__views.__alloyId89.add($.__views.__alloyId94);
    $.__views.shareButton = Ti.UI.createImageView({
        touchEnabled: false,
        id: "shareButton",
        image: "/images/icon_share.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId94.add($.__views.shareButton);
    share ? $.__views.shareButton.addEventListener("click", share) : __defers["$.__views.shareButton!click!share"] = true;
    $.__views.win = Ti.UI.createView({
        id: "win",
        height: "80%",
        width: "80%",
        backgroundColor: "transparent",
        theme: "Theme.NoActionBar",
        navBarHidden: "true",
        fullscreen: "true",
        borderColor: "#A5A5A5",
        borderWidth: "2",
        visible: "false"
    });
    $.__views.diyPaint.add($.__views.win);
    var __alloyId95 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "white"
    });
    __alloyId95.push($.__views.view1);
    $.__views.__alloyId96 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "View 1",
        id: "__alloyId96"
    });
    $.__views.view1.add($.__views.__alloyId96);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "white"
    });
    __alloyId95.push($.__views.view2);
    $.__views.__alloyId97 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "View 2",
        id: "__alloyId97"
    });
    $.__views.view2.add($.__views.__alloyId97);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "white"
    });
    __alloyId95.push($.__views.view3);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "View 3",
        id: "__alloyId98"
    });
    $.__views.view3.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "10",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId99"
    });
    $.__views.view3.add($.__views.__alloyId99);
    $.__views.checkBox = Ti.UI.createSwitch({
        value: false,
        id: "checkBox",
        style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX
    });
    $.__views.__alloyId99.add($.__views.checkBox);
    $.__views.showWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Don't show next time",
        id: "showWindow"
    });
    $.__views.__alloyId99.add($.__views.showWindow);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId95,
        id: "scrollableView",
        showPagingControl: "true",
        pagingControlTimeout: "0"
    });
    $.__views.win.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var fb = require("facebook");
    var ImageFactory = require("fh.imagefactory");
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
    Alloy.createCollection("category");
    var favourite_lib = Alloy.createCollection("favourite");
    var list_favourite = favourite_lib.getFavouriteList();
    var list_colours = colour_lib.getColourList();
    var sizeShow = 0;
    var colorShow = 0;
    var filterFlag = 0;
    var shareFlag = 0;
    var imgPath = "";
    fb.appid = 752094718209236;
    var t = Titanium.UI.create2DMatrix();
    t = t.rotate(-90);
    $.slider.transform = t;
    setTimeout(function() {
        takePhoto();
    }, 300);
    $.toolbar.addEventListener("postlayout", function() {
        toolbarHeight = $.toolbar.rect.height;
        canvasHeight = pHeight - toolbarHeight - toggleHeight;
        $.canvas.setBottom(toolbarHeight);
        $.canvas.setHeight(canvasHeight);
    });
    $.canvas.addEventListener("load", function() {
        Ti.App.fireEvent("web:initCanvasSize", {
            height: canvasHeight,
            width: pWidth
        });
    });
    var tableDataShare = [];
    var saveRow = Ti.UI.createTableViewRow({
        title: "Save",
        width: 150,
        height: Ti.UI.SIZE,
        left: 10,
        touchEnabled: true,
        height: 60
    });
    var shareRow = Ti.UI.createTableViewRow({
        title: "Share",
        width: 150,
        height: Ti.UI.SIZE,
        left: 10,
        touchEnabled: true,
        height: 60
    });
    Ti.UI.createLabel({
        text: "Save",
        width: 150,
        textAlign: "center",
        height: 60
    });
    Ti.UI.createLabel({
        text: "Share",
        width: 150,
        textAlign: "center",
        height: 60
    });
    tableDataShare.push(saveRow);
    tableDataShare.push(shareRow);
    var tableShare = Titanium.UI.createTableView({
        separatorColor: "transparent",
        backgroundImage: "/images/pop_up.png",
        height: Ti.UI.SIZE,
        width: 150,
        bottom: 60,
        right: "9%",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
        data: tableDataShare
    });
    var share = function() {
        closeShareWindow();
        if (1 == shareFlag) {
            shareFlag = 0;
            $.diyPaint.remove(tableShare);
        } else {
            shareFlag = 1;
            $.diyPaint.add(tableShare);
            tableShare.addEventListener("click", tableShareListener);
        }
    };
    var tableShareListener = function(e) {
        console.log(e.index);
        shareFlag = 0;
        $.diyPaint.remove(tableShare);
        Ti.App.addEventListener("app:saveToGallery", save);
        0 == e.index ? Ti.App.fireEvent("web:saveAndShare", {
            share: 0
        }) : Ti.App.fireEvent("web:saveAndShare", {
            share: 1
        });
    };
    var closeShareWindow = function() {
        tableShare.removeEventListener("click", tableShareListener);
    };
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
        left: "8%",
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
    var save = function(e) {
        var blob = e.blob;
        var index = blob.indexOf("base64,");
        blob = blob.substring(index + "base64,".length);
        var img_view = Ti.Utils.base64decode(blob);
        var filename = "sissons_diy" + printDate() + ".png";
        var imgDir = Titanium.Filesystem.getFile(Titanium.Filesystem.externalStorageDirectory);
        imgDir.exists() || imgDir.createDirectory();
        var imageFile = Titanium.Filesystem.getFile(imgDir.resolve(), filename);
        if (false === imageFile.write(img_view)) {
            var toast = Ti.UI.createNotification({
                message: "Saved FAILED",
                duration: Ti.UI.NOTIFICATION_DURATION_SHORT
            });
            toast.show();
        } else {
            imgPath = imageFile.nativePath;
            var toast = Ti.UI.createNotification({
                message: "Saved Done",
                duration: Ti.UI.NOTIFICATION_DURATION_SHORT
            });
            toast.show();
        }
        if (1 == e.share) {
            console.log("share");
            var nav = Alloy.createController("share", {
                imgPath: imgPath
            }).getView();
            nav.open();
        }
        imageFile = null;
        imgDir = null;
        Ti.App.removeEventListener("app:saveToGallery", save);
    };
    $.win.hide();
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
        console.log($.checkBox.value);
    });
    __defers["$.__views.slider!stop!updateAdjustment"] && $.__views.slider.addEventListener("stop", updateAdjustment);
    __defers["$.__views.photoButton!click!takePhoto"] && $.__views.photoButton.addEventListener("click", takePhoto);
    __defers["$.__views.tools!click!toolspop"] && $.__views.tools.addEventListener("click", toolspop);
    __defers["$.__views.size!click!slideUp"] && $.__views.size.addEventListener("click", slideUp);
    __defers["$.__views.color!click!slideUp"] && $.__views.color.addEventListener("click", slideUp);
    __defers["$.__views.shareButton!click!share"] && $.__views.shareButton.addEventListener("click", share);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;