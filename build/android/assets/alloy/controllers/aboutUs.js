<<<<<<< HEAD
function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="aboutUs",arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var t=this,e={},i={};t.__views.aboutUs=Ti.UI.createView({backgroundColor:"white",layout:"vertical",width:Ti.UI.FILL,fullscreen:!0,top:"10",left:"10",right:"10",height:Titanium.UI.SIZE,id:"aboutUs"}),t.__views.aboutUs&&t.addTopLevelView(t.__views.aboutUs),t.__views.__alloyId0=Ti.UI.createView({layout:"horizontal",height:"80",id:"__alloyId0"}),t.__views.aboutUs.add(t.__views.__alloyId0),t.__views.__alloyId1=Alloy.createController("toggle",{id:"__alloyId1",__parentSymbol:t.__views.__alloyId0}),t.__views.__alloyId1.setParent(t.__views.__alloyId0),t.__views.__alloyId2=Ti.UI.createLabel({font:{fontSize:28},text:"About US",color:"black",width:"75%",textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,id:"__alloyId2"}),t.__views.__alloyId0.add(t.__views.__alloyId2),t.__views.__alloyId3=Ti.UI.createScrollView({layout:"vertical",height:Ti.UI.SIZE,id:"__alloyId3"}),t.__views.aboutUs.add(t.__views.__alloyId3),t.__views.main=Ti.UI.createScrollView({backgroundColor:"white",id:"main",layout:"vertical",height:"180"}),t.__views.__alloyId3.add(t.__views.main),t.__views.__alloyId4=Ti.UI.createLabel({font:{fontSize:"14"},color:"#6E6E6E",bottom:10,text:"It was in 1959 that SISSONS PAINTS (EAST) SDN BHD first started in Malaysia, although SISSONS' technology in paint making goes back 185 years when Sissons Brothers founded a company in HULL, England in 1803. SISSONS' well-known trademark of 'THE MEN AND PLANK' has been in use since 1910.",width:"75%",id:"__alloyId4"}),t.__views.main.add(t.__views.__alloyId4),t.__views.__alloyId5=Ti.UI.createView({layout:"vertical",backgroundColor:"white",height:Titanium.UI.SIZE,id:"__alloyId5"}),t.__views.__alloyId3.add(t.__views.__alloyId5),t.__views.__alloyId6=Ti.UI.createImageView({image:"/images/scroll_up.png",backgroundColor:"#white",width:Titanium.UI.FILL,id:"__alloyId6"}),t.__views.__alloyId5.add(t.__views.__alloyId6),t.__views.__alloyId7=Ti.UI.createLabel({font:{fontSize:28},text:"Email",color:"black",bottom:"10",width:"75%",textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,id:"__alloyId7"}),t.__views.__alloyId5.add(t.__views.__alloyId7),t.__views.__alloyId8=Ti.UI.createView({layout:"horizontal",height:"40",top:"10",width:"80%",horizontalWrap:"true",id:"__alloyId8"}),t.__views.__alloyId5.add(t.__views.__alloyId8),t.__views.__alloyId9=Ti.UI.createLabel({font:{fontSize:"14"},color:"#6E6E6E",left:"10",textAlign:"left",right:"10",text:"Name",width:"20%",id:"__alloyId9"}),t.__views.__alloyId8.add(t.__views.__alloyId9),t.__views.name=Ti.UI.createTextField({color:"#848484",borderColor:"#BDBDBD",textAlign:"center",height:40,keyboardType:Titanium.UI.KEYBOARD_DEFAULT,returnKeyType:Titanium.UI.RETURNKEY_NEXT,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,id:"name",width:"70%"}),t.__views.__alloyId8.add(t.__views.name),t.__views.__alloyId10=Ti.UI.createView({layout:"horizontal",height:"40",top:"10",width:"80%",horizontalWrap:"true",id:"__alloyId10"}),t.__views.__alloyId5.add(t.__views.__alloyId10),t.__views.__alloyId11=Ti.UI.createLabel({font:{fontSize:"14"},color:"#6E6E6E",left:"10",textAlign:"left",right:"10",text:"Email",width:"20%",id:"__alloyId11"}),t.__views.__alloyId10.add(t.__views.__alloyId11),t.__views.email=Ti.UI.createTextField({color:"#848484",borderColor:"#BDBDBD",textAlign:"center",height:40,keyboardType:Titanium.UI.KEYBOARD_DEFAULT,returnKeyType:Titanium.UI.RETURNKEY_NEXT,clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,id:"email",width:"70%"}),t.__views.__alloyId10.add(t.__views.email),t.__views.__alloyId12=Ti.UI.createView({layout:"horizontal",height:"100",top:"10",width:"80%",horizontalWrap:"true",id:"__alloyId12"}),t.__views.__alloyId5.add(t.__views.__alloyId12),t.__views.__alloyId13=Ti.UI.createLabel({font:{fontSize:"14"},color:"#6E6E6E",left:"10",textAlign:"left",right:"10",text:"Message",width:"20%",top:"0",id:"__alloyId13"}),t.__views.__alloyId12.add(t.__views.__alloyId13),t.__views.message=Ti.UI.createTextArea({id:"message",color:"#888",textAlign:"left",width:"70%",height:"100"}),t.__views.__alloyId12.add(t.__views.message),t.__views.__alloyId14=Ti.UI.createView({backgroundColor:"white",height:"60",bottom:"0",id:"__alloyId14"}),t.__views.aboutUs.add(t.__views.__alloyId14),t.__views.__alloyId15=Ti.UI.createImageView({image:"/images/tool_bar.jpg",height:"60",width:Titanium.UI.FILL,id:"__alloyId15"}),t.__views.__alloyId14.add(t.__views.__alloyId15),t.__views.contactButton=Ti.UI.createImageView({id:"contactButton",image:"/images/icon_email.png",height:"40"}),t.__views.__alloyId14.add(t.__views.contactButton),o?t.__views.contactButton.addEventListener("click",o):i["$.__views.contactButton!click!submitContactForm"]=!0,e.destroy=function(){},_.extend(t,t.__views),arguments[0]||{};var r=require("api"),s=require("common"),o=function(){var e=t.username.value,i=t.phone.value,o=t.email.value,n=t.message.value;if(""==e)return void s.createAlert("Request Rejected","Full name cannot be empty.");if(""==o)return void s.createAlert("Request Rejected","Email cannot be empty.");if(""==n)return void s.createAlert("Request Rejected","Message cannot be empty.");var a=r.sendContactMsg+"&name="+e+"&email="+o+"&contact="+i+"&message="+n,l=Ti.Network.createHTTPClient({onload:function(){var e=JSON.parse(this.responseText);"success"==e.status&&(s.createAlert("Message Sent","Your messages successfully sent to admin."),t.username.value="",t.phone.value="",t.email.value="",t.message.value="")},onerror:function(){s.createAlert("Network declined","Failed to contact with server. Please make sure your device are connected to internet.")},timeout:5e3});l.open("GET",a),l.send()};i["$.__views.contactButton!click!submitContactForm"]&&t.__views.contactButton.addEventListener("click",o),_.extend(t,e)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;
=======
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "aboutUs";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.aboutUs = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "vertical",
        width: Ti.UI.FILL,
        fullscreen: true,
        top: "10",
        left: "10",
        right: "10",
        height: Titanium.UI.SIZE,
        id: "aboutUs"
    });
    $.__views.aboutUs && $.addTopLevelView($.__views.aboutUs);
    $.__views.main = Ti.UI.createScrollView({
        backgroundColor: "white",
        id: "main",
        layout: "vertical",
        height: "240"
    });
    $.__views.aboutUs.add($.__views.main);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontSize: 28
        },
        text: "About US",
        color: "black",
        bottom: "20",
        width: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId0"
    });
    $.__views.main.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "#6E6E6E",
        bottom: 10,
        text: "It was in 1959 that SISSONS PAINTS (EAST) SDN BHD first started in Malaysia, although SISSONS' technology in paint making goes back 185 years when Sissons Brothers founded a company in HULL, England in 1803. SISSONS' well-known trademark of 'THE MEN AND PLANK' has been in use since 1910.",
        width: "75%",
        id: "__alloyId1"
    });
    $.__views.main.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "white",
        height: Titanium.UI.SIZE,
        id: "__alloyId2"
    });
    $.__views.aboutUs.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createImageView({
        image: "/images/scroll_up.png",
        backgroundColor: "#white",
        width: Titanium.UI.FILL,
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {
            fontSize: 28
        },
        text: "Email",
        color: "black",
        bottom: "10",
        width: "75%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "horizontal",
        height: "40",
        top: "10",
        width: "80%",
        horizontalWrap: "true",
        id: "__alloyId5"
    });
    $.__views.__alloyId2.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "#6E6E6E",
        left: "10",
        textAlign: "left",
        right: "10",
        text: "Name",
        width: "20%",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.name = Ti.UI.createTextField({
        color: "#848484",
        borderColor: "#BDBDBD",
        textAlign: "center",
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "name",
        width: "70%"
    });
    $.__views.__alloyId5.add($.__views.name);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "horizontal",
        height: "40",
        top: "10",
        width: "80%",
        horizontalWrap: "true",
        id: "__alloyId7"
    });
    $.__views.__alloyId2.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "#6E6E6E",
        left: "10",
        textAlign: "left",
        right: "10",
        text: "Email",
        width: "20%",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.email = Ti.UI.createTextField({
        color: "#848484",
        borderColor: "#BDBDBD",
        textAlign: "center",
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        id: "email",
        width: "70%"
    });
    $.__views.__alloyId7.add($.__views.email);
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "horizontal",
        height: "100",
        top: "10",
        width: "80%",
        horizontalWrap: "true",
        id: "__alloyId9"
    });
    $.__views.__alloyId2.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        font: {
            fontSize: "14"
        },
        color: "#6E6E6E",
        left: "10",
        textAlign: "left",
        right: "10",
        text: "Message",
        width: "20%",
        top: "0",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.message = Ti.UI.createTextArea({
        id: "message",
        color: "#888",
        textAlign: "left",
        width: "70%",
        height: "100"
    });
    $.__views.__alloyId9.add($.__views.message);
    $.__views.__alloyId11 = Ti.UI.createView({
        backgroundColor: "white",
        height: "60",
        id: "__alloyId11"
    });
    $.__views.__alloyId2.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        image: "/images/tool_bar.jpg",
        height: "60",
        width: Titanium.UI.FILL,
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.contactButton = Ti.UI.createImageView({
        id: "contactButton",
        image: "/images/icon_email.png",
        height: "40"
    });
    $.__views.__alloyId11.add($.__views.contactButton);
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
>>>>>>> FETCH_HEAD
