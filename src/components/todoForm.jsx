import { useRef,  } from "react"

const TodoForm = ({onFormSubmit,task,firstName,lastName,deadline}) => {
    
    const taskRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const deadlineRef = useRef()
    const onSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(taskRef.current.value,firstNameRef.current.value,lastNameRef.current.value,deadlineRef.current.value)
    }
    
    return(
        <form onSubmit={onSubmit}>
            <input
             type="text" 
             placeholder="task..."
             ref={firstNameRef}
             defaultValue={task}
             />
             <input
             type="text" 
             placeholder="firstName"
             ref={taskRef}
             defaultValue={firstName}
             />
             <input
             type="text" 
             placeholder="lastName"
             ref={lastNameRef}
             defaultValue={lastName}
             />
             <input
             type="text" 
             placeholder="deadline"
             ref={deadlineRef}
             defaultValue={deadline}
             />
            
            <button>submit</button>
        </form>
    )
}

export default TodoForm