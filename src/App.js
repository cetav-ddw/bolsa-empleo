import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Publicar from "./components/Publicar"
import Home from "./components/Home"
import Ofertas from "./components/Ofertas"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route exact path="/publicar">
            <Publicar/>
          </Route>
          <Route exact path="/ofertas">
            <Ofertas/>
          </Route>
        </Switch>             
      </Router>
    </div>
  )
}


export default App;
