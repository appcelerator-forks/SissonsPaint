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
    $.__views.__alloyId107 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId107"
    });
    $.__views.home.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Alloy.createController("toggle", {
        id: "__alloyId109",
        __parentSymbol: $.__views.__alloyId108
    });
    $.__views.__alloyId109.setParent($.__views.__alloyId108);
    $.__views.__alloyId110 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        text: "Home",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId110"
    });
    $.__views.__alloyId108.add($.__views.__alloyId110);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;