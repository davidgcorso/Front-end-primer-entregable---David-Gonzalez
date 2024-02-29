import { useState } from 'react' 
import Formulario from './Formulario' 
import Resultado from './Resultado' 
import './App.scss' 

function App() {
  const [formData, setFormData] = useState(null) 

  const handleFormSubmit = (data) => {
    setFormData(data) 
  } 

  return (
    <div className="App">
      <h1>Guitarras CUSTOM</h1>
      <Formulario onSubmit={handleFormSubmit} />
      {formData && <Resultado data={formData} />}
    </div>
  ) 
}

export default App 
