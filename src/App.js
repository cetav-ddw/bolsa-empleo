import './App.css';
import Footer from './components/footer';
import Filter from './components/filter';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Filter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
