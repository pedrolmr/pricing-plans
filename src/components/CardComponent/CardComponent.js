import React, { useState } from 'react';
import './CardComponent.css';

import ModalForm from './../ModalComponent/ModalForm';

const CardComponent = ({ data, modal, toggleModal }) => {
  const [plan, setPlan] = useState({ plan: {} });

  const displayPayment = (planInfo) => {
    setPlan(planInfo);
    toggleModal();
  };
  data.map((c) => console.log(c.perks));
  return (
    <div className='card-container'>
      {data.map((card) => (
        <div className='card' key={card.id}>
          <h2>{card.plan}</h2>
          <p>${card.price}</p>
          <div className='perks'>
            <p>Storage: {card.perks.storage}</p>
            <p>Users: {card.perks.users}</p>
            <p>Projects: {card.perks.projects}</p>
          </div>
          <button onClick={() => displayPayment(card)}>Choose</button>
        </div>
      ))}
      {modal && <ModalForm plan={plan} closeModal={toggleModal} />}
    </div>
  );
};

export default CardComponent;
