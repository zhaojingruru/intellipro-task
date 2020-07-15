import React, { Component } from 'react';
import './App.css';
import TodoAdd from './containers/TodoAdd';
import VisibleTodoList from './containers/VisibleTodoList';
import TodoFilter from './components/TodoFilter';
import { Link, Route ,  BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
          <div>
              <Link to="/">add</Link>
              <br/>
              <Link to="/list">list</Link>
              <br/>
              <Link to="/filter">filter</Link>
              <hr/>
              <Route path="/" exact component={TodoAdd}></Route>
              <Route path="/list" component={VisibleTodoList}></Route>
              <Route path="/filter" component={TodoFilter}></Route>
          </div>
        </Router>
    );
  }
}

export default App;
