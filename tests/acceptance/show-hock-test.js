import { test } from 'qunit';
import moduleForAcceptance from 'show-hock-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | show hock');

test('should sign in a user', function(assert) {
  visit('/sign-in');
  fillIn('.email', '123@123.com');
  fillIn('.password-input', 'foobar');
  click('button[type="submit"]');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
