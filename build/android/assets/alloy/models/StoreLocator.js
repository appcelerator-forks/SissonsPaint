<<<<<<< HEAD
var Alloy=require("alloy"),_=require("alloy/underscore")._,model,collection;exports.definition={config:{columns:{id:"INTEGER",outlet:"TEXT",area:"TEXT",state:"TEXT",address:"TEXT",mobile:"TEXT",fax:"TEXT",latitude:"TEXT",longitude:"TEXT",category:"INTEGER"},adapter:{type:"sql",collection_name:"storeLocator"}},extendModel:function(e){return _.extend(e.prototype,{}),e},extendCollection:function(e){return _.extend(e.prototype,{getStoreStateList:function(){var e=this,t="SELECT distinct(state) FROM "+e.config.adapter.collection_name+"  order by state";db=Ti.Database.open(e.config.adapter.db_name);for(var i=db.execute(t),o=[],a=0;i.isValidRow();)o[a]={state:i.fieldByName("state")},i.next(),a++;return i.close(),db.close(),e.trigger("sync"),o},getStoreList:function(){var e=this,t="SELECT * FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name);for(var i=db.execute(t),o=[],a=0;i.isValidRow();)o[a]={id:i.fieldByName("id"),outlet:i.fieldByName("outlet"),area:i.fieldByName("area"),state:i.fieldByName("state"),address:i.fieldByName("address"),mobile:i.fieldByName("mobile"),fax:i.fieldByName("fax"),latitude:i.fieldByName("latitude"),longitude:i.fieldByName("longitude"),category:i.fieldByName("category")},i.next(),a++;return i.close(),db.close(),e.trigger("sync"),o},getStoreByState:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE state='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);for(var o=db.execute(i),a=[],r=0;o.isValidRow();)a[r]={id:o.fieldByName("id"),outlet:o.fieldByName("outlet"),area:o.fieldByName("area"),state:o.fieldByName("state"),address:o.fieldByName("address"),mobile:o.fieldByName("mobile"),fax:o.fieldByName("fax"),latitude:o.fieldByName("latitude"),longitude:o.fieldByName("longitude"),category:o.fieldByName("category")},o.next(),r++;return o.close(),db.close(),t.trigger("sync"),a},getStoreById:function(e){var t=this,i="SELECT * FROM "+t.config.adapter.collection_name+" WHERE id='"+e+"'";db=Ti.Database.open(t.config.adapter.db_name);var o=db.execute(i),a=[];return o.isValidRow()&&(a={outlet:o.fieldByName("outlet"),area:o.fieldByName("area"),state:o.fieldByName("state"),address:o.fieldByName("address"),mobile:o.fieldByName("mobile"),fax:o.fieldByName("fax"),latitude:o.fieldByName("latitude"),longitude:o.fieldByName("longitude"),category:o.fieldByName("category")}),o.close(),db.close(),t.trigger("sync"),a},resetStore:function(){var e=this,t="DELETE FROM "+e.config.adapter.collection_name;db=Ti.Database.open(e.config.adapter.db_name),db.execute(t),db.close(),e.trigger("sync")}}),e}},model=Alloy.M("storeLocator",exports.definition,[]),collection=Alloy.C("storeLocator",exports.definition,model),exports.Model=model,exports.Collection=collection;
=======
exports.definition = {
    config: {
        columns: {
            id: "INTEGER",
            outlet: "TEXT",
            area: "TEXT",
            state: "TEXT",
            address: "TEXT",
            mobile: "TEXT",
            fax: "TEXT",
            latitude: "TEXT",
            longitude: "TEXT",
            category: "INTEGER"
        },
        adapter: {
            type: "sql",
            collection_name: "storeLocator"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            getStoreStateList: function() {
                var collection = this;
                var sql = "SELECT distinct(state) FROM " + collection.config.adapter.collection_name + "  order by state";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    listArr[count] = {
                        state: res.fieldByName("state")
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getStoreList: function() {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    listArr[count] = {
                        id: res.fieldByName("id"),
                        outlet: res.fieldByName("outlet"),
                        area: res.fieldByName("area"),
                        state: res.fieldByName("state"),
                        address: res.fieldByName("address"),
                        mobile: res.fieldByName("mobile"),
                        fax: res.fieldByName("fax"),
                        latitude: res.fieldByName("latitude"),
                        longitude: res.fieldByName("longitude"),
                        category: res.fieldByName("category")
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getStoreByState: function(state) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE state='" + state + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    listArr[count] = {
                        id: res.fieldByName("id"),
                        outlet: res.fieldByName("outlet"),
                        area: res.fieldByName("area"),
                        state: res.fieldByName("state"),
                        address: res.fieldByName("address"),
                        mobile: res.fieldByName("mobile"),
                        fax: res.fieldByName("fax"),
                        latitude: res.fieldByName("latitude"),
                        longitude: res.fieldByName("longitude"),
                        category: res.fieldByName("category")
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getStoreById: function(id) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='" + id + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = [];
                res.isValidRow() && (arr = {
                    outlet: res.fieldByName("outlet"),
                    area: res.fieldByName("area"),
                    state: res.fieldByName("state"),
                    address: res.fieldByName("address"),
                    mobile: res.fieldByName("mobile"),
                    fax: res.fieldByName("fax"),
                    latitude: res.fieldByName("latitude"),
                    longitude: res.fieldByName("longitude"),
                    category: res.fieldByName("category")
                });
                res.close();
                db.close();
                collection.trigger("sync");
                return arr;
            },
            resetStore: function() {
                var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger("sync");
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("storeLocator", exports.definition, []);

collection = Alloy.C("storeLocator", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
>>>>>>> FETCH_HEAD
