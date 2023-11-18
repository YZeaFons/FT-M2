import React, { useState } from 'react'
import './Contact.modules.css'
import validate from '../validation/validate'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      // console.log(event);
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...inputs,
      [event.target.name]: event.target.value
    }))
  }
  const handleSubmit = (event, valor = 1) => {
    event.preventDefault();
    valor = Object.keys(errors).length
    if (valor !== 0) window.alert('Debe llenar todos los campos')
    else {
      window.alert('Datos completos')
      setErrors({
        name: '',
        email: '',
        message: ''
      })
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  console.log(errors);

  return (
    <div>

      <h1>Informacion de contacto</h1>

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name='name'
          placeholder='Escribe tu nombre...'
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && 'warning'}
        />
        <p className='danger'>{errors.name}</p>
        <br />

        <label>Correo Electrónico:</label>
        <input
          type="text"
          name='email'
          placeholder='Escribe tu email...'
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && 'warning'}
        />
        <p className='danger'>{errors.email}</p>
        <br />

        <label>Mensaje:</label>
        <textarea
          type="text"
          name="message"
          placeholder='Escribe tu mensaje...'
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && 'warning'}
        >
        </textarea>
        <p className='danger'>{errors.message}</p>
        <br />

        <button type='submit'>Enviar</button>
      </form>

    </div>
  )
}
