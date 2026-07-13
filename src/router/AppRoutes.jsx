import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/comman/Login";
import { Signup } from "../components/comman/Signup";
import { UserNavbar } from "../components/user/UserNavbar";
import { UserOrder } from "../components/user/UserOrder";
import { AdminSideBar } from "../components/admin/AdminSideBar";
import { UserList } from "../components/admin/UserList";
import { ProtectedRoutes } from "../components/comman/ProtectedRoutes";
import { Cart } from "../components/user/Cart";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"/user",
        element:<UserNavbar/>,
        children:[
            {
                path:"orders",
                element:
                <ProtectedRoutes>
                    <UserOrder/>
                </ProtectedRoutes>
            },
            {
                path:"cart",
                element:<Cart/>
            }
        ]
    },
    {
        path:"/admin",
        element:<AdminSideBar/>,
        children:[
            {
                path:"userlist",
                element:<UserList/>
            }
        ]
    }
])

const AppRoutes = ()=>{

    return <RouterProvider router={router}></RouterProvider>
}
export default AppRoutes;