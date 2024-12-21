import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ArtworkPage } from './ArtworkPage';
import userEvent from '@testing-library/user-event';

describe('Artworkpage component', () => {
  it('renders button with text "Lägg i varukorgen"', () => {
    render(<ArtworkPage />);
    const button = screen.getByRole('button', { name: /Lägg i varukorgen/i });
    expect(button).toBeInTheDocument();
  });

  it('changes button to being greyed out when clicked', async () => {
    render(<ArtworkPage />);
    const button = screen.getByRole('button', { name: /Lägg i varukorgen/i });
    const user = userEvent.setup();

    await user.click(button);
    expect(button).toHaveClass('inactive-btn');
    expect(button).toHaveTextContent(/Tillagd i varukorgen/i);
  });
});
