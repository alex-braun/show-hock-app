import ActiveModelAdapter from 'active-model-adapter';

import ENV from 'show-hock-app/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,
});
