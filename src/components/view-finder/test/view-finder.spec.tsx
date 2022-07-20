import { newSpecPage } from '@stencil/core/testing';
import { ViewFinder } from '../view-finder';

describe('view-finder', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViewFinder],
      html: `<view-finder></view-finder>`,
    });
    expect(page.root).toEqualHtml(`
      <view-finder>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </view-finder>
    `);
  });
});
