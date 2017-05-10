import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getWelcomeMessage() {
    return element(by.css('app-root h1')).getText();
  }
}
