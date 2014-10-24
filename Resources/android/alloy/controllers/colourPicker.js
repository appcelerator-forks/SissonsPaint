function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function generateColour() {
        console.log(details.length);
        var viewWidth = details.length / 2 * 50;
        var topRow = Titanium.UI.createView({
            layout: "horizontal",
            bottom: 10,
            height: 60,
            width: viewWidth
        });
        var bottomRow = Titanium.UI.createView({
            layout: "horizontal",
            height: 60,
            width: viewWidth
        });
        for (var i = 0; i < details.length; i++) {
            var colours = $.UI.create("View", {
                backgroundColor: "rgb(" + details[i].rgb + ")",
                width: "40",
                height: "40",
                left: "5",
                right: "5"
            });
            i % 2 == 1 ? topRow.add(colours) : bottomRow.add(colours);
        }
        $.scrollView.add(topRow);
        $.scrollView.add(bottomRow);
    }
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
    $.__views.__alloyId40 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId40"
    });
    $.__views.colourPicker.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Alloy.createController("toggle", {
        id: "__alloyId41",
        __parentSymbol: $.__views.__alloyId40
    });
    $.__views.__alloyId41.setParent($.__views.__alloyId40);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 28
        },
        text: "Colour Picker",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId42"
    });
    $.__views.__alloyId40.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "This is Colour Picker",
        id: "__alloyId43"
    });
    $.__views.colourPicker.add($.__views.__alloyId43);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        backgroundColor: "white",
        layout: "vertical",
        top: "0",
        scrollType: "horizontal",
        height: "600"
    });
    $.__views.colourPicker.add($.__views.scrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var colour_lib = Alloy.createCollection("colour");
    var details = colour_lib.getColourList();
    generateColour();
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