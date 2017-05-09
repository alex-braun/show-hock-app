import DS from 'ember-data';

export default DS.Model.extend({
  isDone: DS.attr('boolean'),
  eventId: DS.attr('number'),
  user: DS.belongsTo('user', {
    inverse: 'calendars'
  }),
  show: DS.belongsTo('show', {
    inverse: 'calendars'
  }),
  endDate: DS.attr(),
  expired: DS.attr('boolean')
});
