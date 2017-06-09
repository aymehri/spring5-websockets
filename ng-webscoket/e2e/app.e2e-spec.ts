import { NgWebscoketPage } from './app.po';

describe('ng-webscoket App', () => {
  let page: NgWebscoketPage;

  beforeEach(() => {
    page = new NgWebscoketPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to io!!'))
      .then(done, done.fail);
  });
});
