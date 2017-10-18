import { BotPage } from './app.po';

describe('bot App', function() {
  let page: BotPage;

  beforeEach(() => {
    page = new BotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
