export default function TodoItem({ item, onDelete }) {
  const { id, title, completed } = item;

  return (
    <li className="todo-item">
      {title} - <b>{completed ? "Completed" : "Pending"}</b>
      <button onClick={() => onDelete(id)}>Delete me</button>
    </li>
  );
}
