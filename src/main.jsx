import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx0;'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {ThemeProvider, createTheme, CssBaseline } from '@mui/material'

export const Theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, Open Sans'
   },

   palette: {
    primary: {
       main: 'rgba(151, 133, 186, 1)',
       light: 'rgba(175, 159, 205, 1)',
       white: 'rgba(249, 250, 250, 1)',
    },

    secondary: {
      main: 'rgba(215, 199, 244, 1)',
      white: 'rgba(255, 255, 255, 1)',
    },

    background: {
      default: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)',
      paper: 'rgba(215, 199, 244, 0.13)',
    },

    text: {
      primary: 'rgba(60, 60, 60, 1)',
    }

   },

   components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)', // Setting body background
          color: 'rgba(60, 60, 60, 1)', // Default text color for the body
          fontFamily: 'Ubuntu, Open Sans', // Applying font globally
          margin: 0, // Resetting margin
          padding: 0, // Resetting padding
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          backgroundColor: "rgba(215, 199, 244, 1)",
          color: 'rgba(60, 60, 60, 1)',
          fontSize: '20px',
        },
      },
    }
   }

})


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <RouterProvider router={router}/>
    </ThemeProvider>
    
  </StrictMode>,
)
