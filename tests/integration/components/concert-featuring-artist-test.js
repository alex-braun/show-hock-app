import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('concert-featuring-artist', 'Integration | Component | concert featuring artist', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{concert-featuring-artist}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#concert-featuring-artist}}
      template block text
    {{/concert-featuring-artist}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
