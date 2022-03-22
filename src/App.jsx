// NPM packages
import { useEffect, useState } from "react";

// Project file
import TasksScreen from "./screen/TasksScreen";

export default function App() {
  // Local state
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error.

  // Properties
  const url = "https://jsonplaceholder.typicode.com/todos/";

  // Method
  useEffect(() => loadData(url, setTasks), []);

  async function loadData(url, setState) {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    
    setState(json);
  }

  return (
    <div className="App">
      {status === 0 && <p>🕰 Loading...</p>}
      {status === 1 && <TasksScreen tasks={tasks} />}
      {status === 2 && <p>❌ Error!</p>}
    </div>
  );
}
