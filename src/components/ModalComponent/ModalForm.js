import React from 'react';
import './ModalForm.css';

const ModalForm = ({ plan, closeModal }) => {
  console.log(plan);
  return (
    <div className='modal-overlay'>
      <div className='modal-form'>
        <button onClick={closeModal} className='close-modal'>
          X
        </button>
        <div className='header'>
          <h1>{plan.plan}</h1>
          <p>${plan.price}</p>

          <form>
            <label htmlFor='name' id='name'>
              Name:
            </label>
            <input type='text' name='name' id='name' placeholder='Name'></input>

            <label htmlFor='lastname' id='lastname'>
              Last Name:
            </label>
            <input
              type='text'
              name='lastname'
              id='lastname'
              placeholder='Last Name'
            ></input>
            <label htmlFor='payment'>Choose your payment method</label>

            <select id='payment'>
              <option value='creditcard'>Credit Card</option>
              <option value='debitcard'>Debit Card</option>
            </select>

            <input
              type='cardnumber'
              name='cardnumber'
              id='cardnumber'
              placeholder='Card number'
            ></input>
            <input type='exp' name='exp' id='exp' placeholder='MM/YY'></input>
            <input type='cvc' name='cvc' id='cvc' placeholder='CVC'></input>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ModalForm;
