import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {

    performers: { embedded: 'always' },
    users: { embedded: 'always' },
  //   calendars: {
  //          serialize: 'records',
  //          deserialize: 'ids'
  //      }
  //   // calendars: { embedded: 'always' },
  }
});
