// NPM packages
import { useEffect, useState } from "react";

export default function App() {
  // Local state
  const [task, setTask] = useState({});

  // Properties
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  // Method
  useEffect(() => loadData(url, setTask), []);

  function loadData(url, setState) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setState(json));
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
