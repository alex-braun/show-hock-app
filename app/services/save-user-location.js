import Ember from 'ember';

export default Ember.Service.extend({
  regionSelectName: null,
  regionSelectId: null,
  regionSelectCountry: null,
  regionSelectState: null,

  cookies: Ember.inject.service(),
///GET THE USER'S PREFERRED LOCATION
  getRegionSelect() {
    let cookieService = this.get('cookies');
    let cookies = cookieService.read();
    if (!cookies.loc) {

      return this.set('regionSelectName', null),
             this.set('regionSelectId', null),
             this.set('regionSelectCountry', null),
             this.set('regionSelectState', null);
    } else {
      return this.set('regionSelectName', cookies.loc),
             this.set('regionSelectId', cookies.region_id),
             this.set('regionSelectCountry', cookies.region_country),
             this.set('regionSelectState', cookies.region_state);
    }
  },
///SAVE THE USER'S PREFERRED LOCATION
  saveRegionSelect(region, id, country, state) {
      let cookieService = this.get('cookies');
      cookieService.clear('loc');
      cookieService.clear('region_id');
      cookieService.clear('region_country');
      cookieService.clear('region_state');
      cookieService.write('loc', region);
      cookieService.write('region_id', id);
      cookieService.write('region_country', country);
      cookieService.write('region_state', state);
      let cookies = cookieService.read();
        return this.set('regionSelectName', cookies.loc),
        this.set('regionSelectId', cookies.region_id),
        this.set('regionSelectCountry', cookies.region_country),
        this.set('regionSelectState', cookies.region_state);
  },
});
