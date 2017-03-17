import Ember from 'ember';


export default Ember.Component.extend({
  zoom: 14,
  markers: Ember.A([
  {
    id: null,
    lat: null,
    lng: null,
    anchorPoint: new google.maps.Point(),
    animation: google.maps.Animation.DROP,
    clickable: false,
    crossOnDrag: false,
    cursor: 'pointer',
    draggable: false,
    label: 'A',
    opacity: 1,
    optimized: true,
    title: null,
    visible: true,
    zIndex: 999
  }
  ]),

  init() {
    this._super(...arguments);
    let lat = this.get('lat');
    let lng = this.get('lng');
    let title = this.get('title');
    this.set('markers.firstObject.lat', lat);
    this.set('markers.firstObject.lng', lng);
    this.set('markers.firstObject.title', title);
  },
});
