import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  shows: DS.hasMany('show', { async: true }),
  calendars: DS.hasMany('calendar')
});
