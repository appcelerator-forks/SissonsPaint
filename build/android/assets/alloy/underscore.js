<<<<<<< HEAD
(function(){var e=this,t=e._,i={},r=Array.prototype,o=Object.prototype,a=Function.prototype,n=r.push,l=r.slice,s=r.concat,_=o.toString,c=o.hasOwnProperty,d=r.forEach,u=r.map,h=r.reduce,y=r.reduceRight,f=r.filter,p=r.every,v=r.some,w=r.indexOf,g=r.lastIndexOf,I=Array.isArray,m=Object.keys,T=a.bind,b=function(e){return e instanceof b?e:this instanceof b?void(this._wrapped=e):new b(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports._=b):e._=b,b.VERSION="1.4.4";var E=b.each=b.forEach=function(e,t,r){if(null!=e)if(d&&e.forEach===d)e.forEach(t,r);else if(e.length===+e.length){for(var o=0,a=e.length;a>o;o++)if(t.call(r,e[o],o,e)===i)return}else for(var n in e)if(b.has(e,n)&&t.call(r,e[n],n,e)===i)return};b.map=b.collect=function(e,t,i){var r=[];return null==e?r:u&&e.map===u?e.map(t,i):(E(e,function(e,o,a){r[r.length]=t.call(i,e,o,a)}),r)};var A="Reduce of empty array with no initial value";b.reduce=b.foldl=b.inject=function(e,t,i,r){var o=arguments.length>2;if(null==e&&(e=[]),h&&e.reduce===h)return r&&(t=b.bind(t,r)),o?e.reduce(t,i):e.reduce(t);if(E(e,function(e,a,n){o?i=t.call(r,i,e,a,n):(i=e,o=!0)}),!o)throw new TypeError(A);return i},b.reduceRight=b.foldr=function(e,t,i,r){var o=arguments.length>2;if(null==e&&(e=[]),y&&e.reduceRight===y)return r&&(t=b.bind(t,r)),o?e.reduceRight(t,i):e.reduceRight(t);var a=e.length;if(a!==+a){var n=b.keys(e);a=n.length}if(E(e,function(l,s,_){s=n?n[--a]:--a,o?i=t.call(r,i,e[s],s,_):(i=e[s],o=!0)}),!o)throw new TypeError(A);return i},b.find=b.detect=function(e,t,i){var r;return S(e,function(e,o,a){return t.call(i,e,o,a)?(r=e,!0):void 0}),r},b.filter=b.select=function(e,t,i){var r=[];return null==e?r:f&&e.filter===f?e.filter(t,i):(E(e,function(e,o,a){t.call(i,e,o,a)&&(r[r.length]=e)}),r)},b.reject=function(e,t,i){return b.filter(e,function(e,r,o){return!t.call(i,e,r,o)},i)},b.every=b.all=function(e,t,r){t||(t=b.identity);var o=!0;return null==e?o:p&&e.every===p?e.every(t,r):(E(e,function(e,a,n){return(o=o&&t.call(r,e,a,n))?void 0:i}),!!o)};var S=b.some=b.any=function(e,t,r){t||(t=b.identity);var o=!1;return null==e?o:v&&e.some===v?e.some(t,r):(E(e,function(e,a,n){return o||(o=t.call(r,e,a,n))?i:void 0}),!!o)};b.contains=b.include=function(e,t){return null==e?!1:w&&e.indexOf===w?-1!=e.indexOf(t):S(e,function(e){return e===t})},b.invoke=function(e,t){var i=l.call(arguments,2),r=b.isFunction(t);return b.map(e,function(e){return(r?t:e[t]).apply(e,i)})},b.pluck=function(e,t){return b.map(e,function(e){return e[t]})},b.where=function(e,t,i){return b.isEmpty(t)?i?null:[]:b[i?"find":"filter"](e,function(e){for(var i in t)if(t[i]!==e[i])return!1;return!0})},b.findWhere=function(e,t){return b.where(e,t,!0)},b.max=function(e,t,i){if(!t&&b.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&b.isEmpty(e))return-1/0;var r={computed:-1/0,value:-1/0};return E(e,function(e,o,a){var n=t?t.call(i,e,o,a):e;n>=r.computed&&(r={value:e,computed:n})}),r.value},b.min=function(e,t,i){if(!t&&b.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&b.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return E(e,function(e,o,a){var n=t?t.call(i,e,o,a):e;n<r.computed&&(r={value:e,computed:n})}),r.value},b.shuffle=function(e){var t,i=0,r=[];return E(e,function(e){t=b.random(i++),r[i-1]=r[t],r[t]=e}),r};var L=function(e){return b.isFunction(e)?e:function(t){return t[e]}};b.sortBy=function(e,t,i){var r=L(t);return b.pluck(b.map(e,function(e,t,o){return{value:e,index:t,criteria:r.call(i,e,t,o)}}).sort(function(e,t){var i=e.criteria,r=t.criteria;if(i!==r){if(i>r||void 0===i)return 1;if(r>i||void 0===r)return-1}return e.index<t.index?-1:1}),"value")};var x=function(e,t,i,r){var o={},a=L(t||b.identity);return E(e,function(t,n){var l=a.call(i,t,n,e);r(o,l,t)}),o};b.groupBy=function(e,t,i){return x(e,t,i,function(e,t,i){(b.has(e,t)?e[t]:e[t]=[]).push(i)})},b.countBy=function(e,t,i){return x(e,t,i,function(e,t){b.has(e,t)||(e[t]=0),e[t]++})},b.sortedIndex=function(e,t,i,r){i=null==i?b.identity:L(i);for(var o=i.call(r,t),a=0,n=e.length;n>a;){var l=a+n>>>1;i.call(r,e[l])<o?a=l+1:n=l}return a},b.toArray=function(e){return e?b.isArray(e)?l.call(e):e.length===+e.length?b.map(e,b.identity):b.values(e):[]},b.size=function(e){return null==e?0:e.length===+e.length?e.length:b.keys(e).length},b.first=b.head=b.take=function(e,t,i){return null==e?void 0:null==t||i?e[0]:l.call(e,0,t)},b.initial=function(e,t,i){return l.call(e,0,e.length-(null==t||i?1:t))},b.last=function(e,t,i){return null==e?void 0:null==t||i?e[e.length-1]:l.call(e,Math.max(e.length-t,0))},b.rest=b.tail=b.drop=function(e,t,i){return l.call(e,null==t||i?1:t)},b.compact=function(e){return b.filter(e,b.identity)};var U=function(e,t,i){return E(e,function(e){b.isArray(e)?t?n.apply(i,e):U(e,t,i):i.push(e)}),i};b.flatten=function(e,t){return U(e,t,[])},b.without=function(e){return b.difference(e,l.call(arguments,1))},b.uniq=b.unique=function(e,t,i,r){b.isFunction(t)&&(r=i,i=t,t=!1);var o=i?b.map(e,i,r):e,a=[],n=[];return E(o,function(i,r){(t?r&&n[n.length-1]===i:b.contains(n,i))||(n.push(i),a.push(e[r]))}),a},b.union=function(){return b.uniq(s.apply(r,arguments))},b.intersection=function(e){var t=l.call(arguments,1);return b.filter(b.uniq(e),function(e){return b.every(t,function(t){return b.indexOf(t,e)>=0})})},b.difference=function(e){var t=s.apply(r,l.call(arguments,1));return b.filter(e,function(e){return!b.contains(t,e)})},b.zip=function(){for(var e=l.call(arguments),t=b.max(b.pluck(e,"length")),i=new Array(t),r=0;t>r;r++)i[r]=b.pluck(e,""+r);return i},b.object=function(e,t){if(null==e)return{};for(var i={},r=0,o=e.length;o>r;r++)t?i[e[r]]=t[r]:i[e[r][0]]=e[r][1];return i},b.indexOf=function(e,t,i){if(null==e)return-1;var r=0,o=e.length;if(i){if("number"!=typeof i)return r=b.sortedIndex(e,t),e[r]===t?r:-1;r=0>i?Math.max(0,o+i):i}if(w&&e.indexOf===w)return e.indexOf(t,i);for(;o>r;r++)if(e[r]===t)return r;return-1},b.lastIndexOf=function(e,t,i){if(null==e)return-1;var r=null!=i;if(g&&e.lastIndexOf===g)return r?e.lastIndexOf(t,i):e.lastIndexOf(t);for(var o=r?i:e.length;o--;)if(e[o]===t)return o;return-1},b.range=function(e,t,i){arguments.length<=1&&(t=e||0,e=0),i=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/i),0),o=0,a=new Array(r);r>o;)a[o++]=e,e+=i;return a},b.bind=function(e,t){if(e.bind===T&&T)return T.apply(e,l.call(arguments,1));var i=l.call(arguments,2);return function(){return e.apply(t,i.concat(l.call(arguments)))}},b.partial=function(e){var t=l.call(arguments,1);return function(){return e.apply(this,t.concat(l.call(arguments)))}},b.bindAll=function(e){var t=l.call(arguments,1);return 0===t.length&&(t=b.functions(e)),E(t,function(t){e[t]=b.bind(e[t],e)}),e},b.memoize=function(e,t){var i={};return t||(t=b.identity),function(){var r=t.apply(this,arguments);return b.has(i,r)?i[r]:i[r]=e.apply(this,arguments)}},b.delay=function(e,t){var i=l.call(arguments,2);return setTimeout(function(){return e.apply(null,i)},t)},b.defer=function(e){return b.delay.apply(b,[e,1].concat(l.call(arguments,1)))},b.throttle=function(e,t){var i,r,o,a,n=0,l=function(){n=new Date,o=null,a=e.apply(i,r)};return function(){var s=new Date,_=t-(s-n);return i=this,r=arguments,0>=_?(clearTimeout(o),o=null,n=s,a=e.apply(i,r)):o||(o=setTimeout(l,_)),a}},b.debounce=function(e,t,i){var r,o;return function(){var a=this,n=arguments,l=function(){r=null,i||(o=e.apply(a,n))},s=i&&!r;return clearTimeout(r),r=setTimeout(l,t),s&&(o=e.apply(a,n)),o}},b.once=function(e){var t,i=!1;return function(){return i?t:(i=!0,t=e.apply(this,arguments),e=null,t)}},b.wrap=function(e,t){return function(){var i=[e];return n.apply(i,arguments),t.apply(this,i)}},b.compose=function(){var e=arguments;return function(){for(var t=arguments,i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},b.after=function(e,t){return 0>=e?t():function(){return--e<1?t.apply(this,arguments):void 0}},b.keys=m||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var i in e)b.has(e,i)&&(t[t.length]=i);return t},b.values=function(e){var t=[];for(var i in e)b.has(e,i)&&t.push(e[i]);return t},b.pairs=function(e){var t=[];for(var i in e)b.has(e,i)&&t.push([i,e[i]]);return t},b.invert=function(e){var t={};for(var i in e)b.has(e,i)&&(t[e[i]]=i);return t},b.functions=b.methods=function(e){var t=[];for(var i in e)b.isFunction(e[i])&&t.push(i);return t.sort()},b.extend=function(e){return E(l.call(arguments,1),function(t){if(t)for(var i in t)e[i]=t[i]}),e},b.pick=function(e){var t={},i=s.apply(r,l.call(arguments,1));return E(i,function(i){i in e&&(t[i]=e[i])}),t},b.omit=function(e){var t={},i=s.apply(r,l.call(arguments,1));for(var o in e)b.contains(i,o)||(t[o]=e[o]);return t},b.defaults=function(e){return E(l.call(arguments,1),function(t){if(t)for(var i in t)null==e[i]&&(e[i]=t[i])}),e},b.clone=function(e){return b.isObject(e)?b.isArray(e)?e.slice():b.extend({},e):e},b.tap=function(e,t){return t(e),e};var N=function(e,t,i,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof b&&(e=e._wrapped),t instanceof b&&(t=t._wrapped);var o=_.call(e);if(o!=_.call(t))return!1;switch(o){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var a=i.length;a--;)if(i[a]==e)return r[a]==t;i.push(e),r.push(t);var n=0,l=!0;if("[object Array]"==o){if(n=e.length,l=n==t.length)for(;n--&&(l=N(e[n],t[n],i,r)););}else{var s=e.constructor,c=t.constructor;if(s!==c&&!(b.isFunction(s)&&s instanceof s&&b.isFunction(c)&&c instanceof c))return!1;for(var d in e)if(b.has(e,d)&&(n++,!(l=b.has(t,d)&&N(e[d],t[d],i,r))))break;if(l){for(d in t)if(b.has(t,d)&&!n--)break;l=!n}}return i.pop(),r.pop(),l};b.isEqual=function(e,t){return N(e,t,[],[])},b.isEmpty=function(e){if(null==e)return!0;if(b.isArray(e)||b.isString(e))return 0===e.length;for(var t in e)if(b.has(e,t))return!1;return!0},b.isElement=function(e){return!(!e||1!==e.nodeType)},b.isArray=I||function(e){return"[object Array]"==_.call(e)},b.isObject=function(e){return e===Object(e)},E(["Arguments","Function","String","Number","Date","RegExp"],function(e){b["is"+e]=function(t){return _.call(t)=="[object "+e+"]"}}),b.isArguments(arguments)||(b.isArguments=function(e){return!(!e||!b.has(e,"callee"))}),"function"!=typeof/./&&(b.isFunction=function(e){return"function"==typeof e}),b.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},b.isNaN=function(e){return b.isNumber(e)&&e!=+e},b.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==_.call(e)},b.isNull=function(e){return null===e},b.isUndefined=function(e){return void 0===e},b.has=function(e,t){return c.call(e,t)},b.noConflict=function(){return e._=t,this},b.identity=function(e){return e},b.times=function(e,t,i){for(var r=Array(e),o=0;e>o;o++)r[o]=t.call(i,o);return r},b.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var C={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};C.unescape=b.invert(C.escape);var k={escape:new RegExp("["+b.keys(C.escape).join("")+"]","g"),unescape:new RegExp("("+b.keys(C.unescape).join("|")+")","g")};b.each(["escape","unescape"],function(e){b[e]=function(t){return null==t?"":(""+t).replace(k[e],function(t){return C[e][t]})}}),b.result=function(e,t){if(null==e)return null;var i=e[t];return b.isFunction(i)?i.call(e):i},b.mixin=function(e){E(b.functions(e),function(t){var i=b[t]=e[t];b.prototype[t]=function(){var e=[this._wrapped];return n.apply(e,arguments),P.call(this,i.apply(b,e))}})};var O=0;b.uniqueId=function(e){var t=++O+"";return e?e+t:t},b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var B=/(.)^/,R={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;b.template=function(e,t,i){var r;i=b.defaults({},i,b.templateSettings);var o=new RegExp([(i.escape||B).source,(i.interpolate||B).source,(i.evaluate||B).source].join("|")+"|$","g"),a=0,n="__p+='";e.replace(o,function(t,i,r,o,l){return n+=e.slice(a,l).replace(D,function(e){return"\\"+R[e]}),i&&(n+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),r&&(n+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),o&&(n+="';\n"+o+"\n__p+='"),a=l+t.length,t}),n+="';\n",i.variable||(n="with(obj||{}){\n"+n+"}\n"),n="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+n+"return __p;\n";try{r=new Function(i.variable||"obj","_",n)}catch(l){throw l.source=n,l}if(t)return r(t,b);var s=function(e){return r.call(this,e,b)};return s.source="function("+(i.variable||"obj")+"){\n"+n+"}",s},b.chain=function(e){return b(e).chain()};var P=function(e){return this._chain?b(e).chain():e};b.mixin(b),E(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];b.prototype[e]=function(){var i=this._wrapped;return t.apply(i,arguments),"shift"!=e&&"splice"!=e||0!==i.length||delete i[0],P.call(this,i)}}),E(["concat","join","slice"],function(e){var t=r[e];b.prototype[e]=function(){return P.call(this,t.apply(this._wrapped,arguments))}}),b.extend(b.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
=======
// Underscore.js 1.4.4
// ===================

// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.

// Baseline setup
// --------------
(function() {

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.4.4';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? null : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value || _.identity);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] == null) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(n);
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);
>>>>>>> FETCH_HEAD
