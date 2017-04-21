import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['popular-artists'],

  userLocationSetting: Ember.inject.service(),

  uniqueArtists: Ember.computed.uniqBy('events', 'headlineArtist'),
  sortedEvents: Ember.computed.sort('uniqueArtists', 'sortAttrs'),
  sortAttrs: ['popularity:desc'],
  mostPop: Ember.computed('sortedEvents', function() {
    let arr = (this.get('sortedEvents'));
    let num;
    if (arr.length > 50) {
      num = 50;
    } else {
      num = arr.length;
    }
    return arr.slice(0, num);
  }),
});
