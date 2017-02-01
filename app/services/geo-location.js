import Ember from 'ember';
// import ENV from 'show-hock-app/config/environment';

export default Ember.Service.extend({
// events: Ember.inject.service('region-events-onload'),

///UNCOMMENT THIS WHEN YOU ARE READY!!!
  city: null,
  region: null,
  country: null,

  init() {

    $.ajax({
      method: 'GET',
      url: "http://ipinfo.io/json"
    })
    .done(response => {
      this.set('city', response.city);
      this.set('region', response.region);
      this.set('country', response.country);
    });
  }

});
