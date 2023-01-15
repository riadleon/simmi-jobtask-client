import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Homepage from "../pages/Homepage/Homepage";
import DetailService from "../pages/Homepage/Service/DetailService";
import Profile from "../pages/Profile/Profile";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Homepage />,
                loader: () => fetch('https://simmi-jobtask-server.vercel.app/banner'),

            },
            {
                path: '/service/:id',
                element: <DetailService></DetailService>,
                loader: ({ params }) => fetch(`https://simmi-jobtask-server.vercel.app/service/${params.id}`),

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