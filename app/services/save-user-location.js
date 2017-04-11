import Ember from 'ember';

export default Ember.Service.extend({
  regionSelectName: null,
  regionSelectId: null,

  cookies: Ember.inject.service(),

  getRegionSelect() {
    let cookieService = this.get('cookies');
    let cookies = cookieService.read();
    if (!cookies.loc) {

      return this.set('regionSelectName', null),
             this.set('regionSelectId', null);
    } else {
      return this.set('regionSelectName', cookies.loc),
             this.set('regionSelectId', cookies.region_id);
    }

  },

  saveRegionSelect(region, id) {
      let cookieService = this.get('cookies');
      cookieService.write('loc', region);
      cookieService.write('region_id', id);
      let cookies = cookieService.read();
        return this.set('regionSelectName', cookies.loc),
        this.set('regionSelectId', cookies.region_id);
  },
});
