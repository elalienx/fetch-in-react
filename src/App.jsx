// NPM packages
import { useEffect, useState } from "react";

// Project file
import ErrorScreen from "./screen/ErrorScreen";
import LoadingScreen from "./screen/LoadingScreen";
import TasksScreen from "./screen/TasksScreen";
import { fetchRead } from "./scripts/fetching";

export default function App() {
  // Local state
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error.

  // Method
  useEffect(() => loadData(setTasks, setStatus), []);

  async function loadData() {
    const payload = await fetchRead();

    if (payload.status === 1) {
      setTasks(payload.data);
      setStatus(1);
    }
    if (payload.status === 2) {
      alert(payload.data);
      setStatus(2);
    }
  }

  function createTask(newTask) {
    const newId = tasks.length + 1;

    newTask.id = newId;
    setTasks([...tasks, newTask]);
  }

  function updateTask(updatedTask) {
    const clonedTasks = [...tasks];
    const index = clonedTasks.findIndex((item) => item.id === updatedTask.id);

    clonedTasks[index] = updatedTask;
    setTasks(clonedTasks);
  }

  function deleteTask(taskId) {
    const filteredTasks = tasks.filter((item) => item.id !== taskId);

    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      {status === 0 && <LoadingScreen />}
      {status === 1 && (
        <TasksScreen
          tasks={tasks}
          actions={{ createTask, updateTask, deleteTask }}
        />
      )}
      {status === 2 && <ErrorScreen />}
    </div>
  );
}
