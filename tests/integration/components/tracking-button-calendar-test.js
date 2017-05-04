import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tracking-button-calendar', 'Integration | Component | tracking button calendar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tracking-button-calendar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tracking-button-calendar}}
      template block text
    {{/tracking-button-calendar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
