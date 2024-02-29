import PropTypes from 'prop-types' 
import './Resultado.scss' 

const Resultado = ({ data }) => {
  return (
    <div className="resultado">
      <p>
        Hola {data.nombre}, tu guitarra tipo {data.tipoGuitarra} de color{' '}
        {data.color} estará lista pronto. Te avisaremos al correo {data.correo}.
      </p>
    </div>
  ) 
} 

Resultado.propTypes = {
  data: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    tipoGuitarra: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
} 

export default Resultado 