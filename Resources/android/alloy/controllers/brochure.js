function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function createAdImageEvent(adImage, id, content, cell, downloaded, downloadIcon) {
        adImage.addEventListener("click", function() {
            confirmBox(adImage, id, content, cell, downloaded, downloadIcon);
        });
    }
    function downloadBrochure(adImage, id, content, cell, downloaded, downloadIcon) {
        console.log(id);
        var ind = Titanium.UI.createProgressBar({
            width: "90%",
            height: Ti.UI.FILL,
            min: 0,
            max: 1,
            value: 0,
            message: "",
            font: {
                fontSize: 12
            },
            color: "red"
        });
        var imageHeight = adImage.size.height;
        var imageWidth = adImage.size.width;
        var gray = Titanium.UI.createView({
            height: imageHeight,
            width: imageWidth,
            backgroundColor: "#A5A5A5",
            opacity: .5,
            bottom: 0
        });
        var label = Ti.UI.createLabel({
            color: "#ffffff",
            font: {
                fontSize: 14,
                fontWeight: "bold"
            },
            text: "",
            top: 10,
            width: "100%",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            width: imageWidth,
            height: imageHeight
        });
        var bigView = Titanium.UI.createView({
            height: "20%",
            width: "80%",
            backgroundColor: "#525151",
            opacity: .8
        });
        if ("0" == downloaded) {
            bigView.add(gray);
            bigView.add(ind);
            bigView.add(label);
            $.brochureView.add(bigView);
        } else {
            bigView.remove(gray);
            bigView.remove(ind);
            bigView.remove(label);
            $.brochureView.remove(bigView);
        }
        pdf(content, true, ind, label, function(err) {
            if (err) alert(err); else {
                library.updateDownloadedBrochure(id);
                "" != downloadIcon && cell.remove(downloadIcon);
                bigView.remove(gray);
                bigView.remove(ind);
                bigView.remove(label);
                $.brochureView.remove(bigView);
            }
        });
    }
    function createVideoEvent(adImage, id, content) {
        adImage.addEventListener("click", function() {
            youtubePlayer.playVideo(content);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "brochure";
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
    $.__views.brochureView = Ti.UI.createView({
        backgroundColor: "white",
        id: "brochureView",
        backgroundImage: "/images/wood_background.jpg"
    });
    $.__views.brochureView && $.addTopLevelView($.__views.brochureView);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId6"
    });
    $.__views.brochureView.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        backgroundImage: "/images/banner_brochure.jpg",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Alloy.createController("toggle", {
        id: "__alloyId8",
        __parentSymbol: $.__views.__alloyId7
    });
    $.__views.__alloyId8.setParent($.__views.__alloyId7);
    $.__views.scrollview = Ti.UI.createScrollView({
        top: "15",
        id: "scrollview",
        layout: "vertical",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.__alloyId6.add($.__views.scrollview);
    $.__views.mainView = Ti.UI.createView({
        id: "mainView",
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "80%"
    });
    $.__views.scrollview.add($.__views.mainView);
    $.__views.toolbar = Ti.UI.createView({
        height: "60",
        bottom: "0",
        id: "toolbar",
        width: "100%",
        backgroundImage: "/images/tool_bar.jpg"
    });
    $.__views.brochureView.add($.__views.toolbar);
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        id: "__alloyId9"
    });
    $.__views.toolbar.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        width: "40%",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    $.__views.filterButton = Ti.UI.createImageView({
        id: "filterButton",
        image: "/images/icon_filter.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId11.add($.__views.filterButton);
    popWindow ? $.__views.filterButton.addEventListener("click", popWindow) : __defers["$.__views.filterButton!click!popWindow"] = true;
    $.__views.__alloyId12 = Ti.UI.createView({
        width: "40%",
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var pdf = require("pdf");
    var youtubePlayer = require("titutorial.youtubeplayer");
    var library = Alloy.createCollection("brochure");
    var details = library.getBrochureList();
    var filterFlag = 0;
    var tableData = [];
    setTimeout(function() {
        displayCover();
    }, 700);
    var displayCover = function() {
        var counter = 0;
        var imagepath, adImage, row, image, cellWrapper, cell = "";
        var last = details.length - 1;
        for (var i = 0; i < details.length; i++) {
            var id = details[i].id;
            imagepath = details[i].cover;
            adImage = Ti.UI.createImageView({
                image: imagepath,
                backgroundImage: "/images/default_cover.jpg",
                bottom: 0,
                width: 90
            });
            if (counter % 3 == 0) {
                row = $.UI.create("View", {
                    textAlign: "center",
                    bottom: 0,
                    layout: "vertical",
                    height: 220,
                    width: "100%"
                });
                image = Ti.UI.createImageView({
                    image: "/images/wood_rack.png",
                    top: 0,
                    width: "100%",
                    right: 5,
                    left: 5
                });
                cellWrapper = Titanium.UI.createView({
                    layout: "horizontal",
                    height: Ti.UI.SIZE,
                    width: "100%",
                    bottom: 0,
                    left: "5%",
                    right: "5%"
                });
            }
            cell = $.UI.create("View", {
                bottom: 0,
                height: Ti.UI.SIZE,
                width: "30%",
                right: 5
            });
            cell.add(adImage);
            cellWrapper.add(cell);
            row.add(cellWrapper);
            row.add(image);
            if ("pdf" == details[i].format) {
                var downloadIcon = "";
                if ("0" == details[i].isDownloaded) {
                    downloadIcon = Ti.UI.createImageView({
                        image: "/images/icon_download.png",
                        width: 30,
                        height: 30,
                        top: 0,
                        right: 0
                    });
                    cell.add(downloadIcon);
                }
                createAdImageEvent(adImage, id, details[i].content, cell, details[i].isDownloaded, downloadIcon);
            } else {
                playIcon = Ti.UI.createImageView({
                    image: "/images/icon_play.png",
                    width: 40,
                    height: 40
                });
                createVideoEvent(adImage, id, details[i].url);
                createVideoEvent(playIcon, id, details[i].url);
                cell.add(playIcon);
            }
            (counter % 3 == 2 || last == counter) && $.scrollview.add(row);
            counter++;
        }
    };
    var row1 = Ti.UI.createTableViewRow({
        title: "LATEST",
        width: 150,
        left: 10,
        touchEnabled: true,
        height: 60
    });
    var row2 = Ti.UI.createTableViewRow({
        title: "DOWNLOADED",
        width: 150,
        left: 10,
        touchEnabled: true,
        height: 60
    });
    var row3 = Ti.UI.createTableViewRow({
        title: "VIDEO",
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
        $.brochureView.remove(table);
        removeAllChildren($.scrollview);
        if (0 == e.index) {
            details = library.getBrochureList();
            displayCover();
        } else if (1 == e.index) {
            details = library.getDownloadedList();
            displayCover();
        } else {
            details = library.getVideoList();
            displayCover();
        }
    };
    var popWindow = function() {
        closeWindow();
        if (1 == filterFlag) {
            filterFlag = 0;
            $.brochureView.remove(table);
        } else {
            filterFlag = 1;
            $.brochureView.add(table);
            table.addEventListener("click", tableListener);
        }
    };
    var closeWindow = function() {
        table.removeEventListener("click", tableListener);
    };
    var confirmBox = function(adImage, id, content, cell, downloaded, downloadIcon) {
        var dialog = Ti.UI.createAlertDialog({
            cancel: 1,
            buttonNames: [ "Yes", "Cancel" ],
            message: "Would you like to download the brochure?",
            title: "Download"
        });
        dialog.addEventListener("click", function(e) {
            e.index === e.source.cancel ? Ti.API.info("The cancel button was clicked") : downloadBrochure(adImage, id, content, cell, downloaded, downloadIcon);
            Ti.API.info("e.cancel: " + e.cancel);
            Ti.API.info("e.source.cancel: " + e.source.cancel);
            Ti.API.info("e.index: " + e.index);
        });
        dialog.show();
    };
    __defers["$.__views.filterButton!click!popWindow"] && $.__views.filterButton.addEventListener("click", popWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;