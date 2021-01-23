import Navbar from "./components/layout/Navbar";
import Students from "./components/Students/Students";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Student from "./components/Students/Student";
import StudentForm from "./components/Students/StudentForm";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Login } from "./components/Pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <PrivateRoute component={Navbar} />

            <Switch>
              <Route exact path="/" component={Students} />
              <Route exact path="/student/:id" component={Student} />
              <Route exact path="/studentform/:id?" component={StudentForm} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
