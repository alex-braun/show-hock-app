export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
   application.inject('route', 'location', 'service:geo-location');
  // console.log('I go first');
}

export default {
  name: 'geo-location',
  // before: 'application',
  initialize
};
