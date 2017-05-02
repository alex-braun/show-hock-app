import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {

    shows: { embedded: 'always' },
    calendars: { embedded: 'always' }
    // users: { embedded: 'always' },
  //   calendars: {
  //          serialize: 'records',
  //          deserialize: 'ids'
  //      }
  //   // calendars: { embedded: 'always' },
  }
  });
