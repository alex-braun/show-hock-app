import Ember from 'ember';

export default Ember.Service.extend({
  regionSelectName: null,
  regionSelectId: null,
  regionSelectCountry: null,
  regionSelectState: null,

  cookies: Ember.inject.service(),

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

  saveRegionSelect(region, id, country, state) {
      let cookieService = this.get('cookies');
      cookieService.write('loc', region);
      cookieService.write('region_id', id);
      cookieService.write('region_country', country);
      // if (!state) {
      //   cookieService.write('region_state', 'none');
      // } else {
        cookieService.write('region_state', state);
      // }
      let cookies = cookieService.read();
        return this.set('regionSelectName', cookies.loc),
        this.set('regionSelectId', cookies.region_id),
        this.set('regionSelectCountry', cookies.region_country),
        this.set('regionSelectState', cookies.region_state);
  },
});
