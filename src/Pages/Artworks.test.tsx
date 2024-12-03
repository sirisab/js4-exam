import '@testing-library/jest-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ArtworksPage } from './ArtworksPage';

// Describe beskriver testets syfte
// Steg 1. Skapa en testsvit:

//Instansierar Artworks-komponenten

beforeEach(() => {
  render(<ArtworksPage />);
});

describe('Artworks', () => {
  // It beskriver testet
  it('should have a correct heading', () => {
    //Act:
    const heading = screen.getByText(/Artworks/i);
    // Förväntning för ett resultat
    expect(heading).toBeInTheDocument();
  });

  it('should have a login button with the text login', async () => {
    const user = userEvent.setup();

    screen.getByRole('button', { name: /login/i });
    // expect(btnElem).toHaveTextContent('Login');
    const btnElem = screen.getByRole('button', { name: /login/i });
    // Click the button
    // fireEvent.click(btnElem);
    await user.click(btnElem);
    // Test if the button text changed after click
    expect(btnElem).toHaveTextContent(/logout/i);
  });
});
