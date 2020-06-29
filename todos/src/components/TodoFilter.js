import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilter } from '../actions';

const TodoFilter = () => (
  <div>
    <span>show: </span>
    <FilterLink filter={VisibilityFilter.SHOW_ALL}>all</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>unfinished</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>finished</FilterLink>
  </div>
);

export default TodoFilter;