import DS from 'ember-data';

export default DS.Model.extend({
  artistId: DS.attr('number'),
  artistName: DS.attr('string'),
  artistImg: DS.attr('string'),
  // show_id: DS.attr('number'),
  show: DS.belongsTo('show', {
    async: false
  })
});
