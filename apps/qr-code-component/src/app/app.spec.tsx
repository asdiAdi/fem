import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a header', () => {
    const { getByText } = render(<App />);
    expect(
      getByText(/Improve your front-end skills by building projects/gi)
    ).toBeTruthy();
  });

  it('img loads', () => {
    const { getByAltText } = render(<App />);

    const image = getByAltText('qr-code');

    expect(image).toBeTruthy();
  });
});
