import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Dashboard } from './pages/Profile/Dashboard'
import { Settings } from './pages/Profile/Settings'
import { ChangeLoginPage } from './pages/Profile/Settings/ChangeLogin'
import { ChangePasswordPage } from './pages/Profile/Settings/ChangePassword'



const routes = createBrowserRouter([
  {
    path:'',
    element:<Signup/>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:"profile",
    element:<Profile/>,
    children:[
      {
        path:"",
        element:<Dashboard/>
      },
      {
        path:"settings",
        element:<Settings/>,
        children:[
          {
            path:"login",
            element:<ChangeLoginPage/>
          },
          {
            path:"password",
            element:<ChangePasswordPage/>
          }
        ]

      }
      
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={routes}>
    </RouterProvider>
  </StrictMode>,
)
