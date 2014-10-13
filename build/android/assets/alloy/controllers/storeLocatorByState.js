<<<<<<< HEAD
function __processArg(e,t){var i=null;return e&&(i=e[t]||null,delete e[t]),i}function Controller(){function e(e){for(var o=[],r=Titanium.UI.createTableView({width:"100%",separatorColor:"#ffffff",backgroundColor:"#FFFFFF"}),a=0;a<e.length;a++){var l=Titanium.UI.createTableViewRow({layout:"vertical",touchEnabled:!0,id:e[a].id,backgroundColor:"#FFFFFF"}),_=i.UI.create("Label",{text:e[a].outlet,id:e[a].id,color:"#848484",font:{fontSize:18},width:"auto",textAlign:"left",left:20});if(""!=e[a].address)var s=Titanium.UI.createLabel({text:e[a].address,id:e[a].id,font:{fontSize:12},width:"auto",color:"#848484",textAlign:"left",left:20});var n=Titanium.UI.createView({layout:"horizontal",height:80,width:"100%"}),d=Titanium.UI.createView({layout:"vertical",width:"80%"});""==e[a].mobile&&(e[a].mobile="-");var c=Titanium.UI.createLabel({text:"TEL: "+e[a].mobile,id:e[a].id,font:{fontSize:12},width:"auto",color:"#848484",textAlign:"left",left:20});""==e[a].fax&&(e[a].fax="-");var u=Titanium.UI.createLabel({text:"FAX: "+e[a].fax,id:e[a].id,font:{fontSize:12},width:"auto",color:"#848484",textAlign:"left",left:20});(""==e[a].email||null==e[a].email)&&(e[a].email="-");var h=Titanium.UI.createLabel({text:"E-mail: "+e[a].email,id:e[a].id,font:{fontSize:12},width:"auto",color:"#848484",textAlign:"left",left:20});(""==e[a].website||null==e[a].website)&&(e[a].website="-");var w=Titanium.UI.createLabel({text:"Website: "+e[a].website,id:e[a].id,font:{fontSize:12},width:"auto",color:"#848484",textAlign:"left",left:20});switch(e[a].category){case 1:var I="Branches";break;case 2:var I="Stockists";break;case 3:var I="Dealers"}Titanium.UI.createLabel({text:I,id:e[a].id,font:{fontSize:12},width:"auto",color:"#848484",textAlign:"left",left:20});var v=Titanium.UI.createImageView({image:"/images/icon_store.png",width:40,height:40,right:20}),y=Titanium.UI.createImageView({width:Titanium.UI.FILL,height:30,bottom:-1,touchEnabled:!1,image:"/images/scroll_up.png"});l.add(_),""!=e[a].address&&l.add(s),d.add(c),d.add(u),d.add(h),d.add(w),n.add(d),n.add(v),l.add(n),a<e.length-1&&l.add(y),o.push(l)}r.setData(o),t(r),i.tableContainer.add(r)}function t(e){e.addEventListener("click",function(){NavigateTo("3.100118","101.686962")})}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="storeLocatorByState",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,o={};i.__views.storeLocatorByState=Ti.UI.createView({layout:"vertical",backgroundColor:"white",id:"storeLocatorByState"}),i.__views.storeLocatorByState&&i.addTopLevelView(i.__views.storeLocatorByState),i.__views.__alloyId73=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId73"}),i.__views.storeLocatorByState.add(i.__views.__alloyId73),i.__views.__alloyId74=Alloy.createController("toggle",{id:"__alloyId74",__parentSymbol:i.__views.__alloyId73}),i.__views.__alloyId74.setParent(i.__views.__alloyId73),i.__views.stateName=Ti.UI.createLabel({width:"75%",height:Ti.UI.SIZE,color:"black",font:{fontSize:28},id:"stateName",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER}),i.__views.__alloyId73.add(i.__views.stateName),i.__views.tableContainer=Ti.UI.createView({backgroundColor:"white",id:"tableContainer",height:"auto"}),i.__views.storeLocatorByState.add(i.__views.tableContainer),o.destroy=function(){},_.extend(i,i.__views);var r=arguments[0]||{},a=r.state,l=Alloy.createCollection("storeLocator"),s=l.getStoreByState(a);console.log(s),e(s),i.stateName.text=a,NavigateTo=function(e,t){var i="waze://?ll="+e+","+t+"&navigate=yes";if(Ti.Android)try{Ti.API.info("Trying to Launch via Intent");var r=Ti.Android.createIntent({action:Ti.Android.ACTION_VIEW,data:i});Ti.Android.currentActivity.startActivity(r)}catch(a){Ti.API.info("Caught Error launching intent: "+a),o.Install()}else Ti.Platform.canOpenURL(i)?Ti.Platform.openURL(i):o.Install()},_.extend(i,o)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function Controller() {
    function generateStoreTable(details) {
        var data = [];
        var TheTable = Titanium.UI.createTableView({
            width: "100%",
            backgroundColor: "#fffff6"
        });
        for (var i = 0; details.length > i; i++) {
            var row = Titanium.UI.createTableViewRow({
                layout: "vertical",
                touchEnabled: true,
                id: details[i].id,
                backgroundSelectedColor: "#FFE1E1",
                backgroundColor: "#FFFFFF"
            });
            var outlet_name = $.UI.create("Label", {
                text: details[i].outlet,
                id: details[i].id,
                color: "#848484",
                font: {
                    fontSize: 18
                },
                width: "auto",
                textAlign: "left",
                left: 20
            });
            if ("" != details[i].area) var location = Titanium.UI.createLabel({
                text: details[i].area,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            "" == details[i].mobile && (details[i].mobile = "-");
            var infoViewContainer = Titanium.UI.createView({
                layout: "horizontal",
                height: 60,
                width: "100%"
            });
            var infoView = Titanium.UI.createView({
                layout: "vertical",
                width: "80%"
            });
            var mobile = Titanium.UI.createLabel({
                text: "TEL: " + details[i].mobile,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            "" == details[i].fax && (details[i].fax = "-");
            var fax = Titanium.UI.createLabel({
                text: "FAX: " + details[i].fax,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
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
            var cateType = Titanium.UI.createLabel({
                text: categoryName,
                id: details[i].id,
                font: {
                    fontSize: 12
                },
                width: "auto",
                color: "#848484",
                textAlign: "left",
                left: 20
            });
            var rightForwardBtn = Titanium.UI.createImageView({
                image: "/images/icon_store.png",
                width: 40,
                height: 40,
                right: 20
            });
            var separator = Titanium.UI.createImageView({
                left: 0,
                bottom: 0,
                width: Titanium.UI.FILL,
                height: 30,
                touchEnabled: false,
                image: "/images/scroll_up.png"
            });
            row.add(outlet_name);
            "" != details[i].area && row.add(location);
            infoView.add(mobile);
            infoView.add(fax);
            infoView.add(cateType);
            infoViewContainer.add(infoView);
            infoViewContainer.add(rightForwardBtn);
            row.add(infoViewContainer);
            details.length - 1 > i && row.add(separator);
            data.push(row);
        }
        TheTable.setData(data);
        addClickEvent(TheTable);
        $.tableContainer.add(TheTable);
    }
    function addClickEvent(table) {
        table.addEventListener("click", function() {
            NavigateTo("3.100118", "101.686962");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "storeLocatorByState";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tableContainer = Ti.UI.createView({
        backgroundColor: "white",
        id: "tableContainer",
        height: "auto"
    });
    $.__views.tableContainer && $.addTopLevelView($.__views.tableContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var state = args.state;
    var library = Alloy.createCollection("storeLocator");
    var details = library.getStoreByState(state);
    console.log(details);
    generateStoreTable(details);
    NavigateTo = function(latitude, longitude) {
        var url = "waze://?ll=" + latitude + "," + longitude + "&navigate=yes";
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
