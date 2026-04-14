import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homePages/HomePage";
import TimeLine from "../pages/timeLine/TimeLine";
import Stats from "../pages/stats/Stats";
import ErrorPage from "../pages/errorPage/ErrorPage";



export const router =createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            index: true,
            element: <HomePage/>
        },
        {
            path: 'timeline',
            element: <TimeLine/>
        },
        {
            path: 'stats',
            element: <Stats/>
        }
      ],
      errorElement: <ErrorPage/>
    }
  ]
)