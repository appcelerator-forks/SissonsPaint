exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER",
		    "ctype": "TEXT"
		},
		adapter: {
			type: "sql",
			collection_name: "type"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			getType : function(){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " ORDER BY id " ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    id: res.fieldByName('id'),
					    ctype: res.fieldByName('ctype') 
					};
					res.next();
					count++;
				}
				console.log(listArr); 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			resetType : function(){
				var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger('sync');
			}
		});

		return Collection;
	}
};