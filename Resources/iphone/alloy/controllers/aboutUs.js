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
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.aboutUs = Ti.UI.createView({
        backgroundColor: "#FFFFFF",
        layout: "vertical",
        width: Ti.UI.FILL,
        fullscreen: true,
        top: "10",
        left: "10",
        bottom: "10",
        right: "10",
        id: "aboutUs"
    });
    $.__views.aboutUs && $.addTopLevelView($.__views.aboutUs);
    $.__views.main = Ti.UI.createScrollView({
        id: "main",
        layout: "vertical"
    });
    $.__views.aboutUs.add($.__views.main);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontSize: "18"
        },
        color: "#6E6E6E",
        bottom: 10,
        text: "It was in 1959 that SISSONS PAINTS (EAST) SDN BHD first started in Malaysia, although SISSONS' technology in paint making goes back 185 years when Sissons Brothers founded a company in HULL, England in 1803. SISSONS' well-known trademark of 'THE MEN AND PLANK' has been in use since 1910.",
        id: "__alloyId0"
    });
    $.__views.main.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "1",
        backgroundColor: "#6E6E6E",
        id: "__alloyId1"
    });
    $.__views.main.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        font: {
            fontSize: "18"
        },
        color: "#CC2228",
        left: "10",
        right: "10",
        text: "Contact Information:",
        bottom: "5",
        id: "__alloyId2"
    });
    $.__views.main.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "horizontal",
        height: "25",
        id: "__alloyId3"
    });
    $.__views.main.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "#6E6E6E",
        left: "10",
        textAlign: "left",
        right: "10",
        text: "Tel: +603-7727 6697",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "#6E6E6E",
        left: "10",
        textAlign: "left",
        right: "10",
        text: "Fax: +603-7726 9299",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: "25",
        bottom: "10",
        id: "__alloyId6"
    });
    $.__views.main.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "#6E6E6E",
        left: "10",
        textAlign: "left",
        right: "10",
        text: "mktg.bsp@boustead.com.my",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.formScrollView = Ti.UI.createScrollView({
        layout: "vertical",
        showVerticalScrollIndicator: "true",
        id: "formScrollView",
        showHorizontalScrollIndicator: "true",
        height: "300",
        width: "100%",
        backgroundColor: "#848484"
    });
    $.__views.main.add($.__views.formScrollView);
    $.__views.username = Ti.UI.createTextField({
        color: "#848484",
        width: "80%",
        borderColor: "#BDBDBD",
        textAlign: "center",
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "username",
        top: "10",
        hintText: "Enter Your Name"
    });
    $.__views.formScrollView.add($.__views.username);
    $.__views.phone = Ti.UI.createTextField({
        color: "#848484",
        width: "80%",
        borderColor: "#BDBDBD",
        textAlign: "center",
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "phone",
        hintText: "Enter Your Phone Number"
    });
    $.__views.formScrollView.add($.__views.phone);
    $.__views.email = Ti.UI.createTextField({
        color: "#848484",
        width: "80%",
        borderColor: "#BDBDBD",
        textAlign: "center",
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "email",
        hintText: "Enter Your Email"
    });
    $.__views.formScrollView.add($.__views.email);
    $.__views.message = Ti.UI.createTextArea({
        id: "message",
        borderRadius: "2",
        color: "#888",
        textAlign: "left",
        hintText: "Leave your message here",
        width: "80%",
        height: "100"
    });
    $.__views.formScrollView.add($.__views.message);
    $.__views.contactButton = Ti.UI.createButton({
        id: "contactButton",
        borderRadius: "3",
        backgroundColor: "#ffffff",
        title: "Submit",
        width: "80%",
        top: "20",
        height: "40",
        color: "#807C7C"
    });
    $.__views.formScrollView.add($.__views.contactButton);
    submitContactForm ? $.__views.contactButton.addEventListener("click", submitContactForm) : __defers["$.__views.contactButton!click!submitContactForm"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var API = require("api");
    var COMM = require("common");
    var submitContactForm = function() {
        var name = $.username.value;
        var contact = $.phone.value;
        var email = $.email.value;
        var message = $.message.value;
        if ("" == name) {
            COMM.createAlert("Request Rejected", "Full name cannot be empty.");
            return;
        }
        if ("" == email) {
            COMM.createAlert("Request Rejected", "Email cannot be empty.");
            return;
        }
        if ("" == message) {
            COMM.createAlert("Request Rejected", "Message cannot be empty.");
            return;
        }
        var url = API.sendContactMsg + "&name=" + name + "&email=" + email + "&contact=" + contact + "&message=" + message;
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var res = JSON.parse(this.responseText);
                if ("success" == res.status) {
                    COMM.createAlert("Message Sent", "Your messages successfully sent to admin.");
                    $.username.value = "";
                    $.phone.value = "";
                    $.email.value = "";
                    $.message.value = "";
                }
            },
            onerror: function() {
                COMM.createAlert("Network declined", "Failed to contact with server. Please make sure your device are connected to internet.");
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    };
    __defers["$.__views.contactButton!click!submitContactForm"] && $.__views.contactButton.addEventListener("click", submitContactForm);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;