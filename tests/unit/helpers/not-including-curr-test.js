
import { notIncludingCurr } from 'show-hock-app/helpers/not-including-curr';
import { module, test } from 'qunit';

module('Unit | Helper | not including curr');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = notIncludingCurr([42]);
  assert.ok(result);
});

