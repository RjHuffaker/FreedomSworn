Meteor.publish("featureDecks", function(params){
  return FeatureDecks.find(params);
});