import DeleteButton from "./DeleteButton";

export default function SavedTask() {
  return(
    <div className='savedTask'>
      <div className='savedTaskInfo'>
        <span>Task Description</span>
      </div>
      <div className="savedTaskBtns">
        <DeleteButton />  
      </div>
      
    </div>

  )
}