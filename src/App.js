import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Ofertas from "./pages/Ofertas";
import ErrorPage from "./pages/Error404";
import JobsPage from "./pages/Jobspage";
import MyProviderCards from "./aplication/providerCard";

function App() {
  return (
    <div className="App">
      <MyProviderCards>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/ofertas">
              <Ofertas />
            </Route>
            <Route exact path="/jobsview">
              <JobsPage />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </MyProviderCards>
    </div>
  );
}

export default App;