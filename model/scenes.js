Scenes = new Mongo.Collection("scenes");

Scenes.allow({
	insert: function(userId, scene){
    return userId && scene.owner === userId;
  },
  update: function(userId, scene, fields, modifier){
    return userId && scene.owner === userId;
  },
  remove: function(userId, scene){
    return userId && scene.owner === userId;
  }
});