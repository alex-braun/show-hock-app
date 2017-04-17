import Ember from 'ember';

export default Ember.Service.extend({

  regionName: null,
  regionId: null,

  saveUserLocation: Ember.inject.service(),
  geoLocation: Ember.inject.service(),

  getRegion() {
    let self = this;
    this.get('saveUserLocation').getRegionSelect();
    let region = this.get('saveUserLocation').regionSelectName;

    if (region === null || region === undefined) {

      return this.get('geoLocation').getIp()
      .then(() =>
        this.get('geoLocation').getRegion(this.get('geoLocation').clientIp))
        .then(() => {
          this.set('regionName', this.get('geoLocation').regionName);
          this.set('regionId', this.get('geoLocation').regionId);
        });
    }
    else {
      return new Ember.RSVP.Promise(function(resolve, reject) {
      // .then(() => {
      // return this.set('regionName', this.get('saveUserLocation').regionSelectName),
      // this.set('regionId', this.get('saveUserLocation').regionSelectId);
      resolve(self.set('regionName', self.get('saveUserLocation').regionSelectName),
      self.set('regionId', self.get('saveUserLocation').regionSelectId));
      // });
    });
    }
  }
});
