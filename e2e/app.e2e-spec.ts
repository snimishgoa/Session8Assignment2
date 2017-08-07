import { Session8Assignment2Page } from './app.po';

describe('session8-assignment2 App', () => {
  let page: Session8Assignment2Page;

  beforeEach(() => {
    page = new Session8Assignment2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
