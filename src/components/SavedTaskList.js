
export default function SavedTaskList(savedTasks, deleteItem, updatedText, setUpdatedText, showEdit, setShowEdit, editListItem) {
  return(
  
  <ul>
    {savedTasks.map((task) => {
      return(
        <div>
          <li key={task.id}  onCLick={() => setShowEdit(task.id)}>
            {task.value}
            <button
              className="deleteBtn"
              onClick={() => deleteItem(task.id)}
            > x
            </button>
          </li>
          {showEdit === task.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editListItem(task.id, updatedText)}>
                    Update
                  </button>
                </div>
              ) : null}
        </div>
      );
        })}
      </ul>
    
  );
}
