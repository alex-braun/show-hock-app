import Ember from 'ember';

export default Ember.Route.extend({

  // accessArtistData: Ember.inject.service(),
  //
  // queryParams: {
  //   concertId: {
  //     refreshModel: true
  //   },
  // },
  //
  model (param) {
    // return this.get('store').query('concert', params);
    return this.get('store').findRecord('concert', param.concert_id);

  },
});
