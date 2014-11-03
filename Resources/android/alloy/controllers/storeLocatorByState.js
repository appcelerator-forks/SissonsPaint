<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){for(var i=[],o=Titanium.UI.createTableView({width:"100%",separatorColor:"#ffffff",backgroundColor:"#FFFFFF",overScrollMode:Titanium.UI.Android.OVER_SCROLL_NEVER}),a=0;a<e.length;a++){var l=Titanium.UI.createTableViewRow({layout:"vertical",touchEnabled:!1,selectedBackgroundColor:"transparent",id:e[a].id,backgroundColor:"#FFFFFF"}),r=t.UI.create("Label",{text:e[a].outlet,id:e[a].id,color:"black",font:{fontSize:22},width:"auto",textAlign:"left",left:20,bottom:10});if(""!=e[a].address)var n=Titanium.UI.createLabel({text:e[a].address,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20,bottom:10});var _=Titanium.UI.createView({layout:"horizontal",width:"100%"}),s=Titanium.UI.createView({layout:"vertical",width:"80%"});""==e[a].mobile&&(e[a].mobile="-");var d=Titanium.UI.createLabel({text:"TEL: "+e[a].mobile,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==e[a].fax||null==e[a].fax);else var c=Titanium.UI.createLabel({text:"FAX: "+e[a].fax,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20});if(""==e[a].email||null==e[a].email);else{console.log("email"+e[a].email),console.log("email length"+e[a].email.length);var h=Titanium.UI.createLabel({text:"E-mail: "+e[a].email,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20})}switch(e[a].category){case 1:var u="Branches";break;case 2:var u="Stockists";break;case 3:var u="Dealers"}Titanium.UI.createLabel({text:u,id:e[a].id,width:"auto",color:"#848484",textAlign:"left",left:20});var w=Titanium.UI.createImageView({image:"/images/icon_store.png",width:40,height:40,right:20,zIndex:a});w.addEventListener("click",function(t){console.log("right button pressed"),console.log("outlet: "+e[t.source.zIndex].outlet),console.log("address: "+e[t.source.zIndex].address),""==e[t.source.zIndex].latitude||""==e[t.source.zIndex].longitude?(NavigateTo(0,0,e[t.source.zIndex].outlet,e[t.source.zIndex].address),console.log("null")):(NavigateTo(e[t.source.zIndex].latitude,e[t.source.zIndex].longitude,e[t.source.zIndex].outlet,e[t.source.zIndex].address),console.log("latitude: "+e[t.source.zIndex].latitude),console.log("longitude: "+e[t.source.zIndex].longitude),console.log("!null"))});var v=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,touchEnabled:!1,image:"/images/scroll_up.png"});a>0&&l.add(v),l.add(r),""!=e[a].address&&s.add(n),s.add(d),""==e[a].fax||null==e[a].fax||s.add(c),""==e[a].email||null==e[a].email||s.add(h),_.add(s),_.add(w),l.add(_),i.push(l)}o.setData(i),t.tableContainer.add(o)}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocatorByState",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,i={};t.__views.storeLocatorByState=Ti.UI.createView({layout:"vertical",backgroundColor:"white",id:"storeLocatorByState"}),t.__views.storeLocatorByState&&t.addTopLevelView(t.__views.storeLocatorByState),t.__views.__alloyId96=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId96"}),t.__views.storeLocatorByState.add(t.__views.__alloyId96),t.__views.__alloyId97=Alloy.createController("toggle",{id:"__alloyId97",__parentSymbol:t.__views.__alloyId96}),t.__views.__alloyId97.setParent(t.__views.__alloyId96),t.__views.stateName=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:22},id:"stateName",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),t.__views.__alloyId96.add(t.__views.stateName),t.__views.tableContainer=Ti.UI.createView({backgroundColor:"white",id:"tableContainer",height:"auto"}),t.__views.storeLocatorByState.add(t.__views.tableContainer),i.destroy=function(){},_.extend(t,t.__views);var o=arguments[0]||{},a=o.state;Ti.App.Properties.setString("module","storeLocator");var l=Alloy.createCollection("storeLocator"),r=l.getStoreByState(a);e(r),t.stateName.text=a,NavigateTo=function(e,t,o,a){var l="geo:"+e+","+t+"?q="+o+" ("+a+")";if(Ti.Android)try{Ti.API.info("Trying to Launch via Intent");var r=Ti.Android.createIntent({action:Ti.Android.ACTION_VIEW,data:l});Ti.Android.currentActivity.startActivity(r)}catch(n){Ti.API.info("Caught Error launching intent: "+n),i.Install()}else Ti.Platform.canOpenURL(l)?Ti.Platform.openURL(l):i.Install()},_.extend(t,i)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function generateStoreTable(details) {
        var data = [];
        var TheTable = Titanium.UI.createTableView({
            width: "100%",
            separatorColor: "#ffffff",
            backgroundColor: "#FFFFFF",
            overScrollMode: Titanium.UI.Android.OVER_SCROLL_NEVER
        });
        for (var i = 0; i < details.length; i++) {
            var row = Titanium.UI.createTableViewRow({
                layout: "vertical",
                touchEnabled: false,
                selectedBackgroundColor: "transparent",
                id: details[i].id,
                backgroundColor: "#FFFFFF"
            });
            var outlet_name = $.UI.create("Label", {
                text: details[i].outlet,
                id: details[i].id,
                color: "black",
                font: {
                    fontSize: 22
                },
                width: "auto",
                textAlign: "left",
                left: 20,
                bottom: 10
            });
            if ("" != details[i].address) var location = Titanium.UI.createLabel({
                text: details[i].address,
                id: details[i].id,
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20,
                bottom: 10
            });
            var infoViewContainer = Titanium.UI.createView({
                layout: "horizontal",
                width: "100%"
            });
            var infoView = Titanium.UI.createView({
                layout: "vertical",
                width: "80%"
            });
            "" == details[i].mobile && (details[i].mobile = "-");
            var mobile = Titanium.UI.createLabel({
                text: "TEL: " + details[i].mobile,
                id: details[i].id,
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            if ("" == details[i].fax || null == details[i].fax) ; else var fax = Titanium.UI.createLabel({
                text: "FAX: " + details[i].fax,
                id: details[i].id,
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            if ("" == details[i].email || null == details[i].email) ; else {
                console.log("email" + details[i].email);
                console.log("email length" + details[i].email.length);
                var email = Titanium.UI.createLabel({
                    text: "E-mail: " + details[i].email,
                    id: details[i].id,
                    width: "auto",
                    color: "#848484",
                    textAlign: "left",
                    left: 20
                });
            }
            switch (details[i].category) {
              case 1:
                var categoryName = "Branches";
                break;

              case 2:
                var categoryName = "Stockists";
                break;

              case 3:
                var categoryName = "Dealers";
            }
            {
                Titanium.UI.createLabel({
                    text: categoryName,
                    id: details[i].id,
                    width: "auto",
                    color: "#848484",
                    textAlign: "left",
                    left: 20
                });
            }
            var rightForwardBtn = Titanium.UI.createImageView({
                image: "/images/icon_store.png",
                width: 40,
                height: 40,
                right: 20,
                zIndex: i
            });
            rightForwardBtn.addEventListener("click", function(e) {
                console.log("right button pressed");
                console.log("outlet: " + details[e.source.zIndex].outlet);
                console.log("address: " + details[e.source.zIndex].address);
                if ("" == details[e.source.zIndex].latitude || "" == details[e.source.zIndex].longitude) {
                    NavigateTo(0, 0, details[e.source.zIndex].outlet, details[e.source.zIndex].address);
                    console.log("null");
                } else {
                    NavigateTo(details[e.source.zIndex].latitude, details[e.source.zIndex].longitude, details[e.source.zIndex].outlet, details[e.source.zIndex].address);
                    console.log("latitude: " + details[e.source.zIndex].latitude);
                    console.log("longitude: " + details[e.source.zIndex].longitude);
                    console.log("!null");
                }
            });
            var separator = Titanium.UI.createImageView({
                width: Titanium.UI.FILL,
                height: 30,
                touchEnabled: false,
                image: "/images/scroll_up.png"
            });
            i > 0 && row.add(separator);
            row.add(outlet_name);
            "" != details[i].address && infoView.add(location);
            infoView.add(mobile);
            "" == details[i].fax || null == details[i].fax || infoView.add(fax);
            "" == details[i].email || null == details[i].email || infoView.add(email);
            infoViewContainer.add(infoView);
            infoViewContainer.add(rightForwardBtn);
            row.add(infoViewContainer);
            data.push(row);
        }
        var search = Titanium.UI.createSearchBar({
            barColor: "#000",
            showCancel: false,
            height: "10%",
            width: Ti.UI.SIZE,
            bottom: 0
        });
        TheTable.add(search);
        TheTable.setData(data);
        $.tableContainer.add(TheTable);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "storeLocatorByState";
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
    $.__views.storeLocatorByState = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "white",
        id: "storeLocatorByState"
    });
    $.__views.storeLocatorByState && $.addTopLevelView($.__views.storeLocatorByState);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    $.__views.__alloyId90 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId90"
    });
    $.__views.storeLocatorByState.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Alloy.createController("toggle", {
        id: "__alloyId91",
        __parentSymbol: $.__views.__alloyId90
    });
    $.__views.__alloyId91.setParent($.__views.__alloyId90);
=======
<<<<<<< HEAD
>>>>>>> FETCH_HEAD
    $.__views.__alloyId96 = Ti.UI.createView({
        layout: "horizontal",
        height: "80",
        id: "__alloyId96"
    });
    $.__views.storeLocatorByState.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Alloy.createController("toggle", {
        id: "__alloyId97",
        __parentSymbol: $.__views.__alloyId96
    });
    $.__views.__alloyId97.setParent($.__views.__alloyId96);
<<<<<<< HEAD
=======
=======
    $.__views.__alloyId95.setParent($.__views.__alloyId94);
=======
<<<<<<< HEAD
    $.__views.__alloyId87 = Ti.UI.createView({
=======
<<<<<<< HEAD
    $.__views.__alloyId86 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        layout: "horizontal",
        height: "80",
        id: "__alloyId88"
    });
    $.__views.storeLocatorByState.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Alloy.createController("toggle", {
        id: "__alloyId89",
        __parentSymbol: $.__views.__alloyId88
    });
<<<<<<< HEAD
    $.__views.__alloyId89.setParent($.__views.__alloyId88);
=======
    $.__views.__alloyId87.setParent($.__views.__alloyId86);
=======
    $.__views.__alloyId89 = Ti.UI.createView({
>>>>>>> FETCH_HEAD
        layout: "horizontal",
        height: "80",
        id: "__alloyId87"
    });
    $.__views.storeLocatorByState.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Alloy.createController("toggle", {
        id: "__alloyId88",
        __parentSymbol: $.__views.__alloyId87
    });
<<<<<<< HEAD
    $.__views.__alloyId88.setParent($.__views.__alloyId87);
=======
    $.__views.__alloyId90.setParent($.__views.__alloyId89);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    $.__views.stateName = Ti.UI.createLabel({
        width: "75%",
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 22
        },
        id: "stateName",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
<<<<<<< HEAD
    $.__views.__alloyId96.add($.__views.stateName);
=======
<<<<<<< HEAD
    $.__views.__alloyId90.add($.__views.stateName);
=======
<<<<<<< HEAD
    $.__views.__alloyId96.add($.__views.stateName);
=======
<<<<<<< HEAD
    $.__views.__alloyId88.add($.__views.stateName);
=======
<<<<<<< HEAD
    $.__views.__alloyId94.add($.__views.stateName);
=======
<<<<<<< HEAD
    $.__views.__alloyId87.add($.__views.stateName);
=======
<<<<<<< HEAD
    $.__views.__alloyId86.add($.__views.stateName);
=======
    $.__views.__alloyId89.add($.__views.stateName);
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
>>>>>>> FETCH_HEAD
    $.__views.tableContainer = Ti.UI.createView({
        backgroundColor: "white",
        id: "tableContainer"
    });
    $.__views.storeLocatorByState.add($.__views.tableContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var state = args.state;
    Ti.App.Properties.setString("module", "storeLocator");
    var library = Alloy.createCollection("storeLocator");
    var details = library.getStoreByState(state);
    generateStoreTable(details);
    $.stateName.text = state;
    NavigateTo = function(latitude, longitude, name, address) {
        var url = "geo:" + latitude + "," + longitude + "?q=" + name + " (" + address + ")";
        if (Ti.Android) try {
            Ti.API.info("Trying to Launch via Intent");
            var intent = Ti.Android.createIntent({
                action: Ti.Android.ACTION_VIEW,
                data: url
            });
            Ti.Android.currentActivity.startActivity(intent);
        } catch (e) {
            Ti.API.info("Caught Error launching intent: " + e);
            exports.Install();
        } else Ti.Platform.canOpenURL(url) ? Ti.Platform.openURL(url) : exports.Install();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
>>>>>>> FETCH_HEAD
