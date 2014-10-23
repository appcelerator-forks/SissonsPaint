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
    this.__controllerPath = "home";
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
    $.__views.home = Ti.UI.createView({
        backgroundColor: "white",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
<<<<<<< HEAD
    $.__views.__alloyId30 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId49 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId49"
    });
    $.__views.home.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Alloy.createController("toggle", {
        id: "__alloyId51",
        __parentSymbol: $.__views.__alloyId50
    });
    $.__views.__alloyId51.setParent($.__views.__alloyId50);
    $.__views.__alloyId52 = Ti.UI.createLabel({
=======
    $.__views.__alloyId50 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        layout: "vertical",
        id: "__alloyId50"
    });
    $.__views.home.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Alloy.createController("toggle", {
        id: "__alloyId52",
        __parentSymbol: $.__views.__alloyId51
    });
<<<<<<< HEAD
    $.__views.__alloyId32.setParent($.__views.__alloyId31);
    $.__views.__alloyId33 = Ti.UI.createLabel({
=======
    $.__views.__alloyId52.setParent($.__views.__alloyId51);
    $.__views.__alloyId53 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Home",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
=======
<<<<<<< HEAD
        id: "__alloyId52"
    });
    $.__views.__alloyId50.add($.__views.__alloyId52);
=======
        id: "__alloyId53"
    });
    $.__views.__alloyId51.add($.__views.__alloyId53);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;