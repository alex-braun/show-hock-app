import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('festival-artist-list', 'Integration | Component | festival artist list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{festival-artist-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#festival-artist-list}}
      template block text
    {{/festival-artist-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
