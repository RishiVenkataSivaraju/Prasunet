// src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/tasks" component={TaskList} />
        <PrivateRoute path="/add-task" component={TaskForm} />
        <PrivateRoute path="/edit-task/:id" component={TaskForm} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

