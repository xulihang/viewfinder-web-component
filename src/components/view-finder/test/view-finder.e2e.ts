import { newE2EPage } from '@stencil/core/testing';

describe('view-finder', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<view-finder></view-finder>');

    const element = await page.find('view-finder');
    expect(element).toHaveClass('hydrated');
  });
});
