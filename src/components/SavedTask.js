import DeleteButton from "./DeleteButton";
// import { currentTaskText} from "./CurrentTask"; 

export default function SavedTask({currentTaskText, elapsedTime}) {
  return(
    <div className='savedTask'>
      <div className='savedTaskInfo'>
        <span>{elapsedTime}</span>
        <span>{currentTaskText}</span>
      </div>
      <div className="savedTaskBtns">
        <DeleteButton />  
      </div>
      
    </div>

  )
}