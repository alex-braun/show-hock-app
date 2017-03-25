export function initialize(application) {
  application.inject('route', 'region-events-onload', 'service:region-events-onload');
  // console.log('I go second');

}

export default {
  name: 'regionEventsOnload',
  after: 'geo-location',
  initialize
};
