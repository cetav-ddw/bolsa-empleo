import './App.css';
import Suscriber from './components/Suscriber';
import Form from './components/Form';
import {Hero} from './components/Hero';


function App() {
  return (
    <div>
      <Hero name="Bienvenidos" />
      <Suscriber name="Suscribete a nuestro newsletter" />
      <Form  />
    </div>
  );
}

export default App;
