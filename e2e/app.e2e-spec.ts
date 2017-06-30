import { NutshellPage } from './app.po';

describe('nutshell App', () => {
  let page: NutshellPage;

  beforeEach(() => {
    page = new NutshellPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
