import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['event-carousel-outer'],

  slideFrom: 0,
  slideTo: 0,
  slideClick: false,

  uniqueArtists: Ember.computed.uniqBy('model.event', 'headlineArtist'),
  sortedEvents: Ember.computed.sort('uniqueArtists', 'sortAttrs'),
  sortAttrs: ['popularity:desc'],

  updateSlideNumber: (function() {
    let slideFrom = this.get('slideFrom');
    let slideTo = this.get('slideTo');
    let slideClick = this.get('slideClick');
    this.set('slideFrom', slideFrom);
    this.set('slideTo', slideTo);

    if (slideFrom === 4 && slideTo === 0) {
      if (slideClick === false) {
        Ember.$(".carousel").carousel('next');
      } else {
        Ember.$(".carousel").carousel(slideTo);
      }
    }
    else if (slideFrom === 0 && slideTo === 4) {
      if (slideClick === false) {
        Ember.$(".carousel").carousel('prev');
    } else {
        Ember.$(".carousel").carousel(slideTo);
      }
    } else {
      Ember.$(".carousel").carousel(slideTo);
    }
  }).observes('slideTo'),

  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.$(".carousel").carousel({
        interval: false
      });
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('.carousel').off('.carousel');
  }
});
