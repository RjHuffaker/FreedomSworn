Meteor.publish("pcRecords", function () {
  return PcRecords.find({});
});