export default function TodoItem({ item }) {
  const { id, userId, title, completed } = item;

  return (
    <li className="todo-item">
      <b>User id:</b> @{userId}@,
      <b>Id:</b> @{id}@,
      <b>Title:</b> @{title}@<b>Completed:</b> @{completed ? "Yes" : "No"}@.
    </li>
  );
}
