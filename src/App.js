
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Ofertas from "./pages/Ofertas"
import ErrorPage from "./pages/Error404";
import JobsPage from "./pages/Jobspage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route exact path="/ofertas">
            <Ofertas/>
          </Route>
          <Route exact path="/jobsview">
            <JobsPage/>
          </Route>
          <Route exact path="*">
            <ErrorPage/>
          </Route>
        </Switch>             
      </Router>
    </div>
  )
}


export default App;
