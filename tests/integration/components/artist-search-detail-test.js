import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artist-search-detail', 'Integration | Component | artist search detail', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{artist-search-detail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#artist-search-detail}}
      template block text
    {{/artist-search-detail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
