import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ArtworkPage } from './ArtworkPage';

describe('Artworkpage component', () => {
  it('renders button with text "Lägg i varukorgen"', () => {
    render(<ArtworkPage />);
    const button = screen.getByRole('button', { name: /Lägg i varukorgen/i });
    expect(button).toBeInTheDocument();
  });
});
