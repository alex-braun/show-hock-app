import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('concert-also-featuring', 'Integration | Component | concert also featuring', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{concert-also-featuring}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#concert-also-featuring}}
      template block text
    {{/concert-also-featuring}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
