import React, { useState } from "react";
import "./App.css";

import CurrentTask from './components/TaskCreator';
import FooterControls from './components/FooterControls';

import Timer from './components/Timer';

function App() {

  const [currentTask, setCurrentTask] = useState('')
  const [savedTasks, setSavedTasks] = useState([])
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");


  function addTaskToSavedTasks(elapsedTime, currentTask) {
   
    if (!newTask) {
      alert("Please name your task...");
      return;
    }

    const newTask = {
      id: Math.floor(Date.now() / 1000),
      date: Date.now(),
   
      taskText: currentTask,
    };

    setSavedTasks((oldList) => [...oldList, newTask]);
    setCurrentTask('')
  }

  function deleteItem(id) {
    const newArray = savedTasks.filter((item) => item.id !== id)
    setSavedTasks(newArray)  
  }

  /* Edit an item text after creating it. */
  function editItem(id, newText) {
    // Get the current item
    const currentItem = items.filter((item) => item.id === id);

    // Create a new item with same id
    const newItem = {
      id: currentItem.id,
      value: newText,
    };

    deleteItem(id);

    // Replace item in the item list
    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }

  // Main part of app
  return (
    <div className="app">
      {/* 1. Header  */}
      <h1>My Todo List</h1>

      {/* 2. Add new item (input) */}
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      {/* Add (button) */}
      <button onClick={() => addItem()}>Add</button>

      {/* 3. List of todos (unordered list) */}
      <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </button>
              </li>

              {showEdit === item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;