import React from 'react'
import Tile from 'widgets/Tile'

const Hello: React.FC = () =>
  <Tile width={ 400 } index={ 1 }>
    <h1>Hello 👋</h1>
    <p>
      Welcome on my personnal page.
      <br />
      I'm a freelance web developer from Nantes.
      <br />
      From here you can find my contact and informations about myself and my projects, enjoy !
    </p>
  </Tile>

export default Hello
