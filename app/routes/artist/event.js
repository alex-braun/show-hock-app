import Ember from 'ember';

export default Ember.Route.extend({

////GET THE ARTIST NAME FOR USAGE IN NESTED ROUTES
  nameAndId: Ember.inject.service('access-artist-data'),
  accessArtistShowCount: Ember.inject.service(),
  artistId: null,

  beforeModel(data) {
    this._super(...arguments);
    let id = parseInt(data.params['artist.event'].artist_id),
        name = data.params['artist.event'].artist_name;
    this.get('nameAndId').addId(id);
    this.get('nameAndId').addName(name);
  },

  model (param) {

    return Ember.RSVP.hash({
      search: this.get('store').findRecord('artist-search', param.artist_name, { adapterOptions: { page: 1,
                        per_page: 1 }
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),

      artist: this.get('store').findRecord('artist', param.artist_id, {
        adapterOptions: { page: 1,
                          min_date: '',
                          max_date: ''
                        }
      })
      .then((result) => {
        let meta = result.get('meta');
        this.get('accessArtistShowCount').addParent(meta.total_entries);
        return meta, result;
      }),

      similar: this.get('store').findRecord('similar-artist', param.artist_id)
      .then((result) => {
        let arr = [];
        let num;
        let len = result.get('artist').length;
        if (len > 10) {
          num = 10;
        } else {
          num = len;
        }
        for (let i = 0; i < num; i++) {
          arr.push([i]);
        }
           let selection = result.get('artist').objectsAt(arr);
           selection = selection.filter((element) => {
             return element !== undefined;
           });
           return selection;
      }),
    });
  },

  actions: {
    goToArtist(name, id) {
      this.transitionTo('artist.event.results',
          name,
          id,
          { queryParams: {
            page: 1,
            }
      });
    }
  }
});
