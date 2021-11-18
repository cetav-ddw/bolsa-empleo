import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ofertas from "./pages/Home";
import ErrorPage from "./pages/Error404";
import JobsPage from "./pages/Jobspage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Ofertas />
          </Route>
          <Route exact path="/oferta/:id" children={<JobsPage />} />
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
