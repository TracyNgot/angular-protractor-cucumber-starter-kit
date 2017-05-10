import { defineSupportCode } from 'cucumber';
import { HomePage } from './../../pages/Home.po';
import { assert } from 'chai';

defineSupportCode(function({Given, Then}) {
  let page = new HomePage();

  Given(/^that the home page is opened$/, function() {
    return page.navigateTo();
  });

  Then(/^it displays the welcome message '(.*)'$/, function(message: string) {
    return page.getWelcomeMessage().then((welcomeMessage) => {
      assert.equal(welcomeMessage, message);
    });
  });
});
