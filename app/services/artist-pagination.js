import Ember from 'ember';

export default Ember.Service.extend({

  pageNum: null,

  setPage(param) {
    this.set('pageNum', param);
  },

  getPage() {
    this.get('pageNum');
  }
});
