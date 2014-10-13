exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER",
		    "cate_id": "TEXT",
		    "tag": "TEXT"
		},
		adapter: {
			type: "sql",
			collection_name: "category_type"
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
			getCategoryTypeByCategory : function(cate_id){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE cate_id='"+ cate_id+ "'" ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    id: res.fieldByName('id'),
					    tag: res.fieldByName('tag') 
					};
					res.next();
					count++;
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			resetCategoryType : function(cate_id){
				var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name+ " WHERE cate_id='"+ cate_id+ "'" ;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger('sync');
			}
		});

		return Collection;
	}
};