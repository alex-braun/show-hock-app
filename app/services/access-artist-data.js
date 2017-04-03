import Ember from 'ember';

export default Ember.Service.extend({
  artistName: null,
  artistId: null,

  addName(param) {
    return this.set('artistName', param);

  },

  addId(param) {
    return this.set('artistId', param);
  }
});


// addName(param) {
//   return Ember.RSVP.hash({
//     artistName: this.set('artistParam', param),
//     // .then(response => {
//     //   return this.set('clientIp', response.ip);
//     // }),
//
// });
// }
