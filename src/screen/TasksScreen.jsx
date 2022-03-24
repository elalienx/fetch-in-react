// Project files
import TodoItem from "../components/TodoItem";
import { useTasks } from "../state/TasksContext";
import { fetchCreate, fetchDelete } from "../scripts/fetching";
import fetchUpdate from "../scripts/fetchUpdate";
import fakeTask from "../data/fakeTask.json";
import messages from "../data/messages.json";

export default function TasksScreen({ url }) {
  const { tasks, createTask, updateTask, deleteTask } = useTasks();

  // Methods
  async function onCreate(newTask) {
    await fetchCreate(url, newTask);
    createTask(newTask);
  }

  async function onUpdate(updatedTask) {
    const fetch = await fetchUpdate(url, updatedTask);

    if (fetch) updateTask(updatedTask);
    else alert(messages.tasks.updateError);
  }

  async function onDelete(taskId) {
    await fetchDelete(url, taskId);
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
