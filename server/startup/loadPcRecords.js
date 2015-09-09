Meteor.startup(function () {

  if (PcRecords.find().count() === 0) {

    var defaultPcRecords = [

      {'name': 'Dubstep-Free Zone',

        'description': 'Fast just got faster with Nexus S.'},

      {'name': 'All dubstep all the time',

        'description': 'Get it on!'},

      {'name': 'Savage lounging',

        'description': 'Leisure suit required. And only fiercest manners.'}

    ];

    for (var i = 0; i < defaultPcRecords.length; i++)
      PcRecords.insert({
          name: defaultPcRecords[i].name,
          description: defaultPcRecords[i].description
        });
  }

});