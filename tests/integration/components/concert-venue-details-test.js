import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('concert-venue-details', 'Integration | Component | concert venue details', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{concert-venue-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#concert-venue-details}}
      template block text
    {{/concert-venue-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
