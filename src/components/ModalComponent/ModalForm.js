import React from 'react';
import './ModalForm.css';

const ModalForm = ({ plan }) => {
  console.log(plan);
  return (
    <div className='modal-overlay'>
      <div className='modal-form'>
        <h1>{plan.plan}</h1>
        <p>${plan.price}</p>
      </div>
    </div>
  );
};
export default ModalForm;
