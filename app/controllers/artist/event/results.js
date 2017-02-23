import Ember from 'ember';

export default Ember.Controller.extend({
  //
  // queryParams: ['page'],
  // page: 'page',
  //
  // actions: {
  //   changeArtistPage(param) {
  //     this.set('page', param);
  //   },
  //
  //   previousPage(param) {
  //     this.set('page', param);
  //   },
  //
  //   nextPage(param) {
  //     this.set('page', param);
  //   },
  // }
  // actions: {
  //   changeArtistPage() {
  //     this.sendAction('changeArtistPage');
  //   },
  //
  //   previousPage() {
  //     this.sendAction('previousPage');
  //   },
  //
  //   nextPage() {
  //     this.sendAction('nextPage');
  //   }
  // }
  // {{pagination-bar pages=model.event.meta
  //                 newPage='changeArtistPage'
  //                 previousPage='previousPage'
  //                 nextPage='nextPage'}}
});


// pageNumbers: Ember.computed('pages.current_page', function() {
//   let num = Array(this.get('pages.total_pages'));
//   for (let i = 0; i < num.length; i++) {
//     num[i] = i + 1;
//   }
//   return num;
// }),
