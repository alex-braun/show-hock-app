import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('button-untrack-event', 'Integration | Component | button untrack event', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{button-untrack-event}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#button-untrack-event}}
      template block text
    {{/button-untrack-event}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
