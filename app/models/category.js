exports.definition = {
	config: {
		columns: {
		    "id": "INTEGER",
		    "name": "TEXT",
		    "type": "TEXT",
		    "position": "INTEGER",
		    "description": "TEXT",
		    "image": "TEXT"
		    
		},
		adapter: {
			type: "sql",
			collection_name: "category"
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
			getCategoryList: function(){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name +" order by position";
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){
					listArr[count] = {
					    id: res.fieldByName('id'),
					    name: res.fieldByName('name'),
					    type: res.fieldByName('type'),
					    image: res.fieldByName('image'),
					    description: res.fieldByName('description')
					};
					res.next();
					count++;
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			getCategoryListByType: function(type, from){
				if(typeof from === "undefined"){
					
					from = 0;
				}
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name +" WHERE type='" + type + "' order by position LIMIT "+ from +", 300";
 				
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var listArr = []; 
                var count = 0;
                while (res.isValidRow()){ 
                	if(res.fieldByName('id') != ""){
                		listArr[count] = {
						    id: res.fieldByName('id'),
						    name: res.fieldByName('name'),
						    type: res.fieldByName('type'),
						    image: res.fieldByName('image'),
						    description: res.fieldByName('description')
						};
                	}
					
					res.next();
					count++;
				}
				 
				res.close();
                db.close();
                collection.trigger('sync');
                return listArr;
			},
			getCategoryByIdOnly : function(id){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='"+ id+ "' order by position";
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = []; 
              
                if (res.isValidRow()){ 
                		arr = {
						    id: res.fieldByName('id'),
						    name: res.fieldByName('name'),
						    type: res.fieldByName('type'),
						    image: res.fieldByName('image'),
						    description: res.fieldByName('description') 
						};
                 
				} 
				 
				res.close();
                db.close();
                collection.trigger('sync');
                return arr;
			},
			getCategoryById : function(id,cateType, from){
				if(typeof from === "undefined"){
					from = 0;
				}
				var collection = this; 
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE id='"+ id+ "' AND `type` = '"+cateType+"' order by position LIMIT "+ from +", 300";
 
          
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = []; 
              
                if (res.isValidRow()){ 
                		arr = {
						    id: res.fieldByName('id'),
						    name: res.fieldByName('name'),
						    type: res.fieldByName('type'),
						    image: res.fieldByName('image'),
						    description: res.fieldByName('description') 
						};
                 
				} 
				 
				res.close();
                db.close();
                collection.trigger('sync');
                return arr;
			},
			resetCategory : function(){
				var collection = this;
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
                collection.trigger('sync');
			},
			getCategoryByType : function(type){
				var collection = this;
                var sql = "SELECT * FROM " + collection.config.adapter.collection_name + " WHERE type='"+ type + "'" ;
                
                db = Ti.Database.open(collection.config.adapter.db_name);
                var res = db.execute(sql);
                var arr = []; 
               
                if (res.isValidRow()){
					arr = {
					    id: res.fieldByName('id'),
					    name: res.fieldByName('name'),
					    type: res.fieldByName('type'),
					    image: res.fieldByName('image'),
					    description: res.fieldByName('description') 
					};
					
				} 
				res.close();
                db.close();
                collection.trigger('sync');
                return arr;
			},
		});

		return Collection;
	}
};