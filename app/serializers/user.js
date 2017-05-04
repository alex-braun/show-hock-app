import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    shows: { embedded: 'always' },
    calendars: { embedded: 'always' }
  }
  });
