import { useState } from "react";


const ToDoItem = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />

          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span className={task.completed ? "completed" : ""}>{task.text}</span>

          <div className="buttons">
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => setIsEditing(true)}>Edit</button>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
