import React from 'react';
import {todoView as Todos} from './todos/';
import {view as Filter} from './filter/';

function TodoApp() {
  return(
    <div>
      <Todos />
      <Filter />
    </div>
  );
}

export default TodoApp;
