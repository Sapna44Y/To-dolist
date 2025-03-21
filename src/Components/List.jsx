import ItemList from "./ItemList";

const List = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <>
      {tasks.length > 0 && (
        <table className="todo-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <ItemList
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                editTask={editTask}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default List;
