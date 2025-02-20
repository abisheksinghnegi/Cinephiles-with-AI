import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppOutlet from './Component/AppOutlet'
import Home from './Pages/Home'
import AI from './Pages/AI'
import Movie from './Pages/Movie'
import About from './Pages/About'
import MovieDetail from './Pages/MovieDetail'

function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<AppOutlet/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/askai",
          element:<AI/>
        },
        {
          path:"/movie",
          element:<Movie/>
        },
        {
          path:"/movie/:movieid",
          element:<MovieDetail/>
        },
        {
          path:"/about",
          element:<About/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
