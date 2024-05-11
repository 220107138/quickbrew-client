import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import MenuPage from './pages/MenuPage/ui/MenuPage';
import { SingleItemPage } from './pages/SingleItemPage/ui/SingleItemPage';
import {createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MenuPage/>,
    },
    {
      path: "/singleItem/:id",
      element: <SingleItemPage/>,
    },
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
