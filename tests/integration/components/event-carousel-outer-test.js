import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('event-carousel-outer', 'Integration | Component | event carousel outer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{event-carousel-outer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#event-carousel-outer}}
      template block text
    {{/event-carousel-outer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
