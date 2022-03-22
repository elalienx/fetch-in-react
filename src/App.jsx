// NPM packages
import { useEffect, useState } from "react";

// Project file
import ErrorScreen from "./screen/ErrorScreen";
import LoadingScreen from "./screen/LoadingScreen";
import TasksScreen from "./screen/TasksScreen";

export default function App() {
  // Local state
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error.

  // Properties
  const url = "https://jsonplaceholderX.typicode.com/todos/";

  // Method
  useEffect(() => loadData(url, setTasks), []);

  async function loadData(url, setState) {
    try {
      const response = await fetch(url);
      const json = await response.json();

      setState(json);
      setStatus(1);
    } catch (error) {
      console.error(`Cannot load the todos from ${url}. Error: ${error}`);
      setStatus(2);
    }
  }

  return (
    <div className="App">
      {status === 0 && <LoadingScreen />}
      {status === 1 && <TasksScreen tasks={tasks} />}
      {status === 2 && <ErrorScreen />}
    </div>
  );
}
