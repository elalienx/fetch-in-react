// NPM packages
import { useEffect, useState } from "react";

export default function App() {
  // Local state
  const [task, setTask] = useState({});

  // Method
  // 1.The arrow function
  // 2. Array of variables that decides if we re-run this useEffect hook
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(convertToJSON)
      .then(storeJSON);
  }, []);

  function convertToJSON(data) {
    console.log("App.jsx convertToJSON() data", data);
    return data.json();
  }

  function storeJSON(data) {
    console.log("App.jsx storeJSON() data", data);
    setTask(data);
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
      <ul>
        <li>User id: @{task.userId}@</li>
        <li>Id: @{task.id}@</li>
        <li>Title: @{task.title}@</li>
        <li>Completed: @{task.completed ? "Yes" : "No"}@</li>
      </ul>
    </div>
  );
}
