import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Shared/Home/Home";
import { Login } from "../Pages/Login/Login";
import {Register} from "../Pages/Register/Register";
import { Courses } from "../Pages/Shared/Home/Courses";
import { CourseDetails } from "../Pages/Shared/Home/CourseDetails";
import PrivateRoute from "./PrivateRoute";



  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[

        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login> </Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/courses",
          element:<PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>,
          loader:()=> fetch(`http://localhost:5000/courses`)
        },
        {
          path:"/courses/:id",
          element:<PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>,
          loader:({params})=>
            fetch(`http://localhost:5000/courses/${params.id}`),
        },
      ],

    },
  ]);

  export default routes;