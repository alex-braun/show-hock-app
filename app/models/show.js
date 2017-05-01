import DS from 'ember-data';

export default DS.Model.extend({
  eventId: DS.attr('number'),
  eventName: DS.attr('string'),
  // artists: DS.attr(),
  regionId: DS.attr('number'),
  regionName: DS.attr('string'),
  venueId: DS.attr('number'),
  venueName: DS.attr('string'),
  start: DS.attr(),
  end: DS.attr(),
  city: DS.attr('string'),
  type: DS.attr('string'),

  users: DS.hasMany('user', {
    async: false
  }),
  calendars: DS.hasMany('calendar', {
    async: false
  }),
  performers: DS.hasMany('performer', {
    async: false
  })
});
