
import { Link } from "react-router-dom";
import { useTaskContext } from "../contexts/taskContext";
import { langs, useThemeContext } from "../contexts/ThemeContext";

const MainPage = () => {
  const {theme} = useThemeContext()
   const {taskList1,handleDelete,deleteLoading,dataLoading} = useTaskContext()
    
     if(deleteLoading || dataLoading ) return <p>loading . . .</p>
    //  if(error) return <p>{error}</p>
    return <div>
    
      {taskList1.map((task) => (
        <div key={task.id} style={{border: '1px solid grey'}}>
          <p>task: {task.task}</p>
          <p>name: {task.firstName}</p>
          <p>lastName: {task.lastName}</p>
          <p>deadline: {task.deadline}</p>
          <button onClick={() => handleDelete(task.id)}>complate</button>
          <Link to={`/edit/${task.id}`}>edit</Link>
        </div>
      ))}
      <p>{theme}</p>
    </div>
}

export default MainPage