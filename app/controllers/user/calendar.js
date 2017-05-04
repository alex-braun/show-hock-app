import Ember from 'ember';

export default Ember.Controller.extend({

sortedByDate: Ember.computed.sort('model', 'sortAttrs'),
sortAttrs: ['endDate:asc'],

});
