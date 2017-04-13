import Ember from 'ember';

export default Ember.Service.extend({

  regionName: null,
  regionId: null,

  saveUserLocation: Ember.inject.service(),
  geoLocation: Ember.inject.service(),

  getRegion() {
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
        return this.get('geoLocation').getIp()
        .then(() => {
        return this.set('regionName', this.get('saveUserLocation').regionSelectName),
        this.set('regionId', this.get('saveUserLocation').regionSelectId);
      });
      }
  }
});