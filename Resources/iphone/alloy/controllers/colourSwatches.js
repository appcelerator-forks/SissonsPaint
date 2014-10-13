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
<<<<<<< HEAD
    $.__views.__alloyId14 = Alloy.createController("toggle", {
        id: "__alloyId14",
        __parentSymbol: $.__views.colourSwatches
=======
<<<<<<< HEAD
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "This is Colour Swatches page",
        id: "__alloyId15"
    });
=======
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "COLOR CATEGORIES",
        id: "__alloyId14"
>>>>>>> FETCH_HEAD
    });
    $.__views.__alloyId14.setParent($.__views.colourSwatches);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: "75%",
        height: 20,
        color: "black",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "COLOR CATEGORIES",
        id: "__alloyId15"
    });
>>>>>>> FETCH_HEAD
    $.__views.colourSwatches.add($.__views.__alloyId15);
    $.__views.main = Ti.UI.createScrollView({
        backgroundColor: "white",
        id: "main",
        layout: "vertical",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
    });
    $.__views.colourSwatches.add($.__views.main);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: "90%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "12"
        },
        textAlign: "Ti.UI.TEXT_ALIGNMENT_LEFT",
        bottom: 10,
        text: "ECOGLOS is base on long oilmodifield alkyd. It is fungus resistant high gloss architectural paint that decorates and protects the interior and exterior of building. It has excellent coverage, good application and flow properties. With the proper primer and undercoat, EcoGloss will dry to an attractive smooth finish on wooden and metal substrates.",
        id: "__alloyId16"
    });
    $.__views.main.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "10",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId17"
    });
    $.__views.main.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#EB9CE7",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId20"
    });
    $.__views.__alloyId18.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId21"
    });
    $.__views.__alloyId18.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId22"
    });
    $.__views.__alloyId17.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#A2F2EA",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId25"
    });
    $.__views.__alloyId22.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId26"
    });
    $.__views.__alloyId17.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#9CEBC4",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId29"
    });
    $.__views.__alloyId26.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId30"
    });
    $.__views.__alloyId17.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#9CD2EB",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId33"
    });
    $.__views.__alloyId30.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "10",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId34"
    });
    $.__views.main.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#DA953A",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId37"
    });
    $.__views.__alloyId35.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId39"
    });
    $.__views.__alloyId34.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#EBB79C",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId43"
    });
    $.__views.__alloyId34.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#EBD19C",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId45"
    });
    $.__views.__alloyId43.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId46"
    });
    $.__views.__alloyId43.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId47"
    });
    $.__views.__alloyId34.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#DCEB9C",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId49"
    });
    $.__views.__alloyId47.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId50"
    });
    $.__views.__alloyId47.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "10",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId51"
    });
    $.__views.main.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#E14837",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId54"
    });
    $.__views.__alloyId52.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId55"
    });
    $.__views.__alloyId52.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId56"
    });
    $.__views.__alloyId51.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#85F88B",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId58"
    });
    $.__views.__alloyId56.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId59"
    });
    $.__views.__alloyId56.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId60"
    });
    $.__views.__alloyId51.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#F885C8",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId62"
    });
    $.__views.__alloyId60.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId63"
    });
    $.__views.__alloyId60.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId64"
    });
    $.__views.__alloyId51.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#85D2F8",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId66"
    });
    $.__views.__alloyId64.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId67"
    });
    $.__views.__alloyId64.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId68"
    });
    $.__views.main.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#FCD4D0",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId71"
    });
    $.__views.__alloyId69.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId72"
    });
    $.__views.__alloyId69.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId73"
    });
    $.__views.__alloyId68.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#A2297C",
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId75"
    });
    $.__views.__alloyId73.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId76"
    });
    $.__views.__alloyId73.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId77"
    });
    $.__views.__alloyId68.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#2982A2",
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId79"
    });
    $.__views.__alloyId77.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId80"
    });
    $.__views.__alloyId77.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        layout: "vertical",
        width: "24%",
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId81"
    });
    $.__views.__alloyId68.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        width: "95%",
        height: "80",
        left: "5",
        backgroundColor: "#85F8D2",
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "3027",
        id: "__alloyId83"
    });
    $.__views.__alloyId81.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        color: "#6E6E6E",
        font: {
            fontSize: "8"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        text: "PRIMROSE",
        id: "__alloyId84"
    });
    $.__views.__alloyId81.add($.__views.__alloyId84);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var library = Alloy.createCollection("category");
    var details = library.getCategoryList();
    console.log(details);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;