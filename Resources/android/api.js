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

var getCategoryList = "http://" + API_DOMAIN + "/api/getCategoryList?user=" + USER + "&key=" + KEY;

var getColourList = "http://" + API_DOMAIN + "/api/getColourList?user=" + USER + "&key=" + KEY;

exports.sendContactMsg = "http://" + API_DOMAIN + "/api/sendMessage?user=" + USER + "&key=" + KEY;

exports.forgotPassword = "http://" + API_DOMAIN + "/api/doForgotPassword?user=" + USER + "&key=" + KEY;

exports.loadColour = function() {
    var url = getColourList;
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var res = JSON.parse(this.responseText);
            if ("success" == res.status) {
                var checker = Alloy.createCollection("updateChecker");
                var isUpdate = checker.getCheckerById("4");
                if ("" == isUpdate || res.last_updated != isUpdate.updated) {
                    checker.updateModule("4", "colour", res.last_updated);
                    var library = Alloy.createCollection("colour");
                    library.resetColour();
                    var arr = res.data;
                    library.addColours(arr);
                }
                Ti.App.Properties.setString("loadColour", "1");
                console.log("color finish");
            }
        },
        onerror: function() {
            Ti.App.Properties.setString("loadColour", "1");
        },
        timeout: 1e4
    });
    client.open("GET", url);
    client.send();
};

exports.loadCategory = function() {
    var url = getCategoryList;
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var res = JSON.parse(this.responseText);
            if ("success" == res.status) {
                var checker = Alloy.createCollection("updateChecker");
                var isUpdate = checker.getCheckerById("3");
                var lib_type = Alloy.createCollection("type");
                lib_type.resetType();
                var categoriestypes = res.type;
                var typePriority = 1;
                categoriestypes.forEach(function(catetypes) {
                    var category_type = Alloy.createModel("type", {
                        id: typePriority,
                        ctype: catetypes.type
                    });
                    console.log(catetypes.type);
                    category_type.save();
                    typePriority++;
                });
                if ("" == isUpdate || res.last_updated != isUpdate.updated) {
                    checker.updateModule("3", "category", res.last_updated);
                    var lib_cate = Alloy.createCollection("category");
                    var lib_type = Alloy.createCollection("category_type");
                    var lib_colour = Alloy.createCollection("category_colour");
                    lib_cate.resetCategory();
                    lib_type.resetCategoryType();
                    lib_colour.resetCategoryColour();
                    var arr = res.data;
                    arr.forEach(function(entry) {
                        var product_category = Alloy.createModel("category", {
                            id: entry.id,
                            name: entry.name,
                            type: entry.type,
                            position: entry.position,
                            image: entry.image,
                            description: entry.description
                        });
                        product_category.save();
                        var categories = entry.arr_category;
                        categories.forEach(function(category) {
                            var category_type = Alloy.createModel("category_type", {
                                cate_id: entry.id,
                                tag: category
                            });
                            category_type.save();
                        });
                        var colours = entry.arr_colour;
                        colours.forEach(function(colour) {
                            var category_colour = Alloy.createModel("category_colour", {
                                cate_id: entry.id,
                                colour_id: colour,
                                type: entry.type
                            });
                            category_colour.save();
                        });
                    });
                }
                Ti.App.Properties.setString("loadCategory", "1");
            }
        },
        onerror: function() {
            Ti.App.Properties.setString("loadCategory", "1");
        },
        timeout: 1e4
    });
    client.open("GET", url);
    client.send();
};

exports.loadBrochure = function() {
    var url = getBrochureList;
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            var res = JSON.parse(this.responseText);
            if ("success" == res.status) {
                var checker = Alloy.createCollection("updateChecker");
                var isUpdate = checker.getCheckerById("2");
                if ("" == isUpdate || res.last_updated != isUpdate.updated) {
                    checker.updateModule("2", "brochure", res.last_updated);
                    var library = Alloy.createCollection("brochure");
                    library.resetBrochure();
                    var arr = res.data;
                    arr.forEach(function(entry) {
                        library.addBrochure(entry.b_position, entry.b_title, entry.cover, entry.attachment, entry.b_url, entry.b_status, entry.b_format);
                    });
                }
                Ti.App.Properties.setString("loadBrochure", "1");
            }
        },
        onerror: function() {
            Ti.App.Properties.setString("loadBrochure", "1");
        },
        timeout: 1e4
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
                var checker = Alloy.createCollection("updateChecker");
                var isUpdate = checker.getCheckerById("1");
                if ("" == isUpdate || res.last_updated != isUpdate.updated) {
                    checker.updateModule("1", "storeLocator", res.last_updated);
                    var library = Alloy.createCollection("storeLocator");
                    library.resetStore();
                    var arr = res.data;
                    library.addStores(arr);
                }
                Ti.App.Properties.setString("loadStoreLocator", "1");
            }
        },
        onerror: function() {
            Ti.App.Properties.setString("loadStoreLocator", "1");
        },
        timeout: 1e4
    });
    client.open("GET", url);
    client.send();
};