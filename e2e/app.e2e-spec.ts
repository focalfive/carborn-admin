import { CarbornAdminPage } from './app.po';

describe('carborn-admin App', () => {
  let page: CarbornAdminPage;

  beforeEach(() => {
    page = new CarbornAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
