import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/layout/header";
import Students from "./components/student/students";
import Student from "./components/student/singleStudent";
import addStudent from "./components/student/addStudent";
import EditStudent from "./components/student/editStudent";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/students" component={Students} />
              <Route path="/student-details/:id" component={Student} />
              <Route path="/addstudent" component={addStudent} />
              <Route path="/update-student/:id" component={EditStudent} />
              <Route path="/" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
