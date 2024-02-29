import { useState } from 'react' 
import PropTypes from 'prop-types' 
import './Formulario.scss' 

const Formulario = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipoGuitarra: 'Telecaster',
    correo: '',
    color: 'Azul',
  }) 

  const [validationMessages, setValidationMessages] = useState({
    nombre: '',
    correo: '',
  }) 

  const handleChange = (e) => {
    const { name, value } = e.target 
    setFormData((prevData) => ({ ...prevData, [name]: value })) 
    setValidationMessages((prevMessages) => ({ ...prevMessages, [name]: '' })) 
  } 

  const handleSubmit = (e) => {
    e.preventDefault() 

    const newValidationMessages = {
      nombre: '',
      correo: '',
    } 

    if (!formData.nombre || formData.nombre.length < 5 || !/^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/.test(formData.nombre)) {
      newValidationMessages.nombre = 'Ingresa un nombre válido (mínimo 5 caracteres, solo letras)' 
    }

    if (!formData.correo || !/^\S+@\S+\.\S+$/.test(formData.correo)) {
      newValidationMessages.correo = 'Ingresa un correo válido' 
    }

    setValidationMessages(newValidationMessages) 

    if (!newValidationMessages.nombre && !newValidationMessages.correo) {
      onSubmit(formData) 
    }
  } 

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label>
        Ingresa tu nombre
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          pattern="[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]{5,}" 
          required
        />
        <span className="mensaje-validacion">{validationMessages.nombre}</span>
      </label>

      <label>
        Elije el tipo de guitarra
        <select
          name="tipoGuitarra"
          value={formData.tipoGuitarra}
          onChange={handleChange}
        >
          <option value="Telecaster">Telecaster</option>
          <option value="Stratocaster">Stratocaster</option>
          <option value="Les Paul">Les Paul</option>
        </select>
      </label>

      <label>
        Ingresa tu correo electrónico
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <span className="mensaje-validacion">{validationMessages.correo}</span>
      </label>

      <label>
        Elije el color
        <select name="color" value={formData.color} onChange={handleChange}>
          <option value="Azul">Azul</option>
          <option value="Verde">Verde</option>
          <option value="Negra">Negra</option>
          <option value="Natural">Natural</option>
        </select>
      </label>

      <button type="submit">Enviar</button>
    </form>
  ) 
} 

Formulario.propTypes = {
  onSubmit: PropTypes.func.isRequired,
} 

export default Formulario 
