import { useState } from 'react';

export const Artworks = () => {
  const [buttonText, setButtonText] = useState<string>('Login');
  return (
    <>
      <h1>Artworks</h1>
      <button onClick={() => setButtonText('Logout')}>{buttonText}</button>
    </>
  );
};
