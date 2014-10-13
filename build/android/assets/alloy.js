<<<<<<< HEAD
function ucfirst(e){return e?e[0].toUpperCase()+e.substr(1):e}function addNamespace(e){return(CONST.IMPLICIT_NAMESPACES[e]||CONST.NAMESPACE_DEFAULT)+"."+e}function processStyle(e,t,i,r,o){r=r||{},r.classes=i,t.apiName&&(r.apiName=t.apiName),t.id&&(r.id=t.id),t.applyProperties(exports.createStyle(e,r,o)),t.classes=i}function isTabletFallback(){return Math.min(Ti.Platform.displayCaps.platformHeight,Ti.Platform.displayCaps.platformWidth)>=700}function deepExtend(){var e,t,i,r,o,n,a=arguments[0]||{},l=1,s=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[1]||{},l=2),"object"==typeof a||_.isFunction(a)||(a={});s>l;l++)if(e=arguments[l],null!=e){"string"==typeof e&&(e=e.split(""));for(t in e)i=a[t],r=e[t],a!==r&&(c&&r&&(_.isObject(r)&&!_.has(r,"apiName")||(o=_.isArray(r)))&&!r.colors?(o?(o=!1,n=i&&_.isArray(i)?i:[]):n=_.isDate(r)?new Date(r.valueOf()):i&&_.isObject(i)?i:{},a[t]=deepExtend(c,n,r)):"undefined"!=typeof r?a[t]=r:r.colors&&(a[t]=r))}return a}var _=require("alloy/underscore")._,Backbone=require("alloy/backbone"),CONST=require("alloy/constants");exports.version="1.5.1",exports._=_,exports.Backbone=Backbone;var DEFAULT_WIDGET="widget",TI_VERSION=Ti.version,MW320_CHECK=!1,IDENTITY_TRANSFORM=Ti.UI.create2DMatrix(),RESET={bottom:null,left:null,right:null,top:null,height:null,width:null,shadowColor:null,shadowOffset:null,backgroundImage:null,backgroundRepeat:null,center:null,layout:null,backgroundSelectedColor:null,backgroundSelectedImage:null,opacity:1,touchEnabled:!0,enabled:!0,horizontalWrap:!0,zIndex:0,backgroundColor:"transparent",font:null,visible:!0,color:"#000",transform:IDENTITY_TRANSFORM,backgroundGradient:null,borderColor:null,borderRadius:null,borderWidth:null};RESET=_.extend(RESET,{backgroundDisabledColor:null,backgroundDisabledImage:null,backgroundFocusedColor:null,backgroundFocusedImage:null,focusable:!1,keepScreenOn:!1}),exports.M=function(e,t,i){var r,o=(t||{}).config||{},n=o.adapter||{},a={},l={};n.type?(r=require("alloy/sync/"+n.type),a.sync=function(e,t,i){r.sync(e,t,i)}):a.sync=function(e,t){Ti.API.warn("Execution of "+e+"#sync() function on a model that does not support persistence"),Ti.API.warn("model: "+JSON.stringify(t.toJSON()))},a.defaults=o.defaults,i&&(l.migrations=i),r&&_.isFunction(r.beforeModelCreate)&&(o=r.beforeModelCreate(o,e)||o);var s=Backbone.Model.extend(a,l);return s.prototype.config=o,_.isFunction(t.extendModel)&&(s=t.extendModel(s)||s),r&&_.isFunction(r.afterModelCreate)&&r.afterModelCreate(s,e),s},exports.C=function(e,t,i){var r,o={model:i},n=(i?i.prototype.config:{})||{};n.adapter&&n.adapter.type?(r=require("alloy/sync/"+n.adapter.type),o.sync=function(e,t,i){r.sync(e,t,i)}):o.sync=function(e,t){Ti.API.warn("Execution of "+e+"#sync() function on a collection that does not support persistence"),Ti.API.warn("model: "+JSON.stringify(t.toJSON()))};var a=Backbone.Collection.extend(o);return a.prototype.config=n,_.isFunction(t.extendCollection)&&(a=t.extendCollection(a)||a),r&&_.isFunction(r.afterCollectionCreate)&&r.afterCollectionCreate(a),a},exports.UI={},exports.UI.create=function(controller,apiName,opts){opts=opts||{};var baseName,ns,parts=apiName.split(".");if(1===parts.length)baseName=apiName,ns=opts.ns||CONST.IMPLICIT_NAMESPACES[baseName]||CONST.NAMESPACE_DEFAULT;else{if(!(parts.length>1))throw"Alloy.UI.create() failed: No API name was given in the second parameter";baseName=parts[parts.length-1],ns=parts.slice(0,parts.length-1).join(".")}opts.apiName=ns+"."+baseName,baseName=baseName[0].toUpperCase()+baseName.substr(1);var style=exports.createStyle(controller,opts);return eval(ns)["create"+baseName](style)},exports.createStyle=function(e,t,i){var r,o;if(!t)return{};r=_.isArray(t.classes)?t.classes.slice(0):_.isString(t.classes)?t.classes.split(/\s+/):[],o=t.apiName,o&&-1===o.indexOf(".")&&(o=addNamespace(o));var n;n=require(e&&_.isObject(e)?"alloy/widgets/"+e.widgetId+"/styles/"+e.name:"alloy/styles/"+e);var a,l,s={};for(a=0,l=n.length;l>a;a++){var c=n[a],d=c.key;if(c.isApi&&-1===d.indexOf(".")&&(d=(CONST.IMPLICIT_NAMESPACES[d]||CONST.NAMESPACE_DEFAULT)+"."+d),c.isId&&t.id&&c.key===t.id||c.isClass&&_.contains(r,c.key));else{if(!c.isApi)continue;if(-1===c.key.indexOf(".")&&(c.key=addNamespace(c.key)),c.key!==o)continue}c.queries&&c.queries.formFactor&&!Alloy[c.queries.formFactor]||deepExtend(!0,s,c.style)}var u=_.omit(t,[CONST.CLASS_PROPERTY,CONST.APINAME_PROPERTY]);return deepExtend(!0,s,u),s[CONST.CLASS_PROPERTY]=r,s[CONST.APINAME_PROPERTY]=o,MW320_CHECK&&delete s[CONST.APINAME_PROPERTY],i?_.defaults(s,i):s},exports.addClass=function(e,t,i,r){if(!i)return void(r&&(MW320_CHECK&&delete r.apiName,t.applyProperties(r)));var o=t[CONST.CLASS_PROPERTY]||[],n=o.length;i=_.isString(i)?i.split(/\s+/):i;var a=_.union(o,i||[]);return n===a.length?void(r&&(MW320_CHECK&&delete r.apiName,t.applyProperties(r))):void processStyle(e,t,a,r)},exports.removeClass=function(e,t,i,r){i=i||[];var o=t[CONST.CLASS_PROPERTY]||[],n=o.length;if(!n||!i.length)return void(r&&(MW320_CHECK&&delete r.apiName,t.applyProperties(r)));i=_.isString(i)?i.split(/\s+/):i;var a=_.difference(o,i);return n===a.length?void(r&&(MW320_CHECK&&delete r.apiName,t.applyProperties(r))):void processStyle(e,t,a,r,RESET)},exports.resetClass=function(e,t,i,r){i=i||[],i=_.isString(i)?i.split(/\s+/):i,processStyle(e,t,i,r,RESET)},exports.createWidget=function(e,t,i){return"undefined"!=typeof t&&null!==t&&_.isObject(t)&&!_.isString(t)&&(i=t,t=DEFAULT_WIDGET),new(require("alloy/widgets/"+e+"/controllers/"+(t||DEFAULT_WIDGET)))(i)},exports.createController=function(e,t){return new(require("alloy/controllers/"+e))(t)},exports.createModel=function(e,t){return new(require("alloy/models/"+ucfirst(e)).Model)(t)},exports.createCollection=function(e,t){return new(require("alloy/models/"+ucfirst(e)).Collection)(t)},exports.isTablet=function(){var e=Ti.Platform.Android.physicalSizeCategory;return e===Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_LARGE||e===Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_XLARGE}(),exports.isHandheld=!exports.isTablet,exports.Globals={},exports.Models={},exports.Models.instance=function(e){return exports.Models[e]||(exports.Models[e]=exports.createModel(e))},exports.Collections={},exports.Collections.instance=function(e){return exports.Collections[e]||(exports.Collections[e]=exports.createCollection(e))},exports.CFG=require("alloy/CFG"),exports.Android={},exports.Android.menuItemCreateArgs=["itemId","groupId","title","order","actionView","checkable","checked","enabled","icon","showAsAction","titleCondensed","visible"];
=======
function ucfirst(text) {
    if (!text) return text;
    return text[0].toUpperCase() + text.substr(1);
}

