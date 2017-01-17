import DS from 'ember-data';

export default DS.Model.extend({
  metroArea: DS.attr(),
  // noMatch: DS.attr()
  // country: DS.attr(),
});


// FROM RAILS
// {
//   "region_searches": [
//     {
//       "city": {
//         "lat": 42.3216,
//         "lng": -71.0891,
//         "country": {
//           "displayName": "US"
//         },
//         "state": {
//           "displayName": "MA"
//         },
//         "displayName": "Boston"
//       },
//       "metroArea": {
//         "lat": 42.336,
//         "lng": -71.0179,
//         "country": {
//           "displayName": "US"
//         },
//         "uri": "http://www.songkick.com/metro_areas/18842-us-boston-cambridge?utm_source=42541&utm_medium=partner",
//         "state": {
//           "displayName": "MA"
//         },
//         "displayName": "Boston / Cambridge",
//         "id": 18842
//       },
//       "id": 18842
//     },
//     {
//       "city": {
//         "lat": 42.336,
//         "lng": -71.0179,
//         "country": {
//           "displayName": "US"
//         },
//         "state": {
//           "displayName": "MA"
//         },
//         "displayName": "Boston / Cambridge"
//       },
//       "metroArea": {
//         "lat": 42.336,
//         "lng": -71.0179,
//         "country": {
//           "displayName": "US"
//         },
//         "uri": "http://www.songkick.com/metro_areas/18842-us-boston-cambridge?utm_source=42541&utm_medium=partner",
//         "state": {
//           "displayName": "MA"
//         },
//         "displayName": "Boston / Cambridge",
//         "id": 18842
//       },
//       "id": 18842
//     }
//   ]
// }


// FROM EXPRESS
// {
//   "regionsearch": [
//     {
//       "city": {
//         "lat": 42.3216,
//         "lng": -71.0891,
//         "country": {
//           "displayName": "US"
//         },
//         "state": {
//           "displayName": "MA"
//         },
//         "displayName": "Boston"
//       },
//       "metroArea": {
//         "lat": 42.336,
//         "lng": -71.0179,
//         "country": {
//           "displayName": "US"
//         },
//         "uri": "http://www.songkick.com/metro_areas/18842-us-boston-cambridge?utm_source=42541&utm_medium=partner",
//         "state": {
//           "displayName": "MA"
//         },
//         "displayName": "Boston / Cambridge",
//         "id": 18842
//       },
//       "id": 18842
//     },
//     {
//       "city": {
//         "lat": 42.336,
//         "lng": -71.0179,
//         "country": {
//           "displayName": "US"
//         },
//         "state": {
//           "displayName": "MA"
//         },
//         "displayName": "Boston / Cambridge"
//       },
//       "metroArea": {
//         "lat": 42.336,
//         "lng": -71.0179,
//         "country": {
//           "displayName": "US"
//         },
//         "uri": "http://www.songkick.com/metro_areas/18842-us-boston-cambridge?utm_source=42541&utm_medium=partner",
//         "state": {
//           "displayName": "MA"
//         },
//         "displayName": "Boston / Cambridge",
//         "id": 18842
//       },
//       "id": 18842
//     }
//   ]
// }
