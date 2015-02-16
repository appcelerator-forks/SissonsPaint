var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            cate_id: "TEXT",
            colour_id: "TEXT",
            type: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "category_colour"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            getCategoryColourByCategory: function(cate_id) {
                var collection = this;
                var sql = "SELECT category_colour.*, colour.thumb, colour.rgb, colour.name, colour.code, colour.sample, colour.id AS cid FROM " + collection.config.adapter.collection_name + " LEFT OUTER JOIN colour ON category_colour.colour_id = colour.id WHERE cate_id='" + cate_id + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    listArr[count] = {
                        id: res.fieldByName("id"),
                        colour_id: res.fieldByName("colour_id"),
                        thumb: res.fieldByName("thumb"),
                        rgb: res.fieldByName("rgb"),
                        name: res.fieldByName("name"),
                        code: res.fieldByName("code"),
                        sample: res.fieldByName("sample"),
                        cid: res.fieldByName("cid")
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getCateByColourId: function(colour_id, type) {
                "undefined" == typeof type && (type = 2);
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE colour_id='" + colour_id + "' and type ='" + type + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var result = [];
                res.isValidRow() && (result = {
                    id: res.fieldByName("id"),
                    cate_id: res.fieldByName("cate_id")
                });
                res.close();
                db.close();
                collection.trigger("sync");
                return result;
            },
            addStores: function(arr, cate_id, cate_type) {
                var collection = this;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute("BEGIN");
                arr.forEach(function(colour) {
                    sql_query = "INSERT INTO " + collection.config.adapter.collection_name + "( cate_id, colour_id, type ) VALUES ('" + cate_id + "', '" + colour + "', '" + cate_type + "')";
                    db.execute(sql_query);
                });
                db.execute("COMMIT");
                db.close();
                collection.trigger("sync");
            },
            resetCategoryColour: function() {
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

model = Alloy.M("category_colour", exports.definition, []);

collection = Alloy.C("category_colour", exports.definition, model);

exports.Model = model;

exports.Collection = collection;