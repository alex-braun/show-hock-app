import Ember from 'ember';
// import ENV from 'show-hock-app/config/environment';

export default Ember.Service.extend({
///UNCOMMENT THIS WHEN YOU ARE READY!!!
  city: null,
  region: null,
  country: null,

  init() {

    $.ajax({
      method: 'GET',
      url: "http://ipinfo.io/json"
    })
    .then(response => {

      this.set('city', response.city);
      this.set('region', response.region);
      this.set('country', response.country);
    })
    .catch(error => {
      console.error(error);
    });
  }
});

      // .then(() =>
      //   $.ajax({
      //     method: 'GET',
      //     url: ENV.apiHost + '/geolocation/' +
      //     userCity+userRegion+userCountry
      //   })
      //   .then(response => {
      //     console.log(response);
      //   })
      // );
