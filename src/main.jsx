import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contato from './routes/Contact.jsx'
import { ThemeProvider } from './context/Theme_Context.jsx'
import Todo from './routes/Todo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <Home />},
      {path: '/contact', element: <Contato />},
      {path: '/todo', element: <Todo />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
  </StrictMode>,
)
