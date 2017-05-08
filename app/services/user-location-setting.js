import Ember from 'ember';

export default Ember.Service.extend({

  regionName: null,
  regionId: null,
  regionCountry: null,
  regionState: null,

  saveUserLocation: Ember.inject.service(),
  geoLocation: Ember.inject.service(),
///CALL TO GET COOKIES.  IF NO USER LOCATION COOKIES, GET THE IP ADDRESS.
  getRegion() {
    let self = this;
    this.get('saveUserLocation').getRegionSelect();
    let region = this.get('saveUserLocation').regionSelectName;
    if (region === null || region === undefined) {

      return this.get('geoLocation').getIp()
      .then(() => {
        if (this.get('geoLocation').clientIp !== 404) {
          return this.get('geoLocation').getRegion(this.get('geoLocation').clientIp);
        } else {
          return;
        }
      })
///IF THE CLIENT IP CANNOT BE ASCERTAINED, DEFAULT TO N.Y.C.
        .then(() => {
          if (this.get('geoLocation').clientIp !== 404) {
          return this.set('regionName', this.get('geoLocation').regionName),
                 this.set('regionId', this.get('geoLocation').regionId),
                 this.set('regionCountry', this.get('geoLocation').regionCountry),
                 this.set('regionState', this.get('geoLocation').regionState);
        } else {
          return this.set('regionName', 'New York'),
                 this.set('regionId', '7644'),
                 this.set('regionCountry', 'US'),
                 this.set('regionState', 'NY');
        }
        });
    }
///NEEEDS TO RETURN A PROMISE WITH COOKIE DATA.
    else {
      return new Ember.RSVP.Promise((resolve) => {
        resolve(self.set('regionName', self.get('saveUserLocation').regionSelectName),
        self.set('regionId', self.get('saveUserLocation').regionSelectId),
        self.set('regionCountry', self.get('saveUserLocation').regionSelectCountry),
        self.set('regionState', self.get('saveUserLocation').regionSelectState)
      );
    });
    }
  }
});
