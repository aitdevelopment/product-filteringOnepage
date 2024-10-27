import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import SingleProduct from "../pages/singleProduct/SingleProduct";


const route  = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/products/:aaa",
                element:<SingleProduct/>
            }
        ]
    }
]);

export default route;