function addNamespace(apiName) {
    return (CONST.IMPLICIT_NAMESPACES[apiName] || CONST.NAMESPACE_DEFAULT) + "." + apiName;
}

function processStyle(controller, proxy, classes, opts, defaults) {
    opts = opts || {};
    opts.classes = classes;
    proxy.apiName && (opts.apiName = proxy.apiName);
    proxy.id && (opts.id = proxy.id);
    proxy.applyProperties(exports.createStyle(controller, opts, defaults));
    proxy.classes = classes;
}

function isTabletFallback() {
    return Math.min(Ti.Platform.displayCaps.platformHeight, Ti.Platform.displayCaps.platformWidth) >= 700;
}

var _ = require("alloy/underscore")._, Backbone = require("alloy/backbone"), CONST = require("alloy/constants");

exports.version = "1.3.0";

exports._ = _;

exports.Backbone = Backbone;

var DEFAULT_WIDGET = "widget";

var TI_VERSION = Ti.version;

var MW320_CHECK = false;

var IDENTITY_TRANSFORM = Ti.UI.create2DMatrix();

var RESET = {
    bottom: null,
    left: null,
    right: null,
    top: null,
    height: null,
    width: null,
    shadowColor: null,
    shadowOffset: null,
    backgroundImage: null,
    backgroundRepeat: null,
    center: null,
    layout: null,
    backgroundSelectedColor: null,
    backgroundSelectedImage: null,
    opacity: 1,
    touchEnabled: true,
    enabled: true,
    horizontalWrap: true,
    zIndex: 0,
    backgroundColor: "transparent",
    font: null,
    visible: true,
    color: "#000",
    transform: IDENTITY_TRANSFORM,
    backgroundGradient: null,
    borderColor: null,
    borderRadius: null,
    borderWidth: null
};

