import { RegistryUiPage } from './app.po';

describe('registry-ui App', function() {
  let page: RegistryUiPage;

  beforeEach(() => {
    page = new RegistryUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
