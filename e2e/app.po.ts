import { browser, by, element } from 'protractor';

export class HackerNewsPage {
  navigateTo() {
    return browser.get('/news');
  }

  getItem() {
    return by.css('app-root .item');
  }
}
