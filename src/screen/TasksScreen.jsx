// Project files
import TodoItem from "../components/TodoItem";

export default function TasksScreen({ tasks, actions }) {
  const { createTask, updateTask, deleteTask } = actions;

  // Methods
  async function onCreate(newTask) {
    await fetchingCreate(newTask); // this update the server
    createTask(newTask); // this update the local state
  }

  async function onUpdate(updatedTask) {
    await fetchingUpdate(updatedTask); // this update the server
    updateTask(updatedTask); // this update the local state
  }

  async function onDelete(taskId) {
    await fetchingDelete(taskId); // this update the server
    deleteTask(taskId); // this update the local state
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
