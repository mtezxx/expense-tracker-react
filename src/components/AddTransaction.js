import React, { useState } from 'react'

export const AddTransaction = () => {
  const [text,setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
      <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type='text' placeholder='Enter text...'></input>
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
            </label>
            <input type='number' placeholder='Enter amount...'></input>

        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
