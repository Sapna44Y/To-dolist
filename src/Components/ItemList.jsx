import { useState } from "react";

const ItemList = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <tr>
      <td className={task.completed ? "completed" : ""}>
        {isEditing ? (
          <input
            className="iteminput"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          task.text
        )}
      </td>
      <td>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Completed" : "Incomplete"}
        </button>
      </td>
      <td>
        {isEditing ? (
          <button onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ItemList;
