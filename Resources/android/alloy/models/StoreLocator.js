var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

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
            email: "TEXT",
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
                        email: res.fieldByName("email"),
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
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE state='" + state + "' ORDER BY outlet";
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
                        email: res.fieldByName("email"),
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
                    email: res.fieldByName("email"),
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
            },
            getStoreByName: function(state, query) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE state='" + state + "' AND outlet LIKE '%" + query + "%' ORDER BY outlet";
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
                        email: res.fieldByName("email"),
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
            }
        });
        return Collection;
    }
};

model = Alloy.M("storeLocator", exports.definition, []);

collection = Alloy.C("storeLocator", exports.definition, model);

exports.Model = model;

exports.Collection = collection;