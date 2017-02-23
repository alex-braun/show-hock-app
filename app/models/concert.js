import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  displayName: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  uri: DS.attr(),
  performance: DS.attr(),
  venue: DS.attr(),
});

//
// type festival or concert
// displayName {concert name}
// start
// end
// uri {link to tickets}
// performance {artist stuff}
// venue {lat, lng}
//
//
// "lat": 33.2723181,
// "uri": "http://www.songkick.com/venues/3092014-rawhide-event-center?utm_source=42541&utm_medium=partner",
// "lng": -111.9749045,
// "id": 3092014
