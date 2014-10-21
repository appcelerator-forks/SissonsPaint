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
    this.__controllerPath = "colourPicker";
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
    $.__views.colourPicker = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "colourPicker"
    });
    $.__views.colourPicker && $.addTopLevelView($.__views.colourPicker);
<<<<<<< HEAD
    $.__views.__alloyId32 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId32"
    });
    $.__views.colourPicker.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Alloy.createController("toggle", {
        id: "__alloyId33",
        __parentSymbol: $.__views.__alloyId32
    });
    $.__views.__alloyId33.setParent($.__views.__alloyId32);
    $.__views.__alloyId34 = Ti.UI.createLabel({
=======
    $.__views.__alloyId37 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId37"
    });
    $.__views.colourPicker.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Alloy.createController("toggle", {
        id: "__alloyId38",
        __parentSymbol: $.__views.__alloyId37
    });
    $.__views.__alloyId38.setParent($.__views.__alloyId37);
    $.__views.__alloyId39 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Colour Picker",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
<<<<<<< HEAD
        id: "__alloyId34"
    });
    $.__views.__alloyId32.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
=======
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
>>>>>>> FETCH_HEAD
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "This is Colour Picker",
<<<<<<< HEAD
        id: "__alloyId35"
    });
    $.__views.colourPicker.add($.__views.__alloyId35);
=======
        id: "__alloyId40"
    });
    $.__views.colourPicker.add($.__views.__alloyId40);
>>>>>>> FETCH_HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var app = {
        sharer: {
            chooser: function() {
                var intShare = Ti.Android.createIntent({
                    action: Ti.Android.ACTION_SEND,
                    type: "image/*"
                });
                intShare.putExtra(Ti.Android.EXTRA_TEXT, "itten kontent");
                Ti.Android.currentActivity.startActivity(intShare);
            }
        }
    };
    var MESSAGE = "#sissons_paint";
    var btnShareChooser = Ti.UI.createButton({
        title: "Media Share"
    });
    btnShareChooser.addEventListener("click", app.sharer.chooser.bind(null, MESSAGE));
    $.colourPicker.add(btnShareChooser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;