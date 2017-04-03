import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['events-carousel'],

  slideFrom: 0,
  slideTo: 0,
  slideClick: false,

  uniqueArtists: Ember.computed.uniqBy('events', 'headlineArtist'),
  sortedEvents: Ember.computed.sort('uniqueArtists', 'sortAttrs'),
  sortAttrs: ['popularity:desc'],

  didInsertElement: function() {
    let self = this;
    let clicked = false;
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.$(".carousel").carousel({
        interval: 4000
      });

      this.$('.carousel-indicators li').click(function() {
        clicked = true;
      });

      this.$(".carousel").carousel('pause');

      this.$(".carousel").bind('slide.bs.carousel', function (e) {
        if (clicked) {
          self.set('slideClick', true);
        } else {
          self.set('slideClick', false);
        }
        let slideFrom = Ember.$(this).find('.active').index();
        let slideTo = Ember.$(e.relatedTarget).index();
        self.set('slideFrom', slideFrom);
        self.set('slideTo', slideTo);
        clicked = false;
      });
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('.carousel').off('.carousel');
  }
});
