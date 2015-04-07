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
            table.hide();
        } else {
            filterFlag = 1;
            colorSwatches(-330);
            sizePop(-250);
            colorShow = 0;
            sizeShow = 0;
            table.show();
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
                    event.media;
                    if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                        toolbarHeight = $.toolbar.rect.height;
                        canvasHeight = pHeight - toolbarHeight - toggleHeight;
                        $.canvas.setBottom(toolbarHeight);
                        $.canvas.setHeight(canvasHeight);
                        var nativePath = event.media.nativePath;
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
        for (var i = 0; i < list_colours.length; i++) if (list_colours[i].contrast <= 730) {
            index = listArr.length;
            for (var j = 0; j < listArr.length; j++) if (list_colours[i].contrast >= listArr[j].contrast) {
                index = j;
                break;
            }
            listArr.splice(index, 0, list_colours[i]);
        }
        var whiteListArr = [];
        for (var i = 0; i < list_colours.length; i++) if (list_colours[i].contrast >= 730) {
            index = whiteListArr.length;
            for (var j = 0; j < whiteListArr.length; j++) if (list_colours[i].contrast >= whiteListArr[j].contrast) {
                index = j;
                break;
            }
            whiteListArr.splice(index, 0, list_colours[i]);
        }
        var finalList = listArr.concat(whiteListArr);
        for (var i = 0; i < finalList.length; i++) {
            var colours;
            colours = "" != finalList[i].thumb ? $.UI.create("ImageView", {
                image: finalList[i].thumb,
                borderColor: "#A5A5A5",
                borderWidth: 1,
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            }) : $.UI.create("View", {
                backgroundColor: "rgb(" + finalList[i].rgb + ")",
                borderColor: "#A5A5A5",
                borderWidth: 1,
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            });
            (i + 1) % 3 == 1 ? topRow.add(colours) : (i + 1) % 3 == 2 ? middleRow.add(colours) : (i + 1) % 3 == 0 && bottomRow.add(colours);
            createColorEvent(colours, finalList[i]);
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
    $.__views.__alloyId82 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId82"
    });
    $.__views.diyPaint.add($.__views.__alloyId82);
    $.__views.toggle = Ti.UI.createView({
        id: "toggle",
        layout: "horizontal",
        height: "80",
        top: "0",
        backgroundImage: "/images/banner_paint_diy.jpg"
    });
    $.__views.__alloyId82.add($.__views.toggle);
    $.__views.__alloyId83 = Alloy.createController("toggle", {
        id: "__alloyId83",
        __parentSymbol: $.__views.toggle
    });
    $.__views.__alloyId83.setParent($.__views.toggle);
    $.__views.canvas = Ti.UI.createWebView({
        top: "80",
        id: "canvas",
        url: "/html/canvas-paint-bucket.html",
        height: "80%",
        enableZoomControls: "false",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER,
        disableBounce: "true"
    });
    $.__views.__alloyId82.add($.__views.canvas);
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
    $.__views.__alloyId82.add($.__views.loadingBar);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        top: 15,
        left: 30,
        width: 60,
        id: "activityIndicator"
    });
    $.__views.loadingBar.add($.__views.activityIndicator);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ffffff",
        text: "Loading",
        id: "__alloyId84"
    });
    $.__views.loadingBar.add($.__views.__alloyId84);
    $.__views.colorSwatches = Ti.UI.createView({
        layout: "vertical",
        height: "330",
        bottom: "-330",
        id: "colorSwatches"
    });
    $.__views.__alloyId82.add($.__views.colorSwatches);
    $.__views.__alloyId85 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        id: "__alloyId85"
    });
    $.__views.colorSwatches.add($.__views.__alloyId85);
    $.__views.bottomColorBar = Ti.UI.createView({
        id: "bottomColorBar",
        layout: "vertical",
        backgroundColor: "white"
    });
    $.__views.colorSwatches.add($.__views.bottomColorBar);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "FAVOURITE COLOURS",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId86"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId86);
    $.__views.recommendView = Ti.UI.createScrollView({
        id: "recommendView",
        backgroundColor: "white",
        layout: "horizontal",
        scrollType: "horizontal",
        height: "50",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.bottomColorBar.add($.__views.recommendView);
    $.__views.__alloyId87 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "transparent",
        width: Titanium.UI.FILL,
        id: "__alloyId87"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "black",
        text: "COLOUR LIBRARY",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: "10",
        id: "__alloyId88"
    });
    $.__views.bottomColorBar.add($.__views.__alloyId88);
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
    $.__views.__alloyId82.add($.__views.sizeBar);
    $.__views.__alloyId89 = Ti.UI.createImageView({
        image: "/images/pop_window2.png",
        height: "250",
        width: "100",
        id: "__alloyId89"
    });
    $.__views.sizeBar.add($.__views.__alloyId89);
    $.__views.slider = Ti.UI.createSlider({
        id: "slider",
        min: "0",
        max: "100",
        value: "30",
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
    $.__views.__alloyId82.add($.__views.toolbar);
    $.__views.__alloyId90 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        id: "__alloyId90"
    });
    $.__views.toolbar.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.photoButton = Ti.UI.createImageView({
        id: "photoButton",
        image: "/images/icon_photo.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId91.add($.__views.photoButton);
    takePhoto ? $.__views.photoButton.addEventListener("click", takePhoto) : __defers["$.__views.photoButton!click!takePhoto"] = true;
    $.__views.__alloyId92 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId92"
    });
    $.__views.__alloyId90.add($.__views.__alloyId92);
    $.__views.tools = Ti.UI.createImageView({
        id: "tools",
        image: "/images/icon_bucket.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId92.add($.__views.tools);
    toolspop ? $.__views.tools.addEventListener("click", toolspop) : __defers["$.__views.tools!click!toolspop"] = true;
    $.__views.__alloyId93 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId93"
    });
    $.__views.__alloyId90.add($.__views.__alloyId93);
    $.__views.size = Ti.UI.createImageView({
        id: "size",
        image: "/images/icon_size.png",
        mod: "size",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId93.add($.__views.size);
    slideUp ? $.__views.size.addEventListener("click", slideUp) : __defers["$.__views.size!click!slideUp"] = true;
    $.__views.__alloyId94 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId94"
    });
    $.__views.__alloyId90.add($.__views.__alloyId94);
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
    $.__views.__alloyId94.add($.__views.color);
    slideUp ? $.__views.color.addEventListener("click", slideUp) : __defers["$.__views.color!click!slideUp"] = true;
    $.__views.__alloyId95 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId95"
    });
    $.__views.__alloyId90.add($.__views.__alloyId95);
    $.__views.shareButton = Ti.UI.createImageView({
        touchEnabled: false,
        id: "shareButton",
        image: "/images/icon_share.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId95.add($.__views.shareButton);
    share ? $.__views.shareButton.addEventListener("click", share) : __defers["$.__views.shareButton!click!share"] = true;
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
    $.__views.diyPaint.add($.__views.win);
    var __alloyId96 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "#FFFFFF"
    });
    __alloyId96.push($.__views.view1);
    $.__views.__alloyId97 = Ti.UI.createImageView({
        image: "/images/tutorial/colorPicker/tutorial_paintdiy1.jpg",
        width: "100%",
        id: "__alloyId97"
    });
    $.__views.view1.add($.__views.__alloyId97);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "#FFFFFF"
    });
    __alloyId96.push($.__views.view2);
    $.__views.__alloyId98 = Ti.UI.createImageView({
        image: "/images/tutorial/colorPicker/tutorial_paintdiy2.jpg",
        width: "100%",
        id: "__alloyId98"
    });
    $.__views.view2.add($.__views.__alloyId98);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "#FFFFFF"
    });
    __alloyId96.push($.__views.view3);
    $.__views.__alloyId99 = Ti.UI.createImageView({
        image: "/images/tutorial/colorPicker/tutorial_paintdiy3.jpg",
        width: "100%",
        id: "__alloyId99"
    });
    $.__views.view3.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "4",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId100"
    });
    $.__views.view3.add($.__views.__alloyId100);
    $.__views.checkBox = Ti.UI.createSwitch({
        value: true,
        id: "checkBox",
        style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX
    });
    $.__views.__alloyId100.add($.__views.checkBox);
    $.__views.showWindow = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Don't show next time",
        left: "10",
        id: "showWindow"
    });
    $.__views.__alloyId100.add($.__views.showWindow);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId96,
        id: "scrollableView",
        showPagingControl: "true",
        pagingControlTimeout: "0",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
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
    var category_colour_lib = Alloy.createCollection("category_colour");
    var colour_lib = Alloy.createCollection("colour");
    var library = Alloy.createCollection("category");
    var favourite_lib = Alloy.createCollection("favourite");
    var list_favourite = favourite_lib.getFavouriteList();
    var list_colours = colour_lib.getColourList();
    var sizeShow = 0;
    var colorShow = 0;
    var filterFlag = 0;
    var shareFlag = 0;
    var tableData = [];
    var imgPath = "";
    fb.appid = 752094718209236;
    var t = Titanium.UI.create2DMatrix();
    t = t.rotate(-90);
    $.slider.transform = t;
    $.activityIndicator.show();
    $.loadingBar.opacity = "1";
    $.loadingBar.height = "120";
    $.loadingBar.top = PixelsToDPUnits(Ti.Platform.displayCaps.platformHeight) / 2 - $.loadingBar.getHeight() / 2;
    setTimeout(function() {
        generateFavourite();
        generateColour();
        1 == Ti.App.Properties.getString("diyCheckBox") && takePhoto();
    }, 1e3);
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
        width: 150,
        height: Ti.UI.SIZE,
        left: 10,
        touchEnabled: true,
        height: 60
    });
    var shareRow = Ti.UI.createTableViewRow({
        width: 150,
        height: Ti.UI.SIZE,
        left: 10,
        touchEnabled: true,
        height: 60
    });
    var instagramRow = Ti.UI.createTableViewRow({
        width: 150,
        height: Ti.UI.SIZE,
        left: 10,
        touchEnabled: true,
        height: 60
    });
    var shareImage = Ti.UI.createImageView({
        image: "/images/fb.png",
        width: 25,
        height: Ti.UI.SIZE,
        left: 20,
        touchEnabled: true,
        height: 25
    });
    var instagramImage = Ti.UI.createImageView({
        image: "/images/icon_sissons_instagram.png",
        width: 25,
        height: Ti.UI.SIZE,
        left: 20,
        touchEnabled: true,
        height: 25
    });
    var saveImage = Ti.UI.createImageView({
        image: "/images/save.png",
        width: 25,
        height: Ti.UI.SIZE,
        left: 20,
        touchEnabled: true,
        height: 25
    });
    var saveLabel = Ti.UI.createLabel({
        text: "Save",
        width: 85,
        left: 65,
        textAlign: "left",
        height: 60
    });
    var shareLabel = Ti.UI.createLabel({
        text: "Facebook",
        width: 85,
        left: 65,
        textAlign: "left",
        height: 60
    });
    var instagramLabel = Ti.UI.createLabel({
        text: "Instagram",
        width: 85,
        left: 65,
        textAlign: "left",
        height: 60
    });
    instagramRow.add(instagramImage);
    instagramRow.add(instagramLabel);
    shareRow.add(shareImage);
    shareRow.add(shareLabel);
    saveRow.add(saveImage);
    saveRow.add(saveLabel);
    tableDataShare.push(saveRow);
    tableDataShare.push(shareRow);
    tableDataShare.push(instagramRow);
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
    $.diyPaint.add(tableShare);
    var share = function() {
        closeShareWindow();
        if (1 == shareFlag) {
            shareFlag = 0;
            tableShare.hide();
        } else {
            shareFlag = 1;
            tableShare.show();
            tableShare.addEventListener("click", tableShareListener);
        }
    };
    var tableShareListener = function(e) {
        shareFlag = 0;
        tableShare.hide();
        Ti.App.addEventListener("app:saveToGallery", save);
        0 == e.index ? Ti.App.fireEvent("web:saveAndShare", {
            share: 0
        }) : 1 == e.index ? Ti.App.fireEvent("web:saveAndShare", {
            share: 1
        }) : Ti.App.fireEvent("web:saveAndShare", {
            share: 2
        });
    };
    var closeShareWindow = function() {
        tableShare.removeEventListener("click", tableShareListener);
    };
    var row1 = Ti.UI.createTableViewRow({
        title: "Bucket",
        width: 150,
        left: 10,
        touchEnabled: true,
        height: 50
    });
    var row2 = Ti.UI.createTableViewRow({
        title: "Brush",
        width: 150,
        left: 10,
        touchEnabled: true,
        height: 50
    });
    var row3 = Ti.UI.createTableViewRow({
        title: "Eraser",
        width: 150,
        left: 10,
        touchEnabled: true,
        height: 50
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
    $.diyPaint.add(table);
    var tableListener = function(e) {
        filterFlag = 0;
        table.hide();
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
    var save = function(e) {
        var blob = e.blob;
        var index = blob.indexOf("base64,");
        blob = blob.substring(index + "base64,".length);
        var img_view = Ti.Utils.base64decode(blob);
        var filename = "sissons_diy" + printDate() + ".png";
        var mediaPath = "file://storage/sdcard0" + Ti.Filesystem.separator + "Pictures" + Ti.Filesystem.separator + "Sissons Omnicolor DIY";
        var imgDir = Titanium.Filesystem.getFile(mediaPath);
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
        console.log(e.share);
        if (1 == e.share) {
            var nav = Alloy.createController("share", {
                imgPath: imgPath
            }).getView();
            nav.open();
        } else if (2 == e.share) {
            var uri = imageFile.nativePath;
            console.log(uri);
            var igIntent = Ti.Android.createIntent({
                action: Ti.Android.ACTION_SEND,
                packageName: "com.instagram.android",
                type: "image/*"
            });
            igIntent.putExtraUri(Titanium.Android.EXTRA_STREAM, uri);
            setTimeout(function() {
                try {
                    Ti.Android.currentActivity.startActivity(igIntent);
                } catch (err) {
                    alert("Kindly install the Instagram application on your device.");
                }
            }, 400);
        }
        Ti.Media.Android.scanMediaFiles([ mediaPath + Ti.Filesystem.separator + filename ], [ "image/png" ], function() {
            imageFile = null;
            imgDir = null;
        });
        Ti.App.removeEventListener("app:saveToGallery", save);
    };
    1 == Ti.App.Properties.getString("diyCheckBox") ? $.win.hide() : $.win.show();
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
        1 == $.checkBox.value && Ti.App.Properties.setString("diyCheckBox", 1);
    });
    setTimeout(function() {
        table.hide();
        tableShare.hide();
    }, 3);
    var clearObject = function() {
        console.log("clear!!!");
        fb = null;
        ImageFactory = null;
        pWidth = null;
        pHeight = null;
        toolbarHeight = null;
        toggleHeight = null;
        canvasHeight = null;
        bucketWidth = null;
        brushWidth = null;
        eraseWidth = null;
        tools = null;
        category_colour_lib = null;
        colour_lib = null;
        library = null;
        favourite_lib = null;
        list_favourite = null;
        list_colours = null;
        sizeShow = null;
        colorShow = null;
        filterFlag = null;
        shareFlag = null;
        tableData = null;
        imgPath = null;
        tableDataShare = null;
        saveRow = null;
        shareRow = null;
        instagramRow = null;
        shareImage = null;
        instagramImage = null;
        saveImage = null;
        saveLabel = null;
        shareLabel = null;
        instagramLabel = null;
        tableShare = null;
        share = null;
        tableShareListener = null;
        closeShareWindow = null;
        row1 = null;
        row2 = null;
        row3 = null;
        table = null;
        tableListener = null;
        Ti.App.removeEventListener("clearObject", clearObject);
    };
    Ti.App.addEventListener("clearObject", clearObject);
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