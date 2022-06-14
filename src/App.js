import './App.css';
import React, {useState} from 'react';

function App() {

  const [toDos, setToDos] = useState ([
    'Walk Dog', 'Make Dinner', 'Clean House'
  ])

  const [newToDo, setNewToDo] = useState("");

  const toDosNodes = toDos.map((toDos) => {
    return(
        <li><span>{toDos}</span></li>
    )
  });

  const handleToDoInput = (event) => {
    setNewToDo(event.target.value)
  }

  const saveNewToDo = (event) => {
    event.preventDeafult();
    const copyToDos = [...toDos]
    copyToDos.push({toDos})
    setNewToDo(copyToDos)
    setNewToDo("")
  }

  return (
    <div className="App">

      <h1>ToDo List!</h1>
      <hr></hr>

      <ul>
        {toDosNodes}
      </ul>

      <form onSubmit={saveNewToDo}>
        <label htmlFor="new-todo">Add a new todo:</label>
        <input id='new-todo' type='text' value={newToDo} onChange={handleToDoInput} />
        <input type="submit" value='Save New ToDo' />
      </form>

    </div>
  );
}

export default App;
