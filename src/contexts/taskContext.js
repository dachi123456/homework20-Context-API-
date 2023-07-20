import {createContext, useCallback, useContext, useMemo } from "react";
import useRequest from "../hooks/useRequest";
import useFetch from "../hooks/useFetch";

const TaskContext = createContext(null)

const TaskContextProvider = ({children}) => {
    
    const {error,loading:dataLoading,response,resendRequest} = useFetch({url:'/api/v1/Todolist', method: 'GET'})
    const {sendRequest,loading:deleteLoading} = useRequest({method:'DELETE'})


    const taskList1 = useMemo(() => {
       return response?.items?.map(t => {
            return {
              task: t.task,
              id: t._uuid,
              firstName: t.firstName,
              lastName:t.lastName,
              deadline: t.deadline
            };
          }) || [];
      
    },[response])

    const handleDelete = useCallback(() => (taskId) => {
        sendRequest(null,`/api/v1/Todolist/${taskId}`).then(() => resendRequest())
        },[resendRequest, sendRequest])

      const contextVal = useMemo(() => ({
        error,
        dataLoading,
        deleteLoading,
        taskList1,
        handleDelete
      }),[error,dataLoading,deleteLoading,taskList1,handleDelete])


      return <TaskContext.Provider value={contextVal}>
        {children}
      </TaskContext.Provider>
}

export const useTaskContext = () => {
    const contextValue = useContext(TaskContext)
    if(!contextValue) throw new Error('error')


    return contextValue
}


export default TaskContextProvider