RESET = _.extend(RESET, {
    backgroundDisabledColor: null,
    backgroundDisabledImage: null,
    backgroundFocusedColor: null,
    backgroundFocusedImage: null,
    focusable: false,
    keepScreenOn: false
});

exports.M = function(name, modelDesc, migrations) {
    var config = (modelDesc || {}).config || {};
    var adapter = config.adapter || {};
    var extendObj = {};
    var extendClass = {};
    var mod;
    if (adapter.type) {
        mod = require("alloy/sync/" + adapter.type);
        extendObj.sync = function(method, model, opts) {
            mod.sync(method, model, opts);
        };
    } else extendObj.sync = function(method, model) {
        Ti.API.warn("Execution of " + method + "#sync() function on a model that does not support persistence");
        Ti.API.warn("model: " + JSON.stringify(model.toJSON()));
    };
    extendObj.defaults = config.defaults;
    migrations && (extendClass.migrations = migrations);
    mod && _.isFunction(mod.beforeModelCreate) && (config = mod.beforeModelCreate(config, name) || config);
    var Model = Backbone.Model.extend(extendObj, extendClass);
    Model.prototype.config = config;
    _.isFunction(modelDesc.extendModel) && (Model = modelDesc.extendModel(Model) || Model);
    mod && _.isFunction(mod.afterModelCreate) && mod.afterModelCreate(Model, name);
    return Model;
};

exports.C = function(name, modelDesc, model) {
    var extendObj = {
        model: model
    };
    var config = (model ? model.prototype.config : {}) || {};
    var mod;
    if (config.adapter && config.adapter.type) {
        mod = require("alloy/sync/" + config.adapter.type);
        extendObj.sync = function(method, model, opts) {
            mod.sync(method, model, opts);
        };
    } else extendObj.sync = function(method, model) {
        Ti.API.warn("Execution of " + method + "#sync() function on a collection that does not support persistence");
        Ti.API.warn("model: " + JSON.stringify(model.toJSON()));
    };
    var Collection = Backbone.Collection.extend(extendObj);
    Collection.prototype.config = config;
    _.isFunction(modelDesc.extendCollection) && (Collection = modelDesc.extendCollection(Collection) || Collection);
    mod && _.isFunction(mod.afterCollectionCreate) && mod.afterCollectionCreate(Collection);
    return Collection;
};

exports.UI = {};

exports.UI.create = function(controller, apiName, opts) {
    opts = opts || {};
    var baseName, ns;
    var parts = apiName.split(".");
    if (1 === parts.length) {
        baseName = apiName;
        ns = opts.ns || CONST.IMPLICIT_NAMESPACES[baseName] || CONST.NAMESPACE_DEFAULT;
    } else {
        if (!(parts.length > 1)) throw "Alloy.UI.create() failed: No API name was given in the second parameter";
        baseName = parts[parts.length - 1];
        ns = parts.slice(0, parts.length - 1).join(".");
    }
    opts.apiName = ns + "." + baseName;
    baseName = baseName[0].toUpperCase() + baseName.substr(1);
    var style = exports.createStyle(controller, opts);
    return eval(ns)["create" + baseName](style);
};

