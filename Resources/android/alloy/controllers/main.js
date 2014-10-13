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
    this.__controllerPath = "main";
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
    $.__views.main = Ti.UI.createView({
        backgroundColor: "white",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
<<<<<<< HEAD
    $.__views.__alloyId105 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId54 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId36 = Ti.UI.createLabel({
=======
    $.__views.__alloyId105 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "THIS IS MAIN",
<<<<<<< HEAD
        id: "__alloyId105"
    });
    $.__views.main.add($.__views.__alloyId105);
=======
<<<<<<< HEAD
        id: "__alloyId54"
    });
    $.__views.main.add($.__views.__alloyId54);
=======
<<<<<<< HEAD
        id: "__alloyId36"
    });
    $.__views.main.add($.__views.__alloyId36);
=======
        id: "__alloyId105"
    });
    $.__views.main.add($.__views.__alloyId105);
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