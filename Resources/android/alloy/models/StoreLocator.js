function mysql_real_escape_string(str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function(char) {
        switch (char) {
          case "\x00":
            return "\\0";

          case "\b":
            return "\\b";

          case "	":
            return "\\t";

          case "":
            return "\\z";

          case "\n":
            return "\\n";

          case "\r":
            return "\\r";

          case '"':
          case "'":
          case "\\":
          case "%":
            return "\\" + char;
        }
    });
}

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
            addStores: function(arr) {
                var collection = this;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute("BEGIN");
                arr.forEach(function(entry) {
                    sql_query = "INSERT INTO " + collection.config.adapter.collection_name + "(id, outlet, area, state, address,mobile, fax, email, latitude, longitude, category ) VALUES ('" + entry.f_id + "', '" + mysql_real_escape_string(entry.f_outlet) + "', '" + entry.f_area + "', '" + entry.f_state + "', '" + mysql_real_escape_string(entry.f_address) + "', '" + entry.f_mobile + "', '" + entry.f_fax + "', '" + entry.f_email + "', '" + entry.f_lat + "', '" + entry.f_lng + "', '" + entry.f_category + "')";
                    db.execute(sql_query);
                });
                db.execute("COMMIT");
                db.close();
                collection.trigger("sync");
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