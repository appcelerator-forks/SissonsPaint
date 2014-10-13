<<<<<<< HEAD
function S4(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function guid(){return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()}function Migrator(e,t){this.db=t,this.dbname=e.adapter.db_name,this.table=e.adapter.collection_name,this.idAttribute=e.adapter.idAttribute,this.column=function(e){var t=e.split(/\s+/),i=t[0];switch(i.toLowerCase()){case"string":case"varchar":case"date":case"datetime":Ti.API.warn('"'+i+'" is not a valid sqlite field, using TEXT instead');case"text":i="TEXT";break;case"int":case"tinyint":case"smallint":case"bigint":case"boolean":Ti.API.warn('"'+i+'" is not a valid sqlite field, using INTEGER instead');case"integer":i="INTEGER";break;case"double":case"float":case"decimal":case"number":Ti.API.warn('"'+e+'" is not a valid sqlite field, using REAL instead');case"real":i="REAL";break;case"blob":i="BLOB";break;case"null":i="NULL";break;default:i="TEXT"}return t[0]=i,t.join(" ")},this.createTable=function(e){var t=[],i=!1;for(var o in e.columns)o===this.idAttribute&&(i=!0),t.push(o+" "+this.column(e.columns[o]));i||this.idAttribute!==ALLOY_ID_DEFAULT||t.push(ALLOY_ID_DEFAULT+" TEXT UNIQUE");var r="CREATE TABLE IF NOT EXISTS "+this.table+" ( "+t.join(",")+")";this.db.execute(r)},this.dropTable=function(){this.db.execute("DROP TABLE IF EXISTS "+this.table)},this.insertRow=function(e){var t=[],i=[],o=[],r=!1;for(var a in e)a===this.idAttribute&&(r=!0),t.push(a),i.push(e[a]),o.push("?");r||this.idAttribute!==ALLOY_ID_DEFAULT||(t.push(this.idAttribute),i.push(guid()),o.push("?")),this.db.execute("INSERT INTO "+this.table+" ("+t.join(",")+") VALUES ("+o.join(",")+");",i)},this.deleteRow=function(e){var t="DELETE FROM "+this.table,i=_.keys(e),o=i.length,r=[],a=[];o&&(t+=" WHERE ");for(var l=0;o>l;l++)r.push(i[l]+" = ?"),a.push(e[i[l]]);t+=r.join(" AND "),this.db.execute(t,a)}}function Sync(e,t,i){var o,r,a=t.config.adapter.collection_name,l=t.config.columns,n=t.config.adapter.db_name||ALLOY_DB_DEFAULT,s=null;switch(e){case"create":case"update":s=function(){var e={};t.id||(t.id=t.idAttribute===ALLOY_ID_DEFAULT?guid():null,e[t.idAttribute]=t.id,t.set(e,{silent:!0}));var i=[],s=[],_=[];for(var d in l)i.push(d),s.push(t.get(d)),_.push("?");if(r="REPLACE INTO "+a+" ("+i.join(",")+") VALUES ("+_.join(",")+");",o=Ti.Database.open(n),o.execute("BEGIN;"),o.execute(r,s),null===t.id){var c="SELECT last_insert_rowid();",u=o.execute(c);u&&u.isValidRow()?(t.id=u.field(0),e[t.idAttribute]=t.id,t.set(e,{silent:!0})):Ti.API.warn("Unable to get ID from database for model: "+t.toJSON()),u&&u.close()}return o.execute("COMMIT;"),o.close(),t.toJSON()}();break;case"read":i.query&&i.id&&Ti.API.warn('Both "query" and "id" options were specified for model.fetch(). "id" will be ignored.'),r="SELECT * FROM "+a,i.query?r=i.query:i.id&&(r+=" WHERE "+(t.idAttribute?t.idAttribute:ALLOY_ID_DEFAULT)+" = "+(_.isString(i.id)?'"'+i.id+'"':i.id)),o=Ti.Database.open(n);var d;d=_.isString(r)?o.execute(r):o.execute(r.statement,r.params);for(var c=0,u=[];d.isValidRow();){var h={},y=0;y=_.isFunction(d.fieldCount)?d.fieldCount():d.fieldCount,_.times(y,function(e){var t=d.fieldName(e);h[t]=d.fieldByName(t)}),u.push(h),c++,d.next()}d.close(),o.close(),t.length=c,s=1===c?u[0]:u;break;case"delete":r="DELETE FROM "+a+" WHERE "+t.idAttribute+"=?",o=Ti.Database.open(n),o.execute(r,t.id),o.close(),t.id=null,s=t.toJSON()}s?(_.isFunction(i.success)&&i.success(s),"read"!==e||i.silent||t.trigger("fetch",{fromAdapter:!0})):_.isFunction(i.error)&&i.error(s)}function GetMigrationFor(e,t){var i=null,o=Ti.Database.open(e);o.execute("CREATE TABLE IF NOT EXISTS migrations (latest TEXT, model TEXT);");var r=o.execute("SELECT latest FROM migrations where model = ?;",t);return r.isValidRow()&&(i=r.field(0)+""),r.close(),o.close(),i}function Migrate(e){var t=e.migrations||[],i={};t.length&&t[t.length-1](i);var o=e.prototype.config;o.adapter.db_name=o.adapter.db_name||ALLOY_DB_DEFAULT;var r=new Migrator(o),a="undefined"==typeof o.adapter.migration||null===o.adapter.migration?i.id:o.adapter.migration;if("undefined"==typeof a||null===a){var l=Ti.Database.open(o.adapter.db_name);return r.db=l,r.createTable(o),void l.close()}a+="";var n,s=GetMigrationFor(o.adapter.db_name,o.adapter.collection_name);if(s!==a){if(s&&s>a?(n=0,t.reverse()):n=1,db=Ti.Database.open(o.adapter.db_name),r.db=db,db.execute("BEGIN;"),t.length)for(var d=0;d<t.length;d++){var c=t[d],u={};if(c(u),n){if(u.id>a)break;if(u.id<=s)continue}else{if(u.id<=a)break;if(u.id>s)continue}var h=n?"up":"down";_.isFunction(u[h])&&u[h](r)}else r.createTable(o);db.execute("DELETE FROM migrations where model = ?",o.adapter.collection_name),db.execute("INSERT INTO migrations VALUES (?,?)",a,o.adapter.collection_name),db.execute("COMMIT;"),db.close(),r.db=null}}function installDatabase(e){var t=e.adapter.db_file,i=e.adapter.collection_name,o=/(^|.*\/)([^\/]+)\.[^\/]+$/,r=t.match(o);if(null===r)throw'Invalid sql database filename "'+t+'"';e.adapter.db_name=e.adapter.db_name||r[2];var a=e.adapter.db_name;Ti.API.debug('Installing sql database "'+t+'" with name "'+a+'"');var l,n,s=Ti.Database.install(t,a),d=s.execute('pragma table_info("'+i+'");'),c={};if(d){for(;d.isValidRow();)l=d.fieldByName("name"),n=d.fieldByName("type"),c[l]=n,l!==ALLOY_ID_DEFAULT||e.adapter.idAttribute||(e.adapter.idAttribute=ALLOY_ID_DEFAULT),d.next();d.close()}else{e.adapter.idAttribute?e.adapter.idAttribute:ALLOY_ID_DEFAULT;for(var u in e.columns)l=u,n=e.columns[u],l!==ALLOY_ID_DEFAULT||e.adapter.idAttribute?u===e.adapter.idAttribute&&(n+=" UNIQUE"):e.adapter.idAttribute=ALLOY_ID_DEFAULT,c[l]=n}if(e.columns=c,e.adapter.idAttribute){if(!_.contains(_.keys(e.columns),e.adapter.idAttribute))throw'config.adapter.idAttribute "'+e.adapter.idAttribute+'" not found in list of columns for table "'+i+'"\ncolumns: ['+_.keys(e.columns).join(",")+"]"}else{Ti.API.info('No config.adapter.idAttribute specified for table "'+i+'"'),Ti.API.info('Adding "'+ALLOY_ID_DEFAULT+'" to uniquely identify rows');var h=[],y=[];_.each(e.columns,function(e,t){y.push(t),h.push(t+" "+e)});var w=y.join(",");s.execute("ALTER TABLE "+i+" RENAME TO "+i+"_temp;"),s.execute("CREATE TABLE "+i+"("+h.join(",")+","+ALLOY_ID_DEFAULT+" TEXT UNIQUE);"),s.execute("INSERT INTO "+i+"("+w+","+ALLOY_ID_DEFAULT+") SELECT "+w+",CAST(_ROWID_ AS TEXT) FROM "+i+"_temp;"),s.execute("DROP TABLE "+i+"_temp;"),e.columns[ALLOY_ID_DEFAULT]="TEXT UNIQUE",e.adapter.idAttribute=ALLOY_ID_DEFAULT}s.close()}var _=require("alloy/underscore")._,ALLOY_DB_DEFAULT="_alloy_",ALLOY_ID_DEFAULT="alloy_id",cache={config:{},Model:{}};module.exports.beforeModelCreate=function(e,t){if(cache.config[t])return cache.config[t];if("undefined"==typeof Ti.Database)throw"No support for Titanium.Database in MobileWeb environment.";return e.adapter.db_file&&installDatabase(e),e.adapter.idAttribute||(Ti.API.info('No config.adapter.idAttribute specified for table "'+e.adapter.collection_name+'"'),Ti.API.info('Adding "'+ALLOY_ID_DEFAULT+'" to uniquely identify rows'),e.columns[ALLOY_ID_DEFAULT]="TEXT UNIQUE",e.adapter.idAttribute=ALLOY_ID_DEFAULT),cache.config[t]=e,e},module.exports.afterModelCreate=function(e,t){return cache.Model[t]?cache.Model[t]:(e=e||{},e.prototype.idAttribute=e.prototype.config.adapter.idAttribute,Migrate(e),cache.Model[t]=e,e)},module.exports.sync=Sync;
=======
function S4() {
    return (0 | 65536 * (1 + Math.random())).toString(16).substring(1);
}

function guid() {
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}

function Migrator(config, transactionDb) {
    this.db = transactionDb;
    this.dbname = config.adapter.db_name;
    this.table = config.adapter.collection_name;
    this.idAttribute = config.adapter.idAttribute;
    this.column = function(name) {
        var parts = name.split(/\s+/);
        var type = parts[0];
        switch (type.toLowerCase()) {
          case "string":
          case "varchar":
          case "date":
          case "datetime":
            Ti.API.warn('"' + type + '" is not a valid sqlite field, using TEXT instead');

          case "text":
            type = "TEXT";
            break;

          case "int":
          case "tinyint":
          case "smallint":
          case "bigint":
          case "boolean":
            Ti.API.warn('"' + type + '" is not a valid sqlite field, using INTEGER instead');

          case "integer":
            type = "INTEGER";
            break;

          case "double":
          case "float":
          case "decimal":
          case "number":
            Ti.API.warn('"' + name + '" is not a valid sqlite field, using REAL instead');

          case "real":
            type = "REAL";
            break;

          case "blob":
            type = "BLOB";
            break;

          case "null":
            type = "NULL";
            break;

          default:
            type = "TEXT";
        }
        parts[0] = type;
        return parts.join(" ");
    };
    this.createTable = function(config) {
        var columns = [];
        var found = false;
        for (var k in config.columns) {
            k === this.idAttribute && (found = true);
            columns.push(k + " " + this.column(config.columns[k]));
        }
        found || this.idAttribute !== ALLOY_ID_DEFAULT || columns.push(ALLOY_ID_DEFAULT + " TEXT UNIQUE");
        var sql = "CREATE TABLE IF NOT EXISTS " + this.table + " ( " + columns.join(",") + ")";
        this.db.execute(sql);
    };
    this.dropTable = function() {
        this.db.execute("DROP TABLE IF EXISTS " + this.table);
    };
    this.insertRow = function(columnValues) {
        var columns = [];
        var values = [];
        var qs = [];
        var found = false;
        for (var key in columnValues) {
            key === this.idAttribute && (found = true);
            columns.push(key);
            values.push(columnValues[key]);
            qs.push("?");
        }
        if (!found && this.idAttribute === ALLOY_ID_DEFAULT) {
            columns.push(this.idAttribute);
            values.push(guid());
            qs.push("?");
        }
        this.db.execute("INSERT INTO " + this.table + " (" + columns.join(",") + ") VALUES (" + qs.join(",") + ");", values);
    };
    this.deleteRow = function(columns) {
        var sql = "DELETE FROM " + this.table;
        var keys = _.keys(columns);
        var len = keys.length;
        var conditions = [];
        var values = [];
        len && (sql += " WHERE ");
        for (var i = 0; len > i; i++) {
            conditions.push(keys[i] + " = ?");
            values.push(columns[keys[i]]);
        }
        sql += conditions.join(" AND ");
        this.db.execute(sql, values);
    };
}

function Sync(method, model, opts) {
    var db, sql, table = model.config.adapter.collection_name, columns = model.config.columns, dbName = model.config.adapter.db_name || ALLOY_DB_DEFAULT, resp = null;
    switch (method) {
      case "create":
      case "update":
        resp = function() {
            var attrObj = {};
            if (!model.id) {
                model.id = model.idAttribute === ALLOY_ID_DEFAULT ? guid() : null;
                attrObj[model.idAttribute] = model.id;
                model.set(attrObj, {
                    silent: true
                });
            }
            var names = [], values = [], q = [];
            for (var k in columns) {
                names.push(k);
                values.push(model.get(k));
                q.push("?");
            }
            sql = "REPLACE INTO " + table + " (" + names.join(",") + ") VALUES (" + q.join(",") + ");";
            db = Ti.Database.open(dbName);
            db.execute("BEGIN;");
            db.execute(sql, values);
            if (null === model.id) {
                var sqlId = "SELECT last_insert_rowid();";
                var rs = db.execute(sqlId);
                if (rs && rs.isValidRow()) {
                    model.id = rs.field(0);
                    attrObj[model.idAttribute] = model.id;
                    model.set(attrObj, {
                        silent: true
                    });
                } else Ti.API.warn("Unable to get ID from database for model: " + model.toJSON());
                rs && rs.close();
            }
            db.execute("COMMIT;");
            db.close();
            return model.toJSON();
        }();
        break;

      case "read":
        opts.query && opts.id && Ti.API.warn('Both "query" and "id" options were specified for model.fetch(). "id" will be ignored.');
        sql = "SELECT * FROM " + table;
        opts.query ? sql = opts.query : opts.id && (sql += " WHERE " + model.idAttribute + " = " + opts.id);
        db = Ti.Database.open(dbName);
        var rs;
        rs = _.isString(sql) ? db.execute(sql) : db.execute(sql.statement, sql.params);
        var len = 0;
        var values = [];
        while (rs.isValidRow()) {
            var o = {};
            var fc = 0;
            fc = _.isFunction(rs.fieldCount) ? rs.fieldCount() : rs.fieldCount;
            _.times(fc, function(c) {
                var fn = rs.fieldName(c);
                o[fn] = rs.fieldByName(fn);
            });
            values.push(o);
            len++;
            rs.next();
        }
        rs.close();
        db.close();
        model.length = len;
        resp = 1 === len ? values[0] : values;
        break;

      case "delete":
        sql = "DELETE FROM " + table + " WHERE " + model.idAttribute + "=?";
        db = Ti.Database.open(dbName);
        db.execute(sql, model.id);
        db.close();
        model.id = null;
        resp = model.toJSON();
    }
    if (resp) {
        _.isFunction(opts.success) && opts.success(resp);
        "read" !== method || opts.silent || model.trigger("fetch", {
            fromAdapter: true
        });
    } else _.isFunction(opts.error) && opts.error(resp);
}

function GetMigrationFor(dbname, table) {
    var mid = null;
    var db = Ti.Database.open(dbname);
    db.execute("CREATE TABLE IF NOT EXISTS migrations (latest TEXT, model TEXT);");
    var rs = db.execute("SELECT latest FROM migrations where model = ?;", table);
    rs.isValidRow() && (mid = rs.field(0) + "");
    rs.close();
    db.close();
    return mid;
}

function Migrate(Model) {
    var migrations = Model.migrations || [];
    var lastMigration = {};
    migrations.length && migrations[migrations.length - 1](lastMigration);
    var config = Model.prototype.config;
    config.adapter.db_name = config.adapter.db_name || ALLOY_DB_DEFAULT;
    var migrator = new Migrator(config);
    var targetNumber = "undefined" == typeof config.adapter.migration || null === config.adapter.migration ? lastMigration.id : config.adapter.migration;
    if ("undefined" == typeof targetNumber || null === targetNumber) {
        var tmpDb = Ti.Database.open(config.adapter.db_name);
        migrator.db = tmpDb;
        migrator.createTable(config);
        tmpDb.close();
        return;
    }
    targetNumber += "";
    var currentNumber = GetMigrationFor(config.adapter.db_name, config.adapter.collection_name);
    var direction;
    if (currentNumber === targetNumber) return;
    if (currentNumber && currentNumber > targetNumber) {
        direction = 0;
        migrations.reverse();
    } else direction = 1;
    db = Ti.Database.open(config.adapter.db_name);
    migrator.db = db;
    db.execute("BEGIN;");
    if (migrations.length) for (var i = 0; migrations.length > i; i++) {
        var migration = migrations[i];
        var context = {};
        migration(context);
        if (direction) {
            if (context.id > targetNumber) break;
            if (currentNumber >= context.id) continue;
        } else {
            if (targetNumber >= context.id) break;
            if (context.id > currentNumber) continue;
        }
        var funcName = direction ? "up" : "down";
        _.isFunction(context[funcName]) && context[funcName](migrator);
    } else migrator.createTable(config);
    db.execute("DELETE FROM migrations where model = ?", config.adapter.collection_name);
    db.execute("INSERT INTO migrations VALUES (?,?)", targetNumber, config.adapter.collection_name);
    db.execute("COMMIT;");
    db.close();
    migrator.db = null;
}

function installDatabase(config) {
    var dbFile = config.adapter.db_file;
    var table = config.adapter.collection_name;
    var rx = /(^|.*\/)([^\/]+)\.[^\/]+$/;
    var match = dbFile.match(rx);
    if (null === match) throw 'Invalid sql database filename "' + dbFile + '"';
    config.adapter.db_name = config.adapter.db_name || match[2];
    var dbName = config.adapter.db_name;
    Ti.API.debug('Installing sql database "' + dbFile + '" with name "' + dbName + '"');
    var db = Ti.Database.install(dbFile, dbName);
    if (false === config.adapter.remoteBackup && false) {
        Ti.API.debug('iCloud "do not backup" flag set for database "' + dbFile + '"');
        db.file.setRemoteBackup(false);
    }
    var rs = db.execute('pragma table_info("' + table + '");');
    var columns = {};
    while (rs.isValidRow()) {
        var cName = rs.fieldByName("name");
        var cType = rs.fieldByName("type");
        columns[cName] = cType;
        cName !== ALLOY_ID_DEFAULT || config.adapter.idAttribute || (config.adapter.idAttribute = ALLOY_ID_DEFAULT);
        rs.next();
    }
    config.columns = columns;
    rs.close();
    if (config.adapter.idAttribute) {
        if (!_.contains(_.keys(config.columns), config.adapter.idAttribute)) throw 'config.adapter.idAttribute "' + config.adapter.idAttribute + '" not found in list of columns for table "' + table + '"\n' + "columns: [" + _.keys(config.columns).join(",") + "]";
    } else {
        Ti.API.info('No config.adapter.idAttribute specified for table "' + table + '"');
        Ti.API.info('Adding "' + ALLOY_ID_DEFAULT + '" to uniquely identify rows');
        var fullStrings = [], colStrings = [];
        _.each(config.columns, function(type, name) {
            colStrings.push(name);
            fullStrings.push(name + " " + type);
        });
        var colsString = colStrings.join(",");
        db.execute("ALTER TABLE " + table + " RENAME TO " + table + "_temp;");
        db.execute("CREATE TABLE " + table + "(" + fullStrings.join(",") + "," + ALLOY_ID_DEFAULT + " TEXT UNIQUE);");
        db.execute("INSERT INTO " + table + "(" + colsString + "," + ALLOY_ID_DEFAULT + ") SELECT " + colsString + ",CAST(_ROWID_ AS TEXT) FROM " + table + "_temp;");
        db.execute("DROP TABLE " + table + "_temp;");
        config.columns[ALLOY_ID_DEFAULT] = "TEXT UNIQUE";
        config.adapter.idAttribute = ALLOY_ID_DEFAULT;
    }
    db.close();
}

var _ = require("alloy/underscore")._;

var ALLOY_DB_DEFAULT = "_alloy_";

var ALLOY_ID_DEFAULT = "alloy_id";

var cache = {
    config: {},
    Model: {}
};

module.exports.beforeModelCreate = function(config, name) {
    if (cache.config[name]) return cache.config[name];
    if (false || "undefined" == typeof Ti.Database) throw "No support for Titanium.Database in MobileWeb environment.";
    config.adapter.db_file && installDatabase(config);
    if (!config.adapter.idAttribute) {
        Ti.API.info('No config.adapter.idAttribute specified for table "' + config.adapter.collection_name + '"');
        Ti.API.info('Adding "' + ALLOY_ID_DEFAULT + '" to uniquely identify rows');
        config.columns[ALLOY_ID_DEFAULT] = "TEXT UNIQUE";
        config.adapter.idAttribute = ALLOY_ID_DEFAULT;
    }
    cache.config[name] = config;
    return config;
};

module.exports.afterModelCreate = function(Model, name) {
    if (cache.Model[name]) return cache.Model[name];
    Model = Model || {};
    Model.prototype.idAttribute = Model.prototype.config.adapter.idAttribute;
    Migrate(Model);
    cache.Model[name] = Model;
    return Model;
};

module.exports.sync = Sync;
>>>>>>> FETCH_HEAD
