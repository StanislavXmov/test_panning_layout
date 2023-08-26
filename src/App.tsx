import { useState } from 'react';
import { ImagesBlock } from './components/ImagesBlock';

import './App.scss';

function App() {
  const [title, setTitle] = useState('xmov_emo');
  const [color, setColor] = useState('#9be22a');

  return (
    <>
      <h1 className='title' style={{color}}>{title}</h1>
      <ImagesBlock setTitle={setTitle} setColor={setColor} />
    </>
  );
}

export default App;
