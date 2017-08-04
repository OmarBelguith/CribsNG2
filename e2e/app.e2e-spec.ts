import { Ng2TutorialPage } from './app.po';

describe('ng2-tutorial App', () => {
  let page: Ng2TutorialPage;

  beforeEach(() => {
    page = new Ng2TutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
