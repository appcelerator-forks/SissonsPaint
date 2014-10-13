<<<<<<< HEAD
function S4(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function guid(){return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()}function InitAdapter(){throw"localStorage persistence supported only with MobileWeb."}function Sync(e,t,i){function o(e){localStorage.setItem(r,JSON.stringify(e))}var r=t.config.adapter.collection_name,l=t.config.data,a=null;switch(e){case"create":t.id||(t.id=guid(),t.set(t.idAttribute,t.id)),l[t.id]=t,o(l),a=t.toJSON();break;case"read":var s=localStorage.getItem(r),n=s&&JSON.parse(s)||{},d=0;for(var c in n){var u=new t.config.Model(n[c]);t.models.push(u),d++}t.length=d,a=1===d?t.models[0]:t.models;break;case"update":l[t.id]=t,o(l),a=t.toJSON();break;case"delete":delete l[t.id],o(l),a=t.toJSON()}a?(_.isFunction(i.success)&&i.success(a),"read"===e&&t.trigger("fetch")):_.isFunction(i.error)&&i.error(a)}var _=require("alloy/underscore")._;module.exports.sync=Sync,module.exports.beforeModelCreate=function(e){return e=e||{},e.data={},InitAdapter(),e},module.exports.afterModelCreate=function(e){return e=e||{},e.prototype.config.Model=e,e};
=======
function S4() {
    return (0 | 65536 * (1 + Math.random())).toString(16).substring(1);
}

function guid() {
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}

function InitAdapter() {
    throw "localStorage persistence supported only with MobileWeb and Tizen.";
}

function Sync(method, model, opts) {
    function storeModel(data) {
        localStorage.setItem(name, JSON.stringify(data));
    }
    var name = model.config.adapter.collection_name, data = model.config.data, resp = null;
    switch (method) {
      case "create":
        if (!model.id) {
            model.id = guid();
            model.set(model.idAttribute, model.id);
        }
        data[model.id] = model;
        storeModel(data);
        resp = model.toJSON();
        break;

      case "read":
        var store = localStorage.getItem(name);
        var store_data = store && JSON.parse(store) || {};
        var len = 0;
        for (var key in store_data) {
            var m = new model.config.Model(store_data[key]);
            model.models.push(m);
            len++;
        }
        model.length = len;
        resp = 1 === len ? model.models[0] : model.models;
        break;

      case "update":
        data[model.id] = model;
        storeModel(data);
        resp = model.toJSON();
        break;

      case "delete":
        delete data[model.id];
        storeModel(data);
        resp = model.toJSON();
    }
    if (resp) {
        _.isFunction(opts.success) && opts.success(resp);
        "read" === method && model.trigger("fetch");
    } else _.isFunction(opts.error) && opts.error(resp);
}

var _ = require("alloy/underscore")._;

module.exports.sync = Sync;

module.exports.beforeModelCreate = function(config) {
    config = config || {};
    config.data = {};
    InitAdapter();
    return config;
};

module.exports.afterModelCreate = function(Model) {
    Model = Model || {};
    Model.prototype.config.Model = Model;
    return Model;
};
>>>>>>> FETCH_HEAD
