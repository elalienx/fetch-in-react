// NPM packages
import { useEffect, useState } from "react";

// Project file
import ErrorScreen from "./screen/ErrorScreen";
import LoadingScreen from "./screen/LoadingScreen";
import TasksScreen from "./screen/TasksScreen";
import { fetchRead } from "./scripts/fetching";
import { useTasks } from "./state/TasksContext";

export default function App() {
  // Global state
  const { replaceTasks } = useTasks();

  // Local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error.

  // Properties
  const url = "https://jsonplaceholder.typicode.com/todos";

  // Method
  useEffect(() => loadData(url, replaceTasks, setStatus), []);

  async function loadData() {
    const payload = await fetchRead(url);

    if (payload.status === 1) {
      replaceTasks(payload.data);
      setStatus(1);
    }
    if (payload.status === 2) {
      alert(payload.data);
      setStatus(2);
    }
  }

  return (
    <div className="App">
      {status === 0 && <LoadingScreen />}
      {status === 1 && <TasksScreen url={url} />}
      {status === 2 && <ErrorScreen />}
    </div>
  );
}
