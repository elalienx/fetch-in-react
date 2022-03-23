// Project files
import TodoItem from "../components/TodoItem";

export default function TasksScreen({ url, tasksState }) {
  const [tasks, setTasks] = tasksState;

  // Properties
  const header = {
    "Content-type": "application/json; charset=UTF-8",
  };

  // Components
  const TodoItems = tasks.map((item) => (
    <TodoItem key={item.id} item={item} actions={[onDelete, onUpdate]} />
  ));

  // Methods
  async function onCreate() {
    const newTasks = {
      userId: "5",
      title: "Buy groceries",
      completed: false,
    };

    await fetch(`x${url}`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(newTasks),
    });

    newTasks.id = tasks.length;
    setTasks([...tasks, newTasks]);
  }

  function onUpdate(updatedItem) {
    fetch(`X${url}/${updatedItem.id}`, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(updatedItem),
    });

    const clonedTasks = [...tasks];
    const index = clonedTasks.findIndex((item) => item.id === updatedItem.id);
    clonedTasks[index] = updatedItem;
    setTasks(clonedTasks);
  }

  async function onDelete(id) {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    const filteredArray = tasks.filter((item) => item.id !== id);
    setTasks(filteredArray);
  }

  return (
    <div id="tasks-screen">
      <h1>Hello world</h1>
      <button onClick={() => onCreate()}>Create tasks</button>
      <ol>{TodoItems}</ol>
    </div>
  );
}
