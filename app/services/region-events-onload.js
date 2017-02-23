import Ember from 'ember';
import ENV from 'show-hock-app/config/environment';

export default Ember.Service.extend({

location: Ember.inject.service('geo-location'),

  // events: Ember.inject.service('geo-location'),
//location.city, location.region, location.country
  init() {


    // console.log(location.city);
    // $.ajax({
    //   method: 'GET',
    //   url: ENV.apiHost + '/geolocation/' +location.city+location.region+location.country
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  }
});

//   $.ajax({
//     method: 'GET',
//     url: ENV.apiHost + '/geolocation/' +
//     userCity+userRegion+userCountry
//   })
//   .then(response => {
//     console.log(response);
//   })
// );
