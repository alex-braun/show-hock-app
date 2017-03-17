import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['pagination-wrapper'],
//create an array of all page values
  pageNumbers: Ember.computed('pages.current_page', function() {
    let num = Array(this.get('pages.total_pages'));
    for (let i = 0; i < num.length; i++) {
      num[i] = i + 1;
    }
    return num;
  }),
//next button
  showNext: Ember.computed('pages.current_page', function() {
    return (this.get('pages.current_page') < this.get('pages.total_pages'));
  }),
//previous button
  showPrevious: Ember.computed('pages.current_page', function() {
    return (this.get('pages.current_page') > 1);
  }),

  actions: {

    newPage(page) {
      this.sendAction('newPage', page);
    },


    nextPage(page, total) {
      if (page < total) {
        let next = page + 1;
        this.sendAction('nextPage', next);
      }
    },

    previousPage(page) {
      if (page > 1) {
        let prev = page - 1;
        this.sendAction('previousPage', prev);
      }
    },

    pageClicked(pageNum) {
      this.set('pages.current_page', pageNum);
    }
  }
});
