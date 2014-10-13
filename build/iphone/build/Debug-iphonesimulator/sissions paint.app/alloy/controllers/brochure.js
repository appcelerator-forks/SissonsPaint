function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function createAdImageEvent(adImage, id, content) {
        adImage.addEventListener("click", function() {
            pdf(content, true, function(err) {
                err && alert(err);
            });
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "brochure";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.brochureView = Ti.UI.createView({
        backgroundColor: "white",
        id: "brochureView",
        layout: "vertical"
    });
    $.__views.brochureView && $.addTopLevelView($.__views.brochureView);
    $.__views.scrollview = Ti.UI.createScrollView({
        id: "scrollview",
        layout: "vertical"
    });
    $.__views.brochureView.add($.__views.scrollview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var pdf = require("pdf");
    var library = Alloy.createCollection("brochure");
    var details = library.getBrochureList();
    var displayCover = function() {
        var counter = 0;
        var imagepath, adImage, row, cell = "";
        var last = details.length - 1;
        for (var i = 0; details.length > i; i++) {
            var id = details[i].id;
            imagepath = details[i].cover;
            adImage = Utils.RemoteImage({
                image: imagepath
            });
            0 == counter % 3 && (row = $.UI.create("View", {
                classes: [ "row" ],
                textAlign: "center"
            }));
            cell = $.UI.create("View", {
                classes: [ "cell" ],
                top: 2
            });
            createAdImageEvent(adImage, id, details[i].content);
            cell.add(adImage);
            row.add(cell);
            (2 == counter % 3 || last == counter) && $.scrollview.add(row);
            counter++;
        }
    };
    displayCover();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;