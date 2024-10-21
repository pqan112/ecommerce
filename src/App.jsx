import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import routers from './routers/routers'
import Sidebar from '@components/Sidebar/Sidebar'
import SidebarProvider from './contexts/SideBarProvider'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(routers)
    )

    return (
        <SidebarProvider>
            <Sidebar />
            <RouterProvider router={router} />
        </SidebarProvider>
    ) 
        
    
    
}

export default App
