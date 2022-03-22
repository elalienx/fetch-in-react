// Project files
import TodoItem from "../components/TodoItem";

export default function TasksScreen({ tasks }) {
  // Components
  const TodoItems = tasks.map((item) => <TodoItem key={item.id} item={item} />);

  console.log("TasksScreen.jsx tasks", tasks);

  return (
    <div id="tasks-screen">
      <h1>Hello world @{tasks[5].title}@</h1>
      <ul>{TodoItems}</ul>
    </div>
  );
}
