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
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.colourPicker = Ti.UI.createWindow({
        id: "colourPicker"
    });
    $.__views.colourPicker && $.addTopLevelView($.__views.colourPicker);
    $.__views.__alloyId4 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId4"
    });
    $.__views.colourPicker.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "This is Colour Picker",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var app = {
        sharer: {
            fb: function(content) {
                try {
                    var intFB = Ti.Android.createIntent({
                        action: Ti.Android.ACTION_SEND,
                        packageName: [ "com.facebook.katana", "com.instagram.android" ],
                        className: "com.facebook.katana.ShareLinkActivity",
                        flags: 805306368,
                        type: "text/plain"
                    });
                    intFB.putExtra(Ti.Android.EXTRA_TEXT, "http://www.google.com");
                    intFB.addCategory(Ti.Android.CATEGORY_LAUNCHER);
                    Ti.Android.currentActivity.startActivity(intFB);
                } catch (x) {
                    app.sharer.fallbackFB(content);
                }
            },
            chooser: function() {
                var intShare = Ti.Android.createIntent({
                    action: Ti.Android.ACTION_SEND,
                    type: "text/plain"
                });
                intShare.putExtra(Ti.Android.EXTRA_TEXT, "itten kontent");
                Ti.Android.currentActivity.startActivity(intShare);
            },
            fallbackFB: function(content) {
                app.sharer._openWebViewWindow(String.format("http://m.facebook.com/sharer.php?u=%s&t=%s", content, content));
            },
            fallbackTwitter: function(content) {
                app.sharer._openWebViewWindow(String.format("http://m.twitter.com/?status=%s", content));
            },
            _openWebViewWindow: function(url) {
                var webViewWin = Ti.UI.createWindow({
                    modal: true
                });
                var webView = Ti.UI.createWebView({
                    url: url,
                    canGoBack: true,
                    canGoForward: true
                });
                webViewWin.add(webView);
                webViewWin.open();
            }
        }
    };
    var MESSAGE = "http://google.com is great search engine";
    var btnShareChooser = Ti.UI.createButton({
        title: "Share to Chooser"
    });
    btnShareChooser.addEventListener("click", app.sharer.chooser.bind(null, MESSAGE));
    Ti.UI.currentWindow.add(btnShareChooser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;