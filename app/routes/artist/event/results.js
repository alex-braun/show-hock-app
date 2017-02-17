import Ember from 'ember';

export default Ember.Route.extend({

  accessArtistData: Ember.inject.service(),

  queryParams: {
    getId: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    artist: {
      refreshModel: true
    }
  },

  model (params) {
    return Ember.RSVP.hash({
      event: this.get('store').query('artist', params).then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),
      similar: this.get('store').query('similar-artist', params).then((result) => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push([i]);
        }
           let selection = result.objectsAt(arr);
           selection = selection.filter((element) => {
             return element !== undefined;
           });
           return selection;
      })

      // }).then((result) => {
      //   let meta = result.get('meta');
      //   return meta, result;
      // })
    });
  },

  //   return this.get('store').query('artist', params)
  //   .then((result) => {
  //     let meta = result.get('meta');
  //     return meta, result;
  //   });
  // },

  afterModel (model) {
    let meta = model.event.get('meta');
    this.get('accessArtistData').add(meta);
  },
});
