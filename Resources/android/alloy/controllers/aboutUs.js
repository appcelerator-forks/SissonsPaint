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
    this.__controllerPath = "aboutUs";
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
    var __defers = {};
    $.__views.mainView = Ti.UI.createView({
        backgroundColor: "white",
        width: Ti.UI.FILL,
        fullscreen: true,
        id: "mainView",
        top: "10",
        left: "10",
        right: "10"
    });
    $.__views.mainView && $.addTopLevelView($.__views.mainView);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        height: Ti.UI.SIZE,
        id: "__alloyId0"
    });
    $.__views.mainView.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Alloy.createController("toggle", {
        id: "__alloyId2",
        __parentSymbol: $.__views.__alloyId1
    });
    $.__views.__alloyId2.setParent($.__views.__alloyId1);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {
            fontSize: 22
        },
        text: "About Us",
        color: "black",
        width: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId3"
    });
    $.__views.__alloyId1.add($.__views.__alloyId3);
    $.__views.mainScroll = Ti.UI.createScrollView({
        id: "mainScroll",
        layout: "vertical",
        height: Ti.UI.SIZE,
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.__alloyId0.add($.__views.mainScroll);
    $.__views.main = Ti.UI.createScrollView({
        backgroundColor: "white",
        id: "main",
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "20",
        bottom: "20",
        overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
    });
    $.__views.mainScroll.add($.__views.main);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {},
        color: "#6E6E6E",
        bottom: 10,
        text: "It was in 1959 that SISSONS PAINTS (EAST) SDN BHD first started in Malaysia, although SISSONS' technology in paint making goes back 185 years when Sissons Brothers founded a company in HULL, England in 1803. SISSONS' well-known trademark of 'THE MEN AND PLANK' has been in use since 1910.",
        width: "90%",
        id: "__alloyId4"
    });
    $.__views.main.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "white",
        height: Titanium.UI.SIZE,
        id: "__alloyId5"
    });
    $.__views.mainScroll.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontSize: 22
        },
        text: "Email",
        color: "black",
        bottom: "20",
        width: "90%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "horizontal",
        height: "40",
        top: "10",
        bottom: "15",
        width: "94%",
        horizontalWrap: "true",
        id: "__alloyId8"
    });
    $.__views.__alloyId5.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {},
        color: "#6E6E6E",
        left: "10",
        textAlign: "left",
        right: "10",
        text: "Name",
        width: "30%",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.name = Ti.UI.createTextField({
        color: "#848484",
        borderColor: "#BDBDBD",
        textAlign: "center",
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "name",
        width: "60%"
    });
    $.__views.__alloyId8.add($.__views.name);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizontal",
        height: "40",
        top: "10",
        bottom: "15",
        width: "94%",
        horizontalWrap: "true",
        id: "__alloyId10"
    });
    $.__views.__alloyId5.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {},
        color: "#6E6E6E",
        left: "10",
        textAlign: "left",
        right: "10",
        text: "Email",
        width: "30%",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.email = Ti.UI.createTextField({
        color: "#848484",
        borderColor: "#BDBDBD",
        textAlign: "center",
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "email",
        width: "60%"
    });
    $.__views.__alloyId10.add($.__views.email);
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "horizontal",
        height: "100",
        top: "10",
        bottom: "0",
        width: "94%",
        horizontalWrap: "true",
        id: "__alloyId12"
    });
    $.__views.__alloyId5.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {},
        color: "#6E6E6E",
        left: "10",
        textAlign: "left",
        right: "10",
        text: "Message",
        width: "30%",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.message = Ti.UI.createTextField({
        color: "#848484",
        borderColor: "#BDBDBD",
        textAlign: "center",
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "message",
        width: "60%"
    });
    $.__views.__alloyId12.add($.__views.message);
    $.__views.toolbar = Ti.UI.createView({
        height: "60",
        bottom: "0",
        id: "toolbar",
        width: "100%",
        backgroundImage: "/images/tool_bar.jpg"
    });
    $.__views.mainView.add($.__views.toolbar);
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        id: "__alloyId14"
    });
    $.__views.toolbar.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        width: "40%",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        width: "20%",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    $.__views.contactButton = Ti.UI.createImageView({
        id: "contactButton",
        image: "/images/icon_email.png",
        height: "40",
        width: "50",
        top: "10",
        bottom: "10"
    });
    $.__views.__alloyId16.add($.__views.contactButton);
    submitContactForm ? $.__views.contactButton.addEventListener("click", submitContactForm) : __defers["$.__views.contactButton!click!submitContactForm"] = true;
    $.__views.__alloyId17 = Ti.UI.createView({
        width: "40%",
        id: "__alloyId17"
    });
    $.__views.__alloyId14.add($.__views.__alloyId17);
    $.__views.win = Ti.UI.createView({
        id: "win",
        height: "80%",
        width: "80%",
        backgroundColor: "transparent",
        theme: "Theme.NoActionBar",
        navBarHidden: "true",
        fullscreen: "true",
        borderColor: "#A5A5A5",
        borderWidth: "2",
        visible: "false"
    });
    $.__views.mainView.add($.__views.win);
    var __alloyId18 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "white"
    });
    __alloyId18.push($.__views.view1);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "View 1",
        color: "black",
        id: "__alloyId19"
    });
    $.__views.view1.add($.__views.__alloyId19);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "white"
    });
    __alloyId18.push($.__views.view2);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        text: "View 2",
        color: "black",
        id: "__alloyId20"
    });
    $.__views.view2.add($.__views.__alloyId20);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "white"
    });
    __alloyId18.push($.__views.view3);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        text: "View 3",
        color: "black",
        id: "__alloyId21"
    });
    $.__views.view3.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "horizontal",
        bottom: "10",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId22"
    });
    $.__views.view3.add($.__views.__alloyId22);
    $.__views.checkBox = Ti.UI.createSwitch({
        value: false,
        id: "checkBox",
        style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX
    });
    $.__views.__alloyId22.add($.__views.checkBox);
    $.__views.showWindow = Ti.UI.createLabel({
        text: "Don't show next time",
        id: "showWindow",
        color: "black"
    });
    $.__views.__alloyId22.add($.__views.showWindow);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId18,
        id: "scrollableView",
        showPagingControl: "true",
        pagingControlTimeout: "0"
    });
    $.__views.win.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var API = require("api");
    require("common");
    var submitContactForm = function() {
        var name = $.name.value;
        var email = $.email.value;
        var message = $.message.value;
        if ("" == name) {
            var alert = Titanium.UI.createAlertDialog({
                title: "Request Rejected",
                message: "Full name cannot be empty.",
                buttonNames: [ "OK" ],
                cancel: 1
            });
            alert.addEventListener("click", function(e) {
                if (e.cancel === e.index || true === e.cancel) return false;
            });
            alert.show();
            return;
        }
        if ("" == email) {
            var alert = Titanium.UI.createAlertDialog({
                title: "Request Rejected",
                message: "Email cannot be empty.",
                buttonNames: [ "OK" ],
                cancel: 1
            });
            alert.addEventListener("click", function(e) {
                if (e.cancel === e.index || true === e.cancel) return false;
            });
            alert.show();
            return;
        }
        if ("" == message) {
            var alert = Titanium.UI.createAlertDialog({
                title: "Request Rejected",
                message: "Message cannot be empty.",
                buttonNames: [ "OK" ],
                cancel: 1
            });
            alert.addEventListener("click", function(e) {
                if (e.cancel === e.index || true === e.cancel) return false;
            });
            alert.show();
            return;
        }
        var url = API.sendContactMsg + "&name=" + name + "&email=" + email + "&message=" + message;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) {
                    var alert = Titanium.UI.createAlertDialog({
                        title: "Message Sent",
                        message: "Your messages successfully sent to Sissons Paint.",
                        buttonNames: [ "OK" ],
                        cancel: 1
                    });
                    alert.addEventListener("click", function(e) {
                        if (e.cancel === e.index || true === e.cancel) return false;
                    });
                    alert.show();
                    $.name.value = "";
                    $.email.value = "";
                    $.message.value = "";
                }
            },
            onerror: function() {
                var alert = Titanium.UI.createAlertDialog({
                    title: "Network declined",
                    message: "Failed to contact with server. Please make sure your device are connected to internet.",
                    buttonNames: [ "OK" ],
                    cancel: 1
                });
                alert.addEventListener("click", function(e) {
                    if (e.cancel === e.index || true === e.cancel) return false;
                });
                alert.show();
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    };
    $.message.addEventListener("return", submitContactForm);
    $.win.hide();
    var removeIcon = Ti.UI.createImageView({
        image: "/images/icon_remove.png",
        width: 30,
        height: 30,
        top: 0,
        right: 0
    });
    $.view3.add(removeIcon);
    removeIcon.addEventListener("click", function() {
        $.win.hide();
        console.log($.checkBox.value);
    });
    __defers["$.__views.contactButton!click!submitContactForm"] && $.__views.contactButton.addEventListener("click", submitContactForm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;