import React from 'react';
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
}

export default App;