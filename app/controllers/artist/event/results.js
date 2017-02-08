import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['page'],
  page: 'page',

  // others: Ember.computed('model.similar.length', function() {
  //   let num = Array(this.get('model.similar.length'));
  //   for (let i = 0; i < num.length; i++) {
  //     num[i] = i + 1;
  //   }
  //   return num;
  // }),

  actions: {
    changeArtistPage(param) {
      this.set('page', param);
    },

    previousPage(param) {
      this.set('page', param);
    },

    nextPage(param) {
      this.set('page', param);
    },
  }
});


// pageNumbers: Ember.computed('pages.current_page', function() {
//   let num = Array(this.get('pages.total_pages'));
//   for (let i = 0; i < num.length; i++) {
//     num[i] = i + 1;
//   }
//   return num;
// }),
