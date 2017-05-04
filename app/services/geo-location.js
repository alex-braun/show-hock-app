import Ember from 'ember';

export default Ember.Service.extend({

store: Ember.inject.service('store'),

  clientIp: null,
  regionId: null,
  regionName: null,
  regionState: null,
  regionCountry: null,
///Get client ip, unless preferred location is stored in cookies.
  getIp() {
    let self = this;
    if (this.get('clientIp') === null) {
      return Ember.$.ajax({
          method: 'GET',
          url: "https://ipinfo.io/json"
        })
        .then(response => {
          return this.set('clientIp', response.ip);
        })
        .catch(() => { return this.set('clientIp', 404); });
    } else {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          resolve(self.get('clientIp'));
          reject(self.get('clientIp'));
        });
    }
  },
////Use the returned client ip to get the region id from songkick
  getRegion(ip) {
    return this.get('store').query('location', { ip: ip } )
    .then(response => {
      let id = response.content[0].id;
      let regionName = response.content[0]._data.metroArea.displayName;
      let state = response.content[0]._data.metroArea.state.displayName;
      let country = response.content[0]._data.metroArea.country.displayName;
      return this.set('regionId', id),
             this.set('regionName', regionName),
             this.set('regionState', state),
             this.set('regionCountry', country);
    });
  },
});
