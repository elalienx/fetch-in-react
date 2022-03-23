export default function TodoItem({ item, actions }) {
  const { id, title, completed } = item;
  const [onDelete, onUpdate] = actions;

  // Methods
  function onCheck(onUpdate) {
    const clonedItem = { ...item };
    clonedItem.completed = !clonedItem.completed;

    onUpdate(clonedItem);
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onCheck(onUpdate)}
      />
      {title}
      <button onClick={() => onDelete(id)}>Delete me</button>
    </li>
  );
}
