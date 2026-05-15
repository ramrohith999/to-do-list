import ToDoItem from "./ToDoItem";

const ToDoList=({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
})=>{
return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;