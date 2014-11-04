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
    $.__views.__alloyId64 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId64"
    });
    $.__views.home.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Alloy.createController("toggle", {
        id: "__alloyId66",
        __parentSymbol: $.__views.__alloyId65
    });
    $.__views.__alloyId66.setParent($.__views.__alloyId65);
    $.__views.__alloyId67 = Ti.UI.createLabel({
=======
    $.__views.__alloyId62 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId62"
    });
    $.__views.home.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Alloy.createController("toggle", {
        id: "__alloyId64",
        __parentSymbol: $.__views.__alloyId63
    });
    $.__views.__alloyId64.setParent($.__views.__alloyId63);
    $.__views.__alloyId65 = Ti.UI.createLabel({
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
        id: "__alloyId67"
    });
    $.__views.__alloyId65.add($.__views.__alloyId67);
=======
        id: "__alloyId65"
    });
    $.__views.__alloyId63.add($.__views.__alloyId65);
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;