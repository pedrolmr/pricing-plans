import React, { useState, useEffect } from 'react';
import './App.css';

import CardComponent from './components/CardComponent/CardComponent';

import data from './data';

const App = () => {
  const [cardData, setCardData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setCardData(data);
  }, [cardData]);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className='App'>
      <CardComponent
        data={cardData}
        toggleModal={() => toggleModal()}
        modal={modal}
      />
    </div>
  );
};

export default App;
