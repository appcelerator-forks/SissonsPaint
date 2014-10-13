<<<<<<< HEAD
function S4(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function guid(){return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()}function Sync(e,t,i){var o=t.config.adapter.collection_name?t.config.adapter.collection_name:"default",r=new RegExp("^("+o+")\\-(.+)$"),l=null;if("read"===e)if(i.parse){var a=[];_.each(TAP.listProperties(),function(e){var t=e.match(r);null!==t&&a.push(TAP.getObject(e))}),l=a}else{var s=TAP.getObject(o+"-"+t.id);t.set(s),l=t.toJSON()}else"create"===e||"update"===e?(t.id||(t.id=guid(),t.set(t.idAttribute,t.id)),TAP.setObject(o+"-"+t.id,t.toJSON()||{}),l=t.toJSON()):"delete"===e&&(TAP.removeProperty(o+"-"+t.id),t.clear(),l=t.toJSON());l?(_.isFunction(i.success)&&i.success(l),"read"===e&&t.trigger("fetch")):_.isFunction(i.error)&&i.error(l)}var Alloy=require("alloy"),_=require("alloy/underscore")._,TAP=Ti.App.Properties;module.exports.sync=Sync,module.exports.beforeModelCreate=function(e){return e=e||{},e.columns=e.columns||{},e.defaults=e.defaults||{},("undefined"==typeof e.columns.id||null===e.columns.id)&&(e.columns.id="String"),e};
=======
function S4() {
    return (0 | 65536 * (1 + Math.random())).toString(16).substring(1);
}

function guid() {
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}

function Sync(method, model, opts) {
    var prefix = model.config.adapter.collection_name ? model.config.adapter.collection_name : "default";
    var regex = new RegExp("^(" + prefix + ")\\-(.+)$");
    var resp = null;
    if ("read" === method) if (opts.parse) {
        var list = [];
        _.each(TAP.listProperties(), function(prop) {
            var match = prop.match(regex);
            null !== match && list.push(TAP.getObject(prop));
        });
        resp = list;
    } else {
        var obj = TAP.getObject(prefix + "-" + model.id);
        model.set(obj);
        resp = model.toJSON();
    } else if ("create" === method || "update" === method) {
        if (!model.id) {
            model.id = guid();
            model.set(model.idAttribute, model.id);
        }
        TAP.setObject(prefix + "-" + model.id, model.toJSON() || {});
        resp = model.toJSON();
    } else if ("delete" === method) {
        TAP.removeProperty(prefix + "-" + model.id);
        model.clear();
        resp = model.toJSON();
    }
    if (resp) {
        _.isFunction(opts.success) && opts.success(resp);
        "read" === method && model.trigger("fetch");
    } else _.isFunction(opts.error) && opts.error(resp);
}

var Alloy = require("alloy"), _ = require("alloy/underscore")._, TAP = Ti.App.Properties;

module.exports.sync = Sync;

module.exports.beforeModelCreate = function(config) {
    config = config || {};
    config.columns = config.columns || {};
    config.defaults = config.defaults || {};
    ("undefined" == typeof config.columns.id || null === config.columns.id) && (config.columns.id = "String");
    return config;
};
>>>>>>> FETCH_HEAD
