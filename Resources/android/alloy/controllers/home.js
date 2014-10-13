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
=======
<<<<<<< HEAD
    $.__views.__alloyId31 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId31"
    });
    $.__views.home.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Alloy.createController("toggle", {
        id: "__alloyId33",
        __parentSymbol: $.__views.__alloyId32
    });
    $.__views.__alloyId33.setParent($.__views.__alloyId32);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Home",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId34"
    });
    $.__views.__alloyId32.add($.__views.__alloyId34);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
=======
<<<<<<< HEAD
    $.__views.__alloyId17 = Ti.UI.createView({
=======
>>>>>>> FETCH_HEAD
    $.__views.__alloyId86 = Ti.UI.createView({
        left: 3,
        top: 48,
        width: "20%",
        height: 50,
        borderWidth: 1,
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId86"
    });
    $.__views.home.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createButton({
        title: "Menu",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    toggle ? $.__views.__alloyId87.addEventListener("click", toggle) : __defers["$.__views.__alloyId87!click!toggle"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId87!click!toggle"] && $.__views.__alloyId87.addEventListener("click", toggle);
<<<<<<< HEAD
=======
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;