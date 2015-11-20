PcRecords = new Mongo.Collection("pcRecords");

PcRecords.allow({
	insert: function (userId, pcRecord) {
    return userId && pcRecord.owner === userId;
  },
  update: function (userId, pcRecord, fields, modifier) {
    return userId && pcRecord.owner === userId;
  },
  remove: function (userId, pcRecord) {
    return userId && pcRecord.owner === userId;
  }
});