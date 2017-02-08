import Ember from 'ember';

export default Ember.Route.extend({

  accessChildData: Ember.inject.service(),

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
           let aggregate = result.objectsAt(arr);
           aggregate = aggregate.filter((element) => {
             return element !== undefined;
           });
           console.log(aggregate);
           return aggregate;
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
    this.get('accessChildData').add(meta);
  },
});
