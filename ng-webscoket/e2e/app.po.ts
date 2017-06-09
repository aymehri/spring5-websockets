import { browser, by, element } from 'protractor';

export class NgWebscoketPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('io-root h1')).getText();
  }
}
