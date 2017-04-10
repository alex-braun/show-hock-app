import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    regionSearch(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.transitionTo('user.change-location.results', param);
      }
    }
  },
});
