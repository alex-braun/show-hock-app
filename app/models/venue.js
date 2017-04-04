import DS from 'ember-data';

export default DS.Model.extend({
  phone: DS.attr(),
  displayName: DS.attr(),
  capacity: DS.attr(),
  city: DS.attr(),
  zip: DS.attr(),
  description: DS.attr(),
  lat: DS.attr(),
  lng: DS.attr(),
  website: DS.attr(),
  street: DS.attr(),
  metroArea: DS.attr(),
  imageUrl: DS.attr()
});
