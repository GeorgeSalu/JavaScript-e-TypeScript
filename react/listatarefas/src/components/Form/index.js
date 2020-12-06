import React from 'react';
import {FaPlus} from 'react-icons/fa'

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} action="#" className="form">
    <input 
      type="text" 
      onChange={props.handleChange} 
      value={props.novaTarefa}/>
    <button type="submit">
      <FaPlus />
    </button>
  </form>
  )
}
