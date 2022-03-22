// Project files
import TodoItem from "../components/TodoItem";

export default function TasksScreen({ url, tasksState }) {
  const [tasks, setTasks] = tasksState;

  // Components
  const TodoItems = tasks.map((item) => (
    <TodoItem key={item.id} item={item} onDelete={onDelete} />
  ));

  // Methods
  async function onDelete(id) {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    // We do a inverse filter, instead of saying where item.id equals id, we say where item.id does not equal id
    const filteredArray = tasks.filter((item) => item.id !== id);
    setTasks(filteredArray);
  }

  return (
    <div id="tasks-screen">
      <h1>Hello world</h1>
      <ol>{TodoItems}</ol>
      <button>Create tasks</button>
    </div>
  );
}
