import './App.css';
import Footer from './components/footer';
import Filter from './components/filter';
import Cards from './components/Cards';
import MyProvider from './aplication/provider';

function App() {
  return (
    <div className="App">
      <MyProvider value = "Filtrar por tecnico">
        <Filter/>
        <Cards/>
        <Footer/>
      </MyProvider>
    </div>
  );
}

export default App;
