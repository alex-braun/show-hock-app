import DS from 'ember-data';

export default DS.Model.extend({
  artist_id: DS.attr('number'),
  artist_name: DS.attr('string'),
  artist_img: DS.attr('string'),
  show_id: DS.attr('number')
});
