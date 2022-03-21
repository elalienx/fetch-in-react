// NPM packages
import { useEffect, useState } from "react";

// Project file
import Whatever from "./components/Whatever";

export default function App() {
  // Local state
  const [task, setTask] = useState({});

  // Method
  // 1.The arrow function
  // 2. Array of variables that decides if we re-run this useEffect hook
  useEffect(async () => {
    console.log("1. App.jsx useEffect()");
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const response = await fetch(url);
    const json = await response.json();

    setTask(json);
  }, []);

  return (
    <div className="App">
      <Whatever />
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
