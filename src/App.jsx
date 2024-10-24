import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import routers from './routers/routers'
import Sidebar from '@components/Sidebar/Sidebar'

function App() {
    const router = createBrowserRouter(createRoutesFromElements(routers))

    return (
        <>
            <Sidebar />
            <RouterProvider router={router} />
        </>
    )
}

export default App
