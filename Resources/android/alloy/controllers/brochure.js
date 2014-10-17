function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function createAdImageEvent(adImage, id, content, cell) {
        adImage.addEventListener("click", function() {
            var ind = Titanium.UI.createProgressBar({
                width: 150,
                height: 100,
                min: 0,
                max: 1,
                value: 0,
                style: Titanium.UI.iPhone.ProgressBarStyle.DEFAULT,
                top: 10,
                message: "% Downloading",
                font: {
                    fontSize: 12,
                    fontWeight: "bold"
                },
                color: "black"
            });
            cell.add(ind);
            pdf(content, true, ind, function(err) {
                if (err) alert(err); else {
                    adImage.add(ind);
                    console.log("a");
                    ind.show();
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
    $.__views.brochureView = Ti.UI.createView({
        backgroundColor: "white",
        id: "brochureView",
        layout: "vertical",
        backgroundImage: "/images/wood_background.jpg"
    });
    $.__views.brochureView && $.addTopLevelView($.__views.brochureView);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId15"
    });
    $.__views.brochureView.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Alloy.createController("toggle", {
        id: "__alloyId16",
        __parentSymbol: $.__views.__alloyId15
    });
    $.__views.__alloyId16.setParent($.__views.__alloyId15);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Brochure",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.scrollview = Ti.UI.createScrollView({
        id: "scrollview",
        layout: "vertical",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.brochureView.add($.__views.scrollview);
    $.__views.mainView = Ti.UI.createView({
        id: "mainView",
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "80%"
    });
    $.__views.scrollview.add($.__views.mainView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var pdf = require("pdf");
    var youtubePlayer = require("titutorial.youtubeplayer");
    var library = Alloy.createCollection("brochure");
    var details = library.getBrochureList();
    var displayCover = function() {
        var counter = 0;
        var imagepath, adImage, row, image, cellWrapper, cell = "";
        var last = details.length - 1;
        for (var i = 0; i < details.length; i++) {
            var id = details[i].id;
            imagepath = details[i].cover;
            console.log(imagepath);
            console.log(details[i].content);
            adImage = Ti.UI.createImageView({
                image: imagepath,
                bottom: 0,
                width: 80
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
            "pdf" == details[i].format ? createAdImageEvent(adImage, id, details[i].content, cell) : createVideoEvent(adImage, id, details[i].url);
            cell.add(adImage);
            cellWrapper.add(cell);
            row.add(cellWrapper);
            row.add(image);
            (counter % 3 == 2 || last == counter) && $.scrollview.add(row);
            counter++;
        }
    };
    displayCover();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;