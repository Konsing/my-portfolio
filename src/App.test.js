import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import theme from './theme';

// App itself can't be rendered under Jest because the section components load
// assets via webpack's require.context, which Jest doesn't provide.
test('renders the navigation links', () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );

  ['Home', 'Projects', 'Skills', 'Education', 'About'].forEach((label) => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
