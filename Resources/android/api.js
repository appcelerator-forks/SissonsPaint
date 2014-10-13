function onErrorCallback(e) {
    var common = require("common");
    common.createAlert("Error", e);
}

var API_DOMAIN = "sissons.playlab.com.my/";

var XHR = require("xhr");

var xhr = new XHR();

var USER = "mobile";

var KEY = "06b53047cf294f7207789ff5293ad2dc";

var getStoreLocatorList = "http://" + API_DOMAIN + "/api/getStore?user=" + USER + "&key=" + KEY;

var getBrochureList = "http://" + API_DOMAIN + "/api/getBrochure?user=" + USER + "&key=" + KEY;

var getColourList = "http://" + API_DOMAIN + "/api/getColourList?user=" + USER + "&key=" + KEY;

exports.sendContactMsg = "http://" + API_DOMAIN + "/api/sendMessage?user=" + USER + "&key=" + KEY;

exports.forgotPassword = "http://" + API_DOMAIN + "/api/doForgotPassword?user=" + USER + "&key=" + KEY;

exports.loadColour = function() {
    var url = getBrochureList;
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var res = JSON.parse(this.responseText);
            if ("success" == res.status) {
                var library = Alloy.createCollection("colour");
                library.resetColour();
                var arr = res.data;
                arr.forEach(function(entry) {
                    var colour = Alloy.createModel("colour", {
                        id: entry.id,
                        name: entry.name,
                        code: entry.code,
                        rgb: entry.rgb,
                        cmyk: entry.cmyk,
                        sample: entry.sample
                    });
                    colour.save();
                });
            }
        },
        onerror: function() {},
        timeout: 5e4
    });
    client.open("GET", url);
    client.send();
};

exports.loadCategory = function() {};

exports.loadBrochure = function() {
    var url = getBrochureList;
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            console.log("ready ");
            var res = JSON.parse(this.responseText);
            if ("success" == res.status) {
                var library = Alloy.createCollection("brochure");
                library.resetBrochure();
                var arr = res.data;
                arr.forEach(function(entry) {
                    var brochure = Alloy.createModel("brochure", {
                        id: entry.b_id,
                        title: entry.b_title,
                        cover: entry.cover,
                        content: entry.attachment,
                        status: entry.b_status,
                        format: entry.b_format
                    });
                    brochure.save();
                });
                console.log("saved brochure done");
            }
        },
        onerror: function() {},
        timeout: 5e4
    });
    client.open("GET", url);
    client.send();
};

exports.loadStoreLocator = function() {
    var url = getStoreLocatorList;
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var res = JSON.parse(this.responseText);
            if ("success" == res.status) {
                var library = Alloy.createCollection("storeLocator");
                library.resetStore();
                var arr = res.data;
                arr.forEach(function(entry) {
                    var storeLocator = Alloy.createModel("storeLocator", {
                        id: entry.f_id,
                        outlet: entry.f_outlet,
                        area: entry.f_area,
                        state: entry.f_state,
                        address: entry.f_address,
                        mobile: entry.f_mobile,
                        fax: entry.f_fax,
                        latitude: entry.f_lat,
                        longitude: entry.f_lng,
                        category: entry.f_category
                    });
                    storeLocator.save();
                });
            }
        },
        onerror: function() {},
        timeout: 5e4
    });
    client.open("GET", url);
    client.send();
};