import DS from 'ember-data';
import ENV from 'show-hock-app/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.apiHost,
});
