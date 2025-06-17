import { render, screen } from '@testing-library/react';
import { InteractiveSection } from './InteractiveSection';
import { InteractiveElement } from '../../types';

describe('InteractiveSection', () => {
  const mockInteractive: InteractiveElement = {
    id: '1',
    type: 'game',
    title: 'Test Interactive Game',
    description: 'This is a test interactive element.',
    config: { difficulty: 'easy' },
  };

  it('renders interactive title', () => {
    render(<InteractiveSection interactive={mockInteractive} />);
    expect(screen.getByText(mockInteractive.title)).toBeInTheDocument();
  });

  it('renders interactive description', () => {
    render(<InteractiveSection interactive={mockInteractive} />);
    expect(screen.getByText(mockInteractive.description)).toBeInTheDocument();
  });

  it('renders placeholder when no children provided', () => {
    render(<InteractiveSection interactive={mockInteractive} />);
    expect(
      screen.getByText(`Élément interactif: ${mockInteractive.type}`)
    ).toBeInTheDocument();
    expect(screen.getByText(/Configuration:/)).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    const testChild = <div>Custom Interactive Content</div>;
    render(
      <InteractiveSection interactive={mockInteractive}>
        {testChild}
      </InteractiveSection>
    );
    expect(screen.getByText('Custom Interactive Content')).toBeInTheDocument();
    expect(screen.queryByText('Élément interactif:')).not.toBeInTheDocument();
  });

  it('has correct structure classes', () => {
    const { container } = render(
      <InteractiveSection interactive={mockInteractive} />
    );
    expect(container.querySelector('.interactive-section')).toBeInTheDocument();
    expect(container.querySelector('.interactive-title')).toBeInTheDocument();
    expect(
      container.querySelector('.interactive-description')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.interactive-container')
    ).toBeInTheDocument();
  });
});
