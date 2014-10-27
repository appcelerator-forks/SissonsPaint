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
    $.__views.__alloyId57 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId57"
    });
    $.__views.home.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Alloy.createController("toggle", {
        id: "__alloyId59",
        __parentSymbol: $.__views.__alloyId58
    });
    $.__views.__alloyId59.setParent($.__views.__alloyId58);
    $.__views.__alloyId60 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId50 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId51 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId51"
    });
    $.__views.home.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Alloy.createController("toggle", {
        id: "__alloyId53",
        __parentSymbol: $.__views.__alloyId52
    });
    $.__views.__alloyId53.setParent($.__views.__alloyId52);
    $.__views.__alloyId54 = Ti.UI.createLabel({
=======
    $.__views.__alloyId52 = Ti.UI.createView({
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
    $.__views.__alloyId52.setParent($.__views.__alloyId51);
    $.__views.__alloyId53 = Ti.UI.createLabel({
=======
    $.__views.__alloyId54.setParent($.__views.__alloyId53);
    $.__views.__alloyId55 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        text: "Home",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
        id: "__alloyId60"
    });
    $.__views.__alloyId58.add($.__views.__alloyId60);
=======
<<<<<<< HEAD
        id: "__alloyId53"
    });
    $.__views.__alloyId51.add($.__views.__alloyId53);
=======
<<<<<<< HEAD
        id: "__alloyId54"
    });
    $.__views.__alloyId52.add($.__views.__alloyId54);
=======
        id: "__alloyId55"
    });
    $.__views.__alloyId53.add($.__views.__alloyId55);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;