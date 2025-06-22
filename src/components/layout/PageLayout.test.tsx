import { render, screen } from '@testing-library/react';
import { PageLayout } from './PageLayout';

describe('PageLayout', () => {
  it('renders header with title', () => {
    render(<PageLayout>Test Content</PageLayout>);
    const title = screen.getByText('Ressourcia');
    expect(title).toBeInTheDocument();
  });

  it('renders children content', () => {
    const testContent = 'Test Page Content';
    render(<PageLayout>{testContent}</PageLayout>);
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });

  it('renders footer with copyright', () => {
    render(<PageLayout>Test</PageLayout>);
    const footer = screen.getByText(/© 2025 Ressourcia/);
    expect(footer).toBeInTheDocument();
  });

  it('has correct structure classes', () => {
    const { container } = render(<PageLayout>Test</PageLayout>);
    expect(container.querySelector('.page-layout')).toBeInTheDocument();
    expect(container.querySelector('.page-header')).toBeInTheDocument();
    expect(container.querySelector('.page-content')).toBeInTheDocument();
    expect(container.querySelector('.page-footer')).toBeInTheDocument();
  });
});
