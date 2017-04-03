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
  regionId: null,
  regionName: null,
  state: null,
  country: null,


  // init() {
  //   this.set('clientIp', null);
  //   this.set('regionId', null);
  //   this.set('regionName', null);
  // },

  getIp() {
    return Ember.RSVP.hash({
      clientIp: Ember.$.ajax({
          method: 'GET',
          url: "http://ipinfo.io/json"
        })
        .then(response => {
          // this.set('city', response.city);
          // this.set('region', response.region);
          // this.set('country', response.country);
          return this.set('clientIp', response.ip);
        }),

    });
  },

  getRegion(ip) {
    return this.get('store').query('location', { ip: ip } )
    .then(response => {
      let id = response.content[0].id;
      let regionName = response.content[0]._data.metroArea.displayName;
      let state = response.content[0]._data.metroArea.state.displayName;
      let country = response.content[0]._data.metroArea.country.displayName;
      return this.set('regionId', id),
             this.set('regionName', regionName),
             this.set('state', state),
             this.set('country', country);
    });
  },
});
