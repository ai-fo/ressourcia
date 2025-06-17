import { render, screen } from '@testing-library/react';
import { ExplanationSection } from './ExplanationSection';
import { ExplanationSection as ExplanationSectionType } from '../../types';

describe('ExplanationSection', () => {
  const mockExplanation: ExplanationSectionType = {
    id: '1',
    title: 'Test Explanation Title',
    content: 'This is a test explanation content.',
  };

  it('renders explanation title', () => {
    render(<ExplanationSection explanation={mockExplanation} />);
    expect(screen.getByText(mockExplanation.title)).toBeInTheDocument();
  });

  it('renders explanation content', () => {
    render(<ExplanationSection explanation={mockExplanation} />);
    expect(screen.getByText(mockExplanation.content)).toBeInTheDocument();
  });

  it('renders key points when provided', () => {
    const explanationWithKeyPoints = {
      ...mockExplanation,
      keyPoints: ['Point 1', 'Point 2', 'Point 3'],
    };
    render(<ExplanationSection explanation={explanationWithKeyPoints} />);
    expect(screen.getByText('Points clés à retenir')).toBeInTheDocument();
    expect(screen.getByText('Point 1')).toBeInTheDocument();
    expect(screen.getByText('Point 2')).toBeInTheDocument();
    expect(screen.getByText('Point 3')).toBeInTheDocument();
  });

  it('does not render key points section when not provided', () => {
    render(<ExplanationSection explanation={mockExplanation} />);
    expect(screen.queryByText('Points clés à retenir')).not.toBeInTheDocument();
  });

  it('renders examples when provided', () => {
    const explanationWithExamples = {
      ...mockExplanation,
      examples: [
        {
          title: 'Example 1',
          description: 'Description 1',
          code: 'const test = true;',
        },
        {
          title: 'Example 2',
          description: 'Description 2',
        },
      ],
    };
    render(<ExplanationSection explanation={explanationWithExamples} />);
    expect(screen.getByText('Exemples')).toBeInTheDocument();
    expect(screen.getByText('Example 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('const test = true;')).toBeInTheDocument();
    expect(screen.getByText('Example 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('does not render examples section when not provided', () => {
    render(<ExplanationSection explanation={mockExplanation} />);
    expect(screen.queryByText('Exemples')).not.toBeInTheDocument();
  });

  it('has correct structure classes', () => {
    const { container } = render(
      <ExplanationSection explanation={mockExplanation} />
    );
    expect(container.querySelector('.explanation-section')).toBeInTheDocument();
    expect(container.querySelector('.explanation-title')).toBeInTheDocument();
    expect(container.querySelector('.explanation-content')).toBeInTheDocument();
  });
});
