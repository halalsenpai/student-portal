import Navbar from "./components/layout/Navbar";
import Students from "./components/Students/Students";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Student from "./components/Students/Student";
import StudentForm from "./components/Students/StudentForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Students} />
          <Route exact path="/student/:id" component={Student} />
          <Route exact path="/studentform/:id?" component={StudentForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
