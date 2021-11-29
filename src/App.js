import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error404";
import JobsPage from "./pages/Jobspage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/oferta/:id" element={<JobsPage />} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
