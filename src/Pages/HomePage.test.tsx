import '@testing-library/jest-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { HomePage } from './HomePage';

// Describe beskriver testets syfte
// Steg 1. Skapa en testsvit:

//Instansierar Artworks-komponenten

beforeEach(() => {
  render(<HomePage />);
});

describe('HomePage', () => {
  it('should have a heading with the text "Siri AB"', () => {
    screen.getByRole('heading', { name: /Siri AB/i });
  });
});
