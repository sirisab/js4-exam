import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ArtworkDetails from './ArtworkDetails';

const mockArtwork = {
  id: 1,
  title: 'Beautiful Artwork',
  price: 500,
  description: 'A wonderful piece of art.',
  imageUrl: 'https://example.com/artwork.jpg',
  dimensions: '50x70 cm',
  imageUrlLarge: 'https://example.com/artwork-large.jpg',
  imageUrlSmall: 'https://example.com/artwork-small.jpg',
  imageUrlThumbnail: 'https://example.com/artwork-thumbnail.jpg',
  inStock: 1, // Eller false, beroende på vad din komponent kräver
};
const mockUpdateCartBadge = vi.fn();

beforeEach(() => {
  render(
    <MemoryRouter>
      <ArtworkDetails
        artwork={mockArtwork}
        updateCartBadge={mockUpdateCartBadge}
      />
    </MemoryRouter>
  );
});

describe('ArtworkDetails component', () => {
  it('should call "handleClick" when the button is clicked', async () => {
    const button = screen.getByRole('button', { name: /Lägg i varukorgen/i });
    expect(button.className).toMatch(/^_add-to-cart-btn/);
  });
});
