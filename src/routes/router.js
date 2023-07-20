import { Outlet } from "react-router-dom";
import Header from "../components/header";
import TaskContextProvider from "../contexts/taskContext";
import CreatePage from "../pages/createPage";
import EditPage from "../pages/editPage";
import MainPage from "../pages/mainPage";
import ThemeContextProvider from "../contexts/ThemeContext";

const router = [
    {
        element: (
            <div>
                <ThemeContextProvider>
                    <Header />
                    <Outlet />
                </ThemeContextProvider>
            </div>
        ),
        path: '/',
        children: [
            {
                element: (
                    <div>
                        <TaskContextProvider>
                            <MainPage />
                            
                        </TaskContextProvider>
                    </div>
                ),
                index: true
            },
            {
                element: <CreatePage />,
                path: 'create'
            },
            {
                element: <EditPage />,
                path: 'edit/:taskId'
            }
        ]
        
    }
]



export default router