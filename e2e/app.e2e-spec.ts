import { AngularProtractorCucumberStarterPage } from './app.po';

describe('angular-protractor-cucumber-starter App', () => {
  let page: AngularProtractorCucumberStarterPage;

  beforeEach(() => {
    page = new AngularProtractorCucumberStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
