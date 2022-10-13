import React from 'react'
import Sidebar from './components/Sidebar'
import NewsContainer from './components/NewsContainer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Sidebar /> ,
    children:[
      {
        path:"/",
        element: <NewsContainer category={"general"}/>
      },
      {
        path:"/business",
        element: <NewsContainer category={"business"}/>
      },
      {
        path:"/technology",
        element: <NewsContainer category={"technology"}/>
      },
      {
        path:"/entertainment",
        element: <NewsContainer category={"entertainment"}/>
      },
      {
        path:"/science",
        element: <NewsContainer category={"science"}/>
      },
      {
        path:"/sports",
        element: <NewsContainer category={"sports"}/>
      },
      {
        path:"/health",
        element: <NewsContainer category={"health"}/>
      }
    ]
  }
])
const RootApp = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default RootApp