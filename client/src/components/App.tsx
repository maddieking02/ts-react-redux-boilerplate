import React from 'react';
import bgImage from '../assets/pink-blue-bg.png';

const App = (): React.JSX.Element => {
  return (
    <div>
      <h1>Hello World</h1>
      <img src={bgImage} alt=""/>
    </div>
  )
}

export default App;