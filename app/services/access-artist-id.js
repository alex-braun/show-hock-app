import Ember from 'ember';

export default Ember.Service.extend({

parameter: null,

add(param) {
  return this.set('parameter', param);
},

getId() {
  // return Ember.RSVP.hash({
  //   return this.get()
        // this.set('city', response.city);
        // this.set('region', response.region);
        // this.set('country', response.country);
      //   this.set('clientIp', response.ip);
      // })
  // });
  }
});
