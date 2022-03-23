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
  const url = "https://jsonplaceholder.typicode.com/todos/";

  // Method
  useEffect(() => loadData(url, setTasks, setStatus), []);

  async function loadData(url, setState, setStatus) {
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

  function createTask(newTask) {
    const newId = tasks.length;

    newTask.id = newId;
    setTasks([...tasks, newTask]);
  }

  function updateTask(updatedTask) {
    const clonedTasks = [...tasks];
    const index = clonedTasks.findIndex((item) => item.id === updateTask.id);

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
          actions={(createTask, updateTask, deleteTask)}
        />
      )}
      {status === 2 && <ErrorScreen />}
    </div>
  );
}
