import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Homepage from "../pages/Homepage/Homepage";
import Profile from "../pages/Profile/Profile";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Homepage />,

            },
            {
                path: '/about',
                element: <About />,

            },
            {
                path: '/profile',
                element: <Profile />,

            },


        ]
    }
])
export default router;