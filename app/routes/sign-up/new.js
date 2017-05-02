import Ember from 'ember';

export default Ember.Route.extend({

  model(event) {
    return this.get('store').findRecord('concert', event.concert_id);
  }
});
