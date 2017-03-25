import Ember from 'ember';
// import ENV from 'show-hock-app/config/environment';

export default Ember.Service.extend({
// events: Ember.inject.service('region-events-onload'),
store: Ember.inject.service('store'),

///UNCOMMENT THIS WHEN YOU ARE READY!!!
  // city: null,
  // region: null,
  // country: null,
  clientIp: null,


  init() {
    this.set('clientIp', null);
  },

  getIp() {
    return Ember.RSVP.hash({
      clientIp: $.ajax({
          method: 'GET',
          url: "http://ipinfo.io/json"
        })
        .then(response => {
          // this.set('city', response.city);
          // this.set('region', response.region);
          // this.set('country', response.country);
          this.set('clientIp', response.ip);
        }),

    });
  },

  getRegion() {
    let ip = this.get('clientIp');
    if (ip === null) {
      return Ember.RSVP.hash({
        clientIp: $.ajax({
            method: 'GET',
            url: "http://ipinfo.io/json"
          })
          .then(response => {
            this.set('clientIp', response.ip);
            this.get('store').query('location', { ip: response.ip }).then(response => {
              console.log(response);
              return response;
            });
          }),
      });
    } else {
      this.get('store').query('location', { ip: ip }).then(response => {
        console.log(response);
        return response;
      });
    }
  },
});
