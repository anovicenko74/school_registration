import CountButton from "../pages/CountButton";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login"
import Registration from '../pages/Registration'
import MainPublic from '../pages/MainPublic'

export const privateRoutes = [
    {path: '/button', component: <CountButton/>},
    {path: '/posts', component: <Posts/>},
    {path: '/posts/:id', component: <PostIdPage/>},
]

export const publicRoutes = [
    {path: '/', component: <MainPublic/>, exact: true},
    {path: '/login', component: <Login/>, exact: true},
    {path: '/registration', component: <Registration/>, exact: true},
]