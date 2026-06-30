import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-tsparticles', () => () => <div data-testid="particles" />);

jest.mock('react-typed', () => ({
  ReactTyped: ({ strings = [], className }) => (
    <span className={className}>{strings.join(' ')}</span>
  ),
}));

test('renders portfolio header', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /Hi, I am Nikhil Surya Peteti/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText('Software Engineer Web Developer Android Developer')
  ).toBeInTheDocument();
});
