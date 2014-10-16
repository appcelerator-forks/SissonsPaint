function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "colourPicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.colourPicker = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "colourPicker"
    });
    $.__views.colourPicker && $.addTopLevelView($.__views.colourPicker);
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId18"
    });
    $.__views.colourPicker.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Alloy.createController("toggle", {
        id: "__alloyId19",
        __parentSymbol: $.__views.__alloyId18
    });
    $.__views.__alloyId19.setParent($.__views.__alloyId18);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Colour Picker",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "This is Colour Picker",
        id: "__alloyId21"
    });
    $.__views.colourPicker.add($.__views.__alloyId21);
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