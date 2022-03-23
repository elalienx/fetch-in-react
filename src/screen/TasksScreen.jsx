// Project files
import TodoItem from "../components/TodoItem";

export default function TasksScreen() {
  // Methods
  async function onCreate(newTask) {
    await fetchingCreate(newTask); // this update the server
    createTask(newTask); // this update the local state
  }

  async function onUpdate(updatedItem) {
    await fetchingUpdate(updatedItem); // this update the server
    updateTask(updatedItem); // this update the local state
  }

  async function onDelete(id) {
    await fetchingDelete(id); // this update the server
    deleteTask(id); // this update the local state
  }

  // Components
  const TodoItems = tasks.map((item) => (
    <TodoItem key={item.id} item={item} actions={[onDelete, onUpdate]} />
  ));

  return (
    <div id="tasks-screen">
      <h1>Hello world</h1>
      <button onClick={() => onCreate(newTask)}>Create tasks</button>
      <ol>{TodoItems}</ol>
    </div>
  );
}
