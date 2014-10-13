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
    this.__controllerPath = "colourSwatches";
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
    $.__views.colourSwatches = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "colourSwatches"
    });
    $.__views.colourSwatches && $.addTopLevelView($.__views.colourSwatches);
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId23"
    });
    $.__views.colourSwatches.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Alloy.createController("toggle", {
        id: "__alloyId24",
        __parentSymbol: $.__views.__alloyId23
    });
    $.__views.__alloyId24.setParent($.__views.__alloyId23);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Colour Swatches",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "This is Colour Swatches page",
        id: "__alloyId26"
    });
    $.__views.colourSwatches.add($.__views.__alloyId26);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;