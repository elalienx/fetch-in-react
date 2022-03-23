// Project files
import TodoItem from "../components/TodoItem";
import { fetchCreate, fetchUpdate, fetchDelete } from "../scripts/fetching";

export default function TasksScreen({ tasks, actions }) {
  const { createTask, updateTask, deleteTask } = actions;

  // Property
  const newTask = {
    userId: 5,
    title: "Buy groceries and snacks",
    completed: false,
  };

  // Methods
  async function onCreate(newTask) {
    await fetchCreate(newTask);
    createTask(newTask);
  }

  async function onUpdate(updatedTask) {
    await fetchUpdate(updatedTask);
    updateTask(updatedTask);
  }

  async function onDelete(taskId) {
    await fetchDelete(taskId);
    deleteTask(taskId);
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
