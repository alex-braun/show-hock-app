import Ember from 'ember';

export default Ember.Service.extend({

store: Ember.inject.service('store'),

  clientIp: null,
  regionId: null,
  regionName: null,
  state: null,
  country: null,

  // getIp() {
  //   return Ember.RSVP.hash({
  //     clientIp: Ember.$.ajax({
  //         method: 'GET',
  //         url: "http://ipinfo.io/json"
  //       })
  //       .then(response => {
  //         console.log(response);
  //         return this.set('clientIp', response.ip);
  //       }),
  //
  //   });
  // },

  getIp() {
      return Ember.$.ajax({
          method: 'GET',
          url: "http://ipinfo.io/json"
        })
        .then(response => {
          return this.set('clientIp', response.ip);
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
