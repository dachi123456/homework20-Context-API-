import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import TodoForm from "../components/todoForm"
import useRequest from "../hooks/useRequest"

const EditPage = () => {
    const {taskId} = useParams()
    const {error,loading,response} = useFetch({url: `/api/v1/Todolist/${taskId}`, method: 'GET'})
    const {sendRequest} = useRequest({url:`/api/v1/Todolist/${taskId}`,method:'PUT'})
    const navigate = useNavigate()

    const onFormSubmit = (task,firstName,lastName,deadline) => {
        sendRequest({task,firstName,lastName,deadline})
        .then(() => navigate('/'))
        .catch((err) => console.log(err))
    }

    if(loading && !response) return <p>loading . . .</p>
    if(error || !response) return <p>hait</p>
    return(
        <TodoForm onFormSubmit={onFormSubmit}
            task={response.task}
            firstName={response.firstName}
            lastName={response.lastName}
            deadline={response.deadline}
        />
    )
}

export default EditPage