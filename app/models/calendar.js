import DS from 'ember-data';

export default DS.Model.extend({
  isDone: DS.attr('boolean'),
  eventId: DS.attr('number'),
  user: DS.belongsTo('user'),
  show: DS.belongsTo('show'),
  // showId: DS.attr('number'),
});
