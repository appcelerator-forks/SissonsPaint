function Controller() {
    function generateTable() {
        var TheScrollView = Titanium.UI.createScrollView({
            backgroundColor: "white",
            width: "95%",
            layout: "vertical",
            height: Ti.UI.SIZE,
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
        });
        for (var i = 0; details.length > i; i++) {
            var colours = category_colour_lib.getCategoryColourByCategory(details[i]["id"]);
            var categoryHeader = Titanium.UI.createImageView({
                width: "100%",
                height: Ti.UI.SIZE,
                touchEnabled: false,
                image: details[i]["image"]
            });
            var description = $.UI.create("Label", {
                text: details[i].description,
                classes: [ "aboutContent" ]
            });
            TheScrollView.add(categoryHeader);
            TheScrollView.add(description);
            var colourView = $.UI.create("View", {
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                layout: "horizontal",
                width: "100%",
                bottom: 10,
                height: Ti.UI.SIZE
            });
            var counter = 0;
            colours.forEach(function(colour) {
                var subView = $.UI.create("View", {
                    textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
                    layout: "vertical",
                    width: "25%",
                    height: Ti.UI.SIZE
                });
                var colour_details = colour_lib.getColourById(colour.colour_id);
                var subViewColor = $.UI.create("View", {
                    backgroundColor: "rgb(" + colour_details.rgb + ")",
                    width: "97%",
                    height: "80"
                });
                var subLabelName = $.UI.create("Label", {
                    text: colour_details.name,
                    classes: [ "colorDesc" ]
                });
                var subLabelCode = $.UI.create("Label", {
                    text: colour_details.code,
                    classes: [ "colorDesc" ]
                });
                subView.add(subViewColor);
                subView.add(subLabelName);
                subView.add(subLabelCode);
                colourView.add(subView);
                counter++;
            });
            TheScrollView.add(colourView);
        }
        $.mainViewContainer.add(TheScrollView);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "colourSwatches";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mainViewContainer = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "mainViewContainer"
    });
    $.__views.mainViewContainer && $.addTopLevelView($.__views.mainViewContainer);
    $.__views.__alloyId23 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId23"
    });
    $.__views.mainViewContainer.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Alloy.createController("toggle", {
        id: "__alloyId24",
        __parentSymbol: $.__views.__alloyId23
    });
    $.__views.__alloyId24.setParent($.__views.__alloyId23);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: "28"
        },
        text: "Colour Swatches",
        id: "titleLabel",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    $.__views.__alloyId23.add($.__views.titleLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var library = Alloy.createCollection("category");
    var category_colour_lib = Alloy.createCollection("category_colour");
    var colour_lib = Alloy.createCollection("colour");
    var details = library.getCategoryList();
    generateTable();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;