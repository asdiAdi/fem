import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a main heading', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Jessica Randall/gi)).toBeTruthy();
  });

  it('should have 5 buttons', () => {
    const { getAllByRole } = render(<App />);
    expect(getAllByRole('button').length === 5);
  });
});
