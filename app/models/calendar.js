import DS from 'ember-data';

export default DS.Model.extend({
  isDone: DS.attr('boolean'),
  event_id: DS.attr('number'),
  user: DS.belongsTo('user'),
  show: DS.belongsTo('show'),
  show_id: DS.attr('number'),
});
