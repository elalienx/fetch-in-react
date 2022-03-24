// NPM Packages
import { createContext, useState, useContext } from "react";

// Properties
const Context = createContext(null);

export function TasksProvider({ children }) {
  // State
  const [tasks, setTasks] = useState([]);

  // Properties
  const values = { tasks, createTask, updateTask, deleteTask, replaceTasks };

  // Methods
  function replaceTasks(tasks) {
    if (tasks === null) throw new Error("This is tasks array");
    if (tasks === undefined) throw new Error("This is tasks array");

    setTasks(tasks);
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

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useTasks() {
  const context = useContext(Context);
  const errorText =
    "To use useTasks(), you need to wrap the parent component with <TaskProvider/>";

  // Safeguard
  if (!context) throw new Error(errorText);

  return context;
}
