import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('upcoming-region-events', 'Integration | Component | upcoming region events', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{upcoming-region-events}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#upcoming-region-events}}
      template block text
    {{/upcoming-region-events}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
