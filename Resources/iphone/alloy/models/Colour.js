var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "INTEGER",
            name: "TEXT",
            code: "TEXT",
            rgb: "TEXT",
            cmyk: "TEXT",
            sample: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "colour"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            getColourList: function() {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + "  order by id DESC";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    var c = res.fieldByName("rgb").split(/,\s*/);
                    listArr[count] = {
                        id: res.fieldByName("id"),
                        name: res.fieldByName("name"),
                        code: res.fieldByName("code"),
                        rgb: res.fieldByName("rgb"),
                        cmyk: res.fieldByName("cmyk"),
                        sample: res.fieldByName("sample"),
                        contrast: parseInt(c[0]) + parseInt(c[1]) + parseInt(c[2])
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getColourById: function(id) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='" + id + "'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = [];
                res.isValidRow() && (arr = {
                    id: res.fieldByName("id"),
                    name: res.fieldByName("name"),
                    code: res.fieldByName("code"),
                    rgb: res.fieldByName("rgb"),
                    cmyk: res.fieldByName("cmyk"),
                    sample: res.fieldByName("sample")
                });
                res.close();
                db.close();
                collection.trigger("sync");
                return arr;
            },
            resetColour: function() {
                var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger("sync");
            },
            getColourByQuery: function(query) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE name LIKE '%" + query + "%' OR code='%" + query + "%'";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                var count = 0;
                while (res.isValidRow()) {
                    listArr[count] = {
                        id: res.fieldByName("id"),
                        name: res.fieldByName("name"),
                        code: res.fieldByName("code"),
                        rgb: res.fieldByName("rgb"),
                        cmyk: res.fieldByName("cmyk"),
                        sample: res.fieldByName("sample")
                    };
                    res.next();
                    count++;
                }
                res.close();
                db.close();
                collection.trigger("sync");
                return listArr;
            },
            getClosestColourList: function(closest_r, closest_g, closest_b) {
                var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + "  order by id DESC";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = [];
                while (res.isValidRow()) {
                    var c = res.fieldByName("rgb").split(/,\s*/);
                    var diff_min = 50;
                    var index = -1;
                    var diff_r = Math.abs(closest_r - c[0]);
                    var diff_g = Math.abs(closest_g - c[1]);
                    var diff_b = Math.abs(closest_b - c[2]);
                    var diff = Math.max(diff_r, diff_g, diff_b);
                    if (diff_min >= diff) {
                        for (var i = 0; i < listArr.length; i++) if (diff <= listArr[i].diff) {
                            index = i;
                            break;
                        }
                        0 > index && (index = listArr.length);
                        listArr.splice(index, 0, {
                            id: res.fieldByName("id"),
                            name: res.fieldByName("name"),
                            code: res.fieldByName("code"),
                            rgb: res.fieldByName("rgb"),
                            cmyk: res.fieldByName("cmyk"),
                            sample: res.fieldByName("sample"),
                            diff: diff
                        });
                    }
                    res.next();
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

model = Alloy.M("colour", exports.definition, []);

collection = Alloy.C("colour", exports.definition, model);

exports.Model = model;

exports.Collection = collection;