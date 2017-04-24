import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-options-menu-mobile', 'Integration | Component | search options menu mobile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{search-options-menu-mobile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#search-options-menu-mobile}}
      template block text
    {{/search-options-menu-mobile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
