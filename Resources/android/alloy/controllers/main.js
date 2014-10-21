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
    $.__views.__alloyId64 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
    $.__views.__alloyId53 = Ti.UI.createLabel({
=======
<<<<<<< HEAD
    $.__views.__alloyId51 = Ti.UI.createLabel({
=======
    $.__views.__alloyId50 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
<<<<<<< HEAD
=======
    $.__views.__alloyId51 = Ti.UI.createLabel({
>>>>>>> 21/10/2014
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "THIS IS MAIN",
<<<<<<< HEAD
        id: "__alloyId64"
    });
    $.__views.main.add($.__views.__alloyId64);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
        id: "__alloyId53"
    });
    $.__views.main.add($.__views.__alloyId53);
=======
<<<<<<< HEAD
        id: "__alloyId51"
    });
    $.__views.main.add($.__views.__alloyId51);
=======
        id: "__alloyId50"
    });
    $.__views.main.add($.__views.__alloyId50);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
<<<<<<< HEAD
=======
        id: "__alloyId51"
    });
    $.__views.main.add($.__views.__alloyId51);
>>>>>>> 21/10/2014
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;