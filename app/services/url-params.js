import Ember from 'ember';

const { computed: { alias }, observer } = Ember;

export default Ember.Service.extend({

  routing: Ember.inject.service('-routing'),
  params: alias('routing.router.currentState.routerJsState.fullQueryParams'),

  urlObj: null,

  // init() {
  //   this._super(...arguments);
  //   this.set('urlObj', null);
  // },

  getParams() {
    let paramsObj = this.get('params');
    return this.set('urlObj', paramsObj);
  }
});
