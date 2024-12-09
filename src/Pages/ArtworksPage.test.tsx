import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { ArtworksPage } from './ArtworksPage';

// Describe beskriver testets syfte
// Steg 1. Skapa en testsvit:

//Instansierar Artworks-komponenten

beforeEach(() => {
  render(<ArtworksPage />);
});

describe('ArtworksPage component', () => {
  // It beskriver testet
  it.skip('should have a correct heading with the text Artworks', () => {
    //Act:
    const heading = screen.getByText(/Artworks/i);
    // Förväntning för ett resultat
    expect(heading).toBeInTheDocument();
  });

  describe('ArtworksPage component', () => {
    it.skip('should have a correct heading with the text Pasteller', () => {
      //Act:
      const heading = screen.getByRole('heading', { name: /Pasteller/i });
      // Förväntning för ett resultat
      expect(heading).toBeInTheDocument();
    });
  });

  describe('ArtworksPage REST API call', () => {
    it('should display image for each artwork', async () => {
      const images = await screen.findAllByRole('img');
      expect(images).toHaveLength(5);

      const altTitles = images.map((elem) => (elem as HTMLImageElement).alt);
      expect(altTitles).toEqual([
        'Rosa droppar',
        'Janne, min vän',
        'Gula knoppar',
        'Persienn',
        'Arbetsfordon',
      ]);
    });
  });
});
