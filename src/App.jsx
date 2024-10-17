import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import routers from './routers/routers'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(routers)
        // routers.map((item) => ({
        //     path: item.path,
        //     element: <item.component />
        // }))
    )

    return <RouterProvider router={router} />
}

export default App
