import React, { useState } from 'react';
import './CardComponent.css';

import ModalForm from './../ModalComponent/ModalForm';

const CardComponent = ({ data, modal, showModal }) => {
  const [plan, setPlan] = useState({ plan: {} });

  const setPlanId = (planInfo) => {
    setPlan(planInfo);
    showModal();
  };
  return (
    <div className='card-container'>
      {data.map((card) => (
        <div className='card' key={card.id}>
          <h2>{card.plan}</h2>
          <p>${card.price}</p>

          <button onClick={() => setPlanId(card)}>Buy</button>
        </div>
      ))}
      {modal && <ModalForm plan={plan} />}
    </div>
  );
};

export default CardComponent;
