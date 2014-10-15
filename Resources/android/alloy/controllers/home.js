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
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId33"
    });
    $.__views.home.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Alloy.createController("toggle", {
        id: "__alloyId35",
        __parentSymbol: $.__views.__alloyId34
    });
    $.__views.__alloyId35.setParent($.__views.__alloyId34);
    $.__views.__alloyId36 = Ti.UI.createLabel({
=======
    $.__views.__alloyId99 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId99"
    });
    $.__views.home.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Alloy.createController("toggle", {
        id: "__alloyId101",
        __parentSymbol: $.__views.__alloyId100
    });
    $.__views.__alloyId101.setParent($.__views.__alloyId100);
    $.__views.__alloyId102 = Ti.UI.createLabel({
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
        id: "__alloyId36"
    });
    $.__views.__alloyId34.add($.__views.__alloyId36);
=======
        id: "__alloyId102"
    });
    $.__views.__alloyId100.add($.__views.__alloyId102);
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;