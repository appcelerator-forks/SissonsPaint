function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "aboutUs";
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
    $.__views.mainView = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        fullscreen: true,
        id: "mainView",
        top: "10",
        left: "10",
        right: "10"
    });
    $.__views.mainView && $.addTopLevelView($.__views.mainView);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        height: Ti.UI.SIZE,
        id: "__alloyId0"
    });
    $.__views.mainView.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        backgroundImage: "/images/banner_about_us.jpg",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Alloy.createController("toggle", {
        id: "__alloyId2",
        __parentSymbol: $.__views.__alloyId1
    });
    $.__views.__alloyId2.setParent($.__views.__alloyId1);
    $.__views.mainScroll = Ti.UI.createScrollView({
        id: "mainScroll",
        layout: "vertical",
        height: Ti.UI.SIZE,
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.__alloyId0.add($.__views.mainScroll);
    $.__views.main = Ti.UI.createScrollView({
        backgroundColor: "white",
        id: "main",
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.mainScroll.add($.__views.main);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {},
        color: "#6E6E6E",
        bottom: 10,
        text: "It was in 1959 that SISSONS PAINTS (EAST) SDN BHD first started in Malaysia, although SISSONS' technology in paint making goes back 185 years when Sissons Brothers founded a company in HULL, England in 1803. SISSONS' well-known trademark of 'THE MEN AND PLANK' has been in use since 1910.",
        width: "90%",
        id: "__alloyId3"
    });
    $.__views.main.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {},
        color: "#6E6E6E",
        bottom: 10,
        text: "In 1992, Boustead Holdings Berhad, one of the largest conglomerates in Malaysia acquired then know as Kemira Sissons Paints Sdn Bhd. To reflect a common identity, we have since July 1993 in corporated the name Boustead into our company’s name and is now know as Boustead Sissons Paints Sdn Bhd.",
        width: "90%",
        id: "__alloyId4"
    });
    $.__views.main.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        image: "/images/about_us_image.png",
        bottom: "0",
        right: "0",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId5"
    });
    $.__views.mainScroll.add($.__views.__alloyId5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    require("api");
    require("common");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;