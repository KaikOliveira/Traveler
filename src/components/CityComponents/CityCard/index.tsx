/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Container } from './styles';

export const CityCard = () => {
  const [c, setc] = useState();
  return (
    <Container>
      <header>
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/116724901.jpg?k=01a3c79e0bff145fd753966c4b4a8191cb06a5858eb548196d2f2d1f965c883d&o=&hp=1" alt="cidade de aguar mornas" />
      </header>
      <footer>
        <h1>Águas Mornas</h1>
        <p>13 locais</p>
      </footer>
    </Container>
  );
};
