import { render, screen } from '@testing-library/react';
import { StorySection } from './StorySection';
import { StorySection as StorySectionType } from '../../types';

describe('StorySection', () => {
  const mockStory: StorySectionType = {
    id: '1',
    title: 'Test Story Title',
    content: 'This is a test story content.',
  };

  it('renders story title', () => {
    render(<StorySection story={mockStory} />);
    expect(screen.getByText(mockStory.title)).toBeInTheDocument();
  });

  it('renders story content', () => {
    render(<StorySection story={mockStory} />);
    expect(screen.getByText(mockStory.content)).toBeInTheDocument();
  });

  it('renders image when imageUrl is provided', () => {
    const storyWithImage = {
      ...mockStory,
      imageUrl: 'test-image.jpg',
    };
    render(<StorySection story={storyWithImage} />);
    const image = screen.getByAltText(storyWithImage.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('does not render image when imageUrl is not provided', () => {
    render(<StorySection story={mockStory} />);
    const image = screen.queryByRole('img');
    expect(image).not.toBeInTheDocument();
  });

  it('renders fact section when fact is provided', () => {
    const storyWithFact = {
      ...mockStory,
      fact: {
        title: 'Did you know?',
        description: 'This is an interesting fact.',
        source: 'Test Source',
      },
    };
    render(<StorySection story={storyWithFact} />);
    expect(screen.getByText('Did you know?')).toBeInTheDocument();
    expect(
      screen.getByText('This is an interesting fact.')
    ).toBeInTheDocument();
    expect(screen.getByText('Source: Test Source')).toBeInTheDocument();
  });

  it('does not render fact section when fact is not provided', () => {
    render(<StorySection story={mockStory} />);
    expect(screen.queryByText('Source:')).not.toBeInTheDocument();
  });
});