exports.createStyle = function(controller, opts, defaults) {
    var classes, apiName;
    if (!opts) return {};
    classes = _.isArray(opts.classes) ? opts.classes.slice(0) : _.isString(opts.classes) ? opts.classes.split(/\s+/) : [];
    apiName = opts.apiName;
    apiName && -1 === apiName.indexOf(".") && (apiName = addNamespace(apiName));
    var styleArray;
    styleArray = controller && _.isObject(controller) ? require("alloy/widgets/" + controller.widgetId + "/styles/" + controller.name) : require("alloy/styles/" + controller);
    var styleFinal = {};
    var i, len;
    for (i = 0, len = styleArray.length; len > i; i++) {
        var style = styleArray[i];
        var styleApi = style.key;
        style.isApi && -1 === styleApi.indexOf(".") && (styleApi = (CONST.IMPLICIT_NAMESPACES[styleApi] || CONST.NAMESPACE_DEFAULT) + "." + styleApi);
        if (style.isId && opts.id && style.key === opts.id || style.isClass && _.contains(classes, style.key)) ; else {
            if (!style.isApi) continue;
            -1 === style.key.indexOf(".") && (style.key = addNamespace(style.key));
            if (style.key !== apiName) continue;
        }
        if (style.queries && style.queries.formFactor && !Alloy[style.queries.formFactor]) continue;
        _.extend(styleFinal, style.style);
    }
    var extraStyle = _.omit(opts, [ CONST.CLASS_PROPERTY, CONST.APINAME_PROPERTY ]);
    _.extend(styleFinal, extraStyle);
    styleFinal[CONST.CLASS_PROPERTY] = classes;
    styleFinal[CONST.APINAME_PROPERTY] = apiName;
    MW320_CHECK && delete styleFinal[CONST.APINAME_PROPERTY];
    return defaults ? _.defaults(styleFinal, defaults) : styleFinal;
};

exports.addClass = function(controller, proxy, classes, opts) {
    if (!classes) {
        if (opts) {
            MW320_CHECK && delete opts.apiName;
            proxy.applyProperties(opts);
        }
        return;
    }
    var pClasses = proxy[CONST.CLASS_PROPERTY] || [];
    var beforeLen = pClasses.length;
    classes = _.isString(classes) ? classes.split(/\s+/) : classes;
    var newClasses = _.union(pClasses, classes || []);
    if (beforeLen === newClasses.length) {
        if (opts) {
            MW320_CHECK && delete opts.apiName;
            proxy.applyProperties(opts);
        }
        return;
    }
    processStyle(controller, proxy, newClasses, opts);
};

exports.removeClass = function(controller, proxy, classes, opts) {
    classes = classes || [];
    var pClasses = proxy[CONST.CLASS_PROPERTY] || [];
    var beforeLen = pClasses.length;
    if (!beforeLen || !classes.length) {
        if (opts) {
            MW320_CHECK && delete opts.apiName;
            proxy.applyProperties(opts);
        }
        return;
    }
    classes = _.isString(classes) ? classes.split(/\s+/) : classes;
    var newClasses = _.difference(pClasses, classes);
    if (beforeLen === newClasses.length) {
        if (opts) {
            MW320_CHECK && delete opts.apiName;
            proxy.applyProperties(opts);
        }
        return;
    }
    processStyle(controller, proxy, newClasses, opts, RESET);
};

exports.resetClass = function(controller, proxy, classes, opts) {
    classes = classes || [];
    classes = _.isString(classes) ? classes.split(/\s+/) : classes;
    processStyle(controller, proxy, classes, opts, RESET);
};

exports.createWidget = function(id, name, args) {
    if ("undefined" != typeof name && null !== name && _.isObject(name) && !_.isString(name)) {
        args = name;
        name = DEFAULT_WIDGET;
    }
    return new (require("alloy/widgets/" + id + "/controllers/" + (name || DEFAULT_WIDGET)))(args);
};

exports.createController = function(name, args) {
    return new (require("alloy/controllers/" + name))(args);
};

exports.createModel = function(name, args) {
    return new (require("alloy/models/" + ucfirst(name)).Model)(args);
};

exports.createCollection = function(name, args) {
    return new (require("alloy/models/" + ucfirst(name)).Collection)(args);
};

exports.isTablet = function() {
    var psc = Ti.Platform.Android.physicalSizeCategory;
    return psc === Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_LARGE || psc === Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_XLARGE;
}();

exports.isHandheld = !exports.isTablet;

exports.Globals = {};

exports.Models = {};

exports.Models.instance = function(name) {
    return exports.Models[name] || (exports.Models[name] = exports.createModel(name));
};

exports.Collections = {};

exports.Collections.instance = function(name) {
    return exports.Collections[name] || (exports.Collections[name] = exports.createCollection(name));
};

exports.CFG = require("alloy/CFG");

exports.Android = {};

exports.Android.menuItemCreateArgs = [ "itemId", "groupId", "title", "order", "actionView", "checkable", "checked", "enabled", "icon", "showAsAction", "titleCondensed", "visible" ];
>>>>>>> FETCH_HEAD
