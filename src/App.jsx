import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import routers from './routers/routers'
import Sidebar from '@components/Sidebar/Sidebar'
import ToastProvider from './contexts/ToastProvider'

function App() {
    const router = createBrowserRouter(createRoutesFromElements(routers))

    return (
        <ToastProvider>
            <Sidebar />
            <RouterProvider router={router} />
        </ToastProvider>
    )
}

export default App
