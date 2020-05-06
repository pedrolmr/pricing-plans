import React, { useState } from 'react';
import './CardComponent.css';

import ModalForm from './../ModalComponent/ModalForm';

const CardComponent = ({ data, modal, toggleModal }) => {
  const [plan, setPlan] = useState({ plan: {} });

  const displayPayment = (planInfo) => {
    setPlan(planInfo);
    toggleModal();
  };
  return (
    <div className='card-container'>
      {data.map((card) => (
        <div className='card' key={card.id}>
          <h2>{card.plan}</h2>
          <p>${card.price}</p>

          <button onClick={() => displayPayment(card)}>Choose</button>
        </div>
      ))}
      {modal && <ModalForm plan={plan} closeModal={toggleModal} />}
    </div>
  );
};

export default CardComponent;
