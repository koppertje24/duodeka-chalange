import React from 'react';
import { ToDoGlobalState, initialGlobalState } from './TodoGlobalHead';
import ToDoList from './TodoList';

export default class ToDoGlobal extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialGlobalState;
  }

   // Expose the setGlobals function to the Globals object
   componentDidMount() {
    ToDoGlobalState.set = this.setToDoGlobalState;
  }

  setToDoGlobalState = (data = {}) => {
    const { globals } = this.state;

    // Loop over the data items by key, only updating those which have changed
    Object.keys(data).forEach((key) => {
      globals[key] = data[key];
    });

    // Update the state with the new State
    this.setState(globals);
  };

  render() {
    return (
      <ToDoGlobalState.Provider value={this.state}>
        <ToDoList />
      </ToDoGlobalState.Provider>
    );
  }
}

