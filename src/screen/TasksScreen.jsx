// Project files
import TodoItem from "../components/TodoItem";
import { useTasks } from "../state/TasksContext";
import { fetchCreate, fetchUpdate, fetchDelete } from "../scripts/fetching";
import fakeTask from "../data/fakeTask.json";

export default function TasksScreen() {
  const { tasks, createTask, updateTask, deleteTask } = useTasks();

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
      <button onClick={() => onCreate(fakeTask)}>Create tasks</button>
      <ol>{TodoItems}</ol>
    </div>
  );
}
