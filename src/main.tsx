import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import CreateTrip from './create-trip/index.tsx'


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/create-trip",
		element: <CreateTrip />
	}

])

createRoot(document.getElementById('root')!).render(

	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
