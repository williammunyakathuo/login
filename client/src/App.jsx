import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Password from './components/Password'
import Profile from './components/Profile'
import Recovery from './components/Recovery'
import Register from './components/Register'
import Reset from './components/Reset'
import Username from './components/Username'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '/password',
    element: <Password></Password>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
