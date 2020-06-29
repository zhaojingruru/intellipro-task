import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchTodosFromServer } from '../actions';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
      // eslint-disable-next-line
    this.todoInput;

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.todoInput.value.trim()) {
      return;
    }

    this.props.dispatch(addTodo(this.todoInput.value));
    this.todoInput.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={todoInput => this.todoInput = todoInput} />
          <button type="submit">add</button>
          <button 
            onClick={() => this.props.dispatch(fetchTodosFromServer())}
          >
            {this.props.isLoading ? 'loading' : 'add item from server'}
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading
})

export default connect(mapStateToProps)(TodoAdd);