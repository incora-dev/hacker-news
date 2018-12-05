import { HackerNewsPage } from './app.po';

describe('hacker-news App', () => {
  let page: HackerNewsPage;

  beforeEach(() => {
    page = new HackerNewsPage();
  });

  it('should render items', () => {
    page.navigateTo();
    expect(page.getItem()).toBeTruthy();
  });
});
