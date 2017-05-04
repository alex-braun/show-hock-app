import DS from 'ember-data';

export default DS.Model.extend({
  eventId: DS.attr('number'),
  eventName: DS.attr('string'),
  eventLink: DS.attr('string'),
  regionId: DS.attr('number'),
  regionName: DS.attr('string'),
  venueId: DS.attr('number'),
  venueName: DS.attr('string'),
  startDate: DS.attr(),
  endDate: DS.attr(),
  expired: DS.attr('boolean'),
  city: DS.attr('string'),
  type: DS.attr('string'),
  users: DS.hasMany('user'),
  calendars: DS.hasMany('calendar'),
  performers: DS.hasMany('performer')
});
