import { Outlet, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('@pages/HomePage/HomePage'))

const SuspenseLayout = () => (
    <Suspense fallback={<>Loading...</>}>
        <Outlet />
    </Suspense>
)

const routers = (
    <Route element={<SuspenseLayout />}>
        <Route path='/' element={<HomePage />}></Route>
    </Route>
)

export default routers
