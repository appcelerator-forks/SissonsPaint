function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
<<<<<<< HEAD
=======
    }
    return arg;
}

function Controller() {
    function createAdImageEvent(adImage, id, content) {
        adImage.addEventListener("click", function() {
            pdf(content, true, function(err) {
                err && alert(err);
            });
        });
>>>>>>> FETCH_HEAD
    }
    return arg;
}

function Controller() {
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
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId16"
    });
    $.__views.brochureView.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Alloy.createController("toggle", {
        id: "__alloyId17",
        __parentSymbol: $.__views.__alloyId16
    });
    $.__views.__alloyId17.setParent($.__views.__alloyId16);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Brochure",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.scrollview = Ti.UI.createScrollView({
        id: "scrollview",
        layout: "vertical"
    });
    $.__views.brochureView.add($.__views.scrollview);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "80%",
        id: "__alloyId19"
    });
    $.__views.scrollview.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        bottom: "0",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.img0 = Ti.UI.createImageView({
        id: "img0",
        image: "http://sissons.playlab.com.my/public/images/default_cover.jpg",
        bottom: "0",
        width: "30%",
        right: "3%"
    });
    $.__views.__alloyId20.add($.__views.img0);
    $.__views.img1 = Ti.UI.createImageView({
        id: "img1",
        image: "http://sissons.playlab.com.my/public/brochure/1/0/9ad5a6d26_150.png",
        bottom: "0",
        width: "30%",
        left: "1.5%",
        right: "1.5%"
    });
    $.__views.__alloyId20.add($.__views.img1);
    $.__views.img2 = Ti.UI.createImageView({
        id: "img2",
        image: "http://sissons.playlab.com.my/public/brochure/8/ca59fb2f4_150.png",
        bottom: "0",
        width: "30%",
        left: "3%"
    });
    $.__views.__alloyId20.add($.__views.img2);
    $.__views.__alloyId21 = Ti.UI.createImageView({
        image: "/images/wood_rack.png",
        top: "0",
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        bottom: "0",
        id: "__alloyId22"
    });
    $.__views.__alloyId19.add($.__views.__alloyId22);
    $.__views.img3 = Ti.UI.createImageView({
        id: "img3",
        image: "http://sissons.playlab.com.my/public/brochure/6/0811f9dbb_150.png",
        bottom: "0",
        width: "30%",
        right: "3%"
    });
    $.__views.__alloyId22.add($.__views.img3);
    $.__views.img4 = Ti.UI.createImageView({
        id: "img4",
        image: "http://sissons.playlab.com.my/public/brochure/4/86316d6ee_150.png",
        bottom: "0",
        width: "30%",
        left: "1.5%",
        right: "1.5%"
    });
    $.__views.__alloyId22.add($.__views.img4);
    $.__views.img5 = Ti.UI.createImageView({
        id: "img5",
        image: "/images/app_icon.png",
        bottom: "0",
        width: "30%",
        left: "3%"
    });
    $.__views.__alloyId22.add($.__views.img5);
    $.__views.__alloyId23 = Ti.UI.createImageView({
        image: "/images/wood_rack.png",
        top: "0",
        id: "__alloyId23"
    });
    $.__views.__alloyId19.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        bottom: "0",
        id: "__alloyId24"
    });
    $.__views.__alloyId19.add($.__views.__alloyId24);
    $.__views.img6 = Ti.UI.createImageView({
        id: "img6",
        image: "/images/app_icon.png",
        bottom: "0",
        width: "30%",
        right: "3%"
    });
    $.__views.__alloyId24.add($.__views.img6);
    $.__views.img7 = Ti.UI.createImageView({
        id: "img7",
        image: "/images/app_icon.png",
        bottom: "0",
        width: "30%",
        left: "1.5%",
        right: "1.5%"
    });
    $.__views.__alloyId24.add($.__views.img7);
    $.__views.img8 = Ti.UI.createImageView({
        id: "img8",
        image: "/images/app_icon.png",
        bottom: "0",
        width: "30%",
        left: "3%"
    });
    $.__views.__alloyId24.add($.__views.img8);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        image: "/images/wood_rack.png",
        top: "0",
        id: "__alloyId25"
    });
    $.__views.__alloyId19.add($.__views.__alloyId25);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    require("pdf");
    var library = Alloy.createCollection("brochure");
<<<<<<< HEAD
    library.getBrochureList();
=======
    var details = library.getBrochureList();
    var displayCover = function() {
        var counter = 0;
        var imagepath, adImage, row, cell = "";
        var last = details.length - 1;
        for (var i = 0; i < details.length; i++) {
            var id = details[i].id;
            imagepath = details[i].cover;
            adImage = Utils.RemoteImage({
                image: imagepath
            });
            counter % 3 == 0 && (row = $.UI.create("View", {
                classes: [ "row" ],
                textAlign: "center"
            }));
            cell = $.UI.create("View", {
                classes: [ "cell" ],
                top: 2
            });
            createAdImageEvent(adImage, id, details[i].content);
            cell.add(adImage);
            row.add(cell);
            (counter % 3 == 2 || last == counter) && $.scrollview.add(row);
            counter++;
        }
    };
    displayCover();
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;