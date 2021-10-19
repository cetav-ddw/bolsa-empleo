import Footer from './components/footer';
import Filter from './components/filter';
import Cards from './components/Cards';
import MyProvider from './aplication/provider';
import Navbar from "./components/Navbar/Navbar";
import Routes from './components/ Routesconcept';
import styled from 'styled-components';
import Suscriber from './components/Suscriber';
/*import Form from './components/Form';*/
import {Hero} from './components/Hero';
import Banner from './components/Banner';
/* import Jobsview from './components/Jobsview'; */
/* import PostOffer from './components/Postoffer'; */

function App() {
  return (
    <div className="App">
      <MyProvider value = "Filtrar por tecnico">
        <Wrapper> 
          <Navbar/>
          <Hero/>
          <Routes/>  
          <Filter/>
          <Cards/>
          <Suscriber />
          <Banner title="Creando Oportunidades" subtitle="" /> 
          {/*<Form />*/}
          <Footer/>
        </Wrapper>
      </MyProvider>
    </div>
  )}

const Wrapper = styled.div `

`
export default App;
