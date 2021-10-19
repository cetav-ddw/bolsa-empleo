import Footer from './components/footer';
import Filter from './components/filter';
import Cards from './components/Cards';
import MyProvider from './aplication/provider';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <MyProvider value = "Filtrar por tecnico">
        <Navbar/>
        <Filter/>
        <Cards/>
        <Footer/>
      </MyProvider>
    </div>
  )}

export default App;
