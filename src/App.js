import './App.css';
import Suscriber from './components/Suscriber';
import Form from './components/Form';
import {Hero} from './components/Hero';
import Banner from './components/Banner';


function App() {
  return (
    <div>
      <Hero name="Bienvenidos" />
      <Suscriber name="Suscribete a nuestro newsletter" label="Ingrese su Email:"/>
      <Banner title="Creando Oportunidades" subtitle="CETAV | Bolsa de empleo" /> 
      <Form />
    </div>
  );
}

export default App;
