import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ApplyExpe from "../ApplyExper/ApplyExpe";
import ApplyFresher from "../ApplyFresher/ApplyFresher";
import ItCompanyDetails from "../ItCompanyDetail/ItCompanyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element:<Register></Register>,
            },
            {
                path: "/details/:id",
                element:<ItCompanyDetails></ItCompanyDetails>,
            },
            {
                path: "/apply-fresher-jobs/:id",
                element:<PrivateRoute><ApplyFresher></ApplyFresher></PrivateRoute>,
            },
            {
                path: "/apply-experienced-jobs/:id",
                element:<PrivateRoute><ApplyExpe></ApplyExpe></PrivateRoute>,
            },
        ]
    },
]);
export default router