import DS from 'ember-data';

export default DS.Model.extend({
  event_id: DS.attr('number'),
  event_name: DS.attr('string'),
  // artists: DS.attr(),
  region_id: DS.attr('number'),
  region_name: DS.attr('string'),
  venue_id: DS.attr('number'),
  venue_name: DS.attr('string'),
  start: DS.attr(),
  end: DS.attr(),
  city: DS.attr('string'),
  users: DS.hasMany('user'),
  performers: DS.hasMany('performer')
});
