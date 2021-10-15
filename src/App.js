import Suscriber from './components/Suscriber';
import Form from './components/Form';
import {Hero} from './components/Hero';
import Banner from './components/Banner';


function App() {
  return (
    <div>
      <Hero />
      <Suscriber />
      <Banner title="Creando Oportunidades" subtitle="" /> 
      <Form />
    </div>
  );
}

export default App;
