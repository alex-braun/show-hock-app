export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
   application.inject('route', 'geo', 'service:geo-location');
}

export default {
  name: 'geo-location',
  initialize
};
