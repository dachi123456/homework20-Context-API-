import { useNavigate } from "react-router-dom";
import TodoForm from "../components/todoForm"
import useRequest from "../hooks/useRequest";
import { useThemeContext } from "../contexts/ThemeContext";

const CreatePage = () => {
    const {loading,sendRequest} = useRequest({url:'/api/v1/Todolist',method: 'POST'})
    const navigate = useNavigate()
    const {theme} = useThemeContext()
    const onFormSubmit = (task,firstName,lastName,deadLine) => {
        sendRequest([{task,firstName,lastName,deadLine}])
        .then(() => navigate('/'))
      };

      if(loading) return <p>loading . . .</p>
    return(
        <div>
            
            <TodoForm onFormSubmit={onFormSubmit}/>
            <p>{theme}</p>
        </div>
    )

}

export default CreatePage