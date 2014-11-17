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
                color: "black",
                font: {
                    fontSize: 8,
                    fontWeight: "bold"
                },
                text: "",
                top: 2,
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                width: imageWidth,
                height: imageHeight
            });
            if ("0" == downloaded) {
                cell.add(gray);
                cell.add(ind);
                cell.add(label);
            } else {
                cell.remove(gray);
                cell.remove(ind);
                cell.remove(label);
            }
            pdf(content, true, ind, label, function(err) {
                if (err) alert(err); else {
                    library.updateDownloadedBrochure(id);
                    "" != downloadIcon && cell.remove(downloadIcon);
                    cell.remove(gray);
                    cell.remove(ind);
                    cell.remove(label);
                }
            });
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
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId23"
    });
    $.__views.brochureView.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Alloy.createController("toggle", {
        id: "__alloyId25",
        __parentSymbol: $.__views.__alloyId24
    });
    $.__views.__alloyId25.setParent($.__views.__alloyId24);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        text: "Brochure",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.scrollview = Ti.UI.createScrollView({
        id: "scrollview",
        layout: "vertical",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.__alloyId23.add($.__views.scrollview);
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
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        id: "__alloyId27"
    });
    $.__views.toolbar.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        width: "40%",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.filterButton = Ti.UI.createImageView({
        id: "filterButton",
        image: "/images/icon_filter.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId29.add($.__views.filterButton);
    popWindow ? $.__views.filterButton.addEventListener("click", popWindow) : __defers["$.__views.filterButton!click!popWindow"] = true;
    $.__views.__alloyId30 = Ti.UI.createView({
        width: "40%",
        id: "__alloyId30"
    });
    $.__views.__alloyId27.add($.__views.__alloyId30);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var pdf = require("pdf");
    var youtubePlayer = require("titutorial.youtubeplayer");
    var library = Alloy.createCollection("brochure");
    var details = library.getBrochureList();
    var filterFlag = 0;
    var displayCover = function() {
        var counter = 0;
        var imagepath, adImage, row, image, cellWrapper, cell = "";
        var last = details.length - 1;
        for (var i = 0; i < details.length; i++) {
            var id = details[i].id;
            imagepath = details[i].cover;
            adImage = Ti.UI.createImageView({
                image: imagepath,
                bottom: 0,
                width: 90,
                height: "auto"
            });
            if (counter % 3 == 0) {
                row = $.UI.create("View", {
                    textAlign: "center",
                    bottom: 0,
                    layout: "vertical",
                    height: Ti.UI.SIZE,
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
                bottom: "0",
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
    displayCover();
    var tableData = [];
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
    __defers["$.__views.filterButton!click!popWindow"] && $.__views.filterButton.addEventListener("click", popWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;