let nextTodoId = 0;

const Todo_API = "https://run.mocky.io/v3/d9d517c2-525c-4109-a0c5-a02230d1c934?mocky-delay=3000ms";

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
//增加异步操作
export const fetchTodosFromServer = () => (dispatch, getState) => {
  dispatch({type: 'FETCH_TODOS_START'});
  return fetch(Todo_API)
    .then(response => response.json())
    .then(todos => {
      console.log(todos,'todostodostodos');
      dispatch({type: 'FETCH_TODOS_SUCCESS', payload: todos});
    })
    .catch(error => {
      dispatch({type: 'FETCH_TODOS_ERROR', payload: error});
    });
}