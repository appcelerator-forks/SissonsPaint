function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function generateTable() {
        var TheScrollView = Titanium.UI.createScrollView({
            backgroundColor: "white",
            width: "95%",
            layout: "vertical",
            height: Ti.UI.SIZE,
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
        });
        for (var i = 0; i < details.length; i++) {
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
                console.log(colour_details);
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
    $.__views.mainViewContainer = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "mainViewContainer"
    });
<<<<<<< HEAD
    $.__views.mainViewContainer && $.addTopLevelView($.__views.mainViewContainer);
    $.__views.__alloyId30 = Ti.UI.createView({
=======
    $.__views.colourSwatches && $.addTopLevelView($.__views.colourSwatches);
    $.__views.__alloyId23 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        layout: "horizontal",
        height: "80",
        id: "__alloyId23"
    });
<<<<<<< HEAD
    $.__views.mainViewContainer.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Alloy.createController("toggle", {
        id: "__alloyId31",
        __parentSymbol: $.__views.__alloyId30
=======
    $.__views.colourSwatches.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Alloy.createController("toggle", {
        id: "__alloyId24",
        __parentSymbol: $.__views.__alloyId23
>>>>>>> FETCH_HEAD
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
<<<<<<< HEAD
    $.__views.__alloyId30.add($.__views.titleLabel);
=======
    $.__views.__alloyId23.add($.__views.titleLabel);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: "75%",
        height: 20,
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "COLOR CATEGORIES",
        id: "__alloyId25"
    });
    $.__views.colourSwatches.add($.__views.__alloyId25);
    $.__views.main = Ti.UI.createScrollView({
        backgroundColor: "white",
        id: "main",
        layout: "vertical",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
    });
    $.__views.colourSwatches.add($.__views.main);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "12"
        },
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        bottom: 10,
        text: "ECOGLOS is base on long oilmodifield alkyd. It is fungus resistant high gloss architectural paint that decorates and protects the interior and exterior of building. It has excellent coverage, good application and flow properties. With the proper primer and undercoat, EcoGloss will dry to an attractive smooth finish on wooden and metal substrates.",
        id: "__alloyId26"
    });
    $.__views.main.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "10",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId27"
    });
    $.__views.main.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#EB9CE7",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId31"
    });
    $.__views.__alloyId28.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId32"
    });
    $.__views.__alloyId27.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#A2F2EA",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId34"
    });
    $.__views.__alloyId32.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId35"
    });
    $.__views.__alloyId32.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId36"
    });
    $.__views.__alloyId27.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#9CEBC4",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId39"
    });
    $.__views.__alloyId36.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId40"
    });
    $.__views.__alloyId27.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#9CD2EB",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId42"
    });
    $.__views.__alloyId40.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId43"
    });
    $.__views.__alloyId40.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "10",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId44"
    });
    $.__views.main.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#DA953A",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId47"
    });
    $.__views.__alloyId45.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId48"
    });
    $.__views.__alloyId45.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId49"
    });
    $.__views.__alloyId44.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#EBB79C",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId51"
    });
    $.__views.__alloyId49.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId52"
    });
    $.__views.__alloyId49.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId53"
    });
    $.__views.__alloyId44.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#EBD19C",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId55"
    });
    $.__views.__alloyId53.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId56"
    });
    $.__views.__alloyId53.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId57"
    });
    $.__views.__alloyId44.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#DCEB9C",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId59"
    });
    $.__views.__alloyId57.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId60"
    });
    $.__views.__alloyId57.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "10",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId61"
    });
    $.__views.main.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#E14837",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId64"
    });
    $.__views.__alloyId62.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId65"
    });
    $.__views.__alloyId62.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId66"
    });
    $.__views.__alloyId61.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#85F88B",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId68"
    });
    $.__views.__alloyId66.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId69"
    });
    $.__views.__alloyId66.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId70"
    });
    $.__views.__alloyId61.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#F885C8",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId72"
    });
    $.__views.__alloyId70.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId73"
    });
    $.__views.__alloyId70.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId74"
    });
    $.__views.__alloyId61.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#85D2F8",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId76"
    });
    $.__views.__alloyId74.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId77"
    });
    $.__views.__alloyId74.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId78"
    });
    $.__views.main.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#FCD4D0",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId81"
    });
    $.__views.__alloyId79.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId82"
    });
    $.__views.__alloyId79.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId83"
    });
    $.__views.__alloyId78.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#A2297C",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId85"
    });
    $.__views.__alloyId83.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId86"
    });
    $.__views.__alloyId83.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId87"
    });
    $.__views.__alloyId78.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#2982A2",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId90"
    });
    $.__views.__alloyId87.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId91"
    });
    $.__views.__alloyId78.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#85F8D2",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId93"
    });
    $.__views.__alloyId91.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId94"
    });
    $.__views.__alloyId91.add($.__views.__alloyId94);
>>>>>>> FETCH_HEAD
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