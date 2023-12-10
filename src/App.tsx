import { BrowserRouter, useRoutes } from "react-router-dom";
import AntConfigProvider from '@com/common/AntdRegistry'
import NavBar from '@com/common/NavBar'
import Home from "./pages/home";
import Example from "./pages/example";
import Zustand from "./pages/zustand";
function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/zustand",
      element: <Zustand />,
    },
    {
      path: "/example",
      element: <Example />,
    },
  ]);
}



export default function App() {
  return (
    <AntConfigProvider >
      <div className='flex flex-col min-h-screen w-full'>
        <NavBar />
        <main className="flex-1" >
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </main>
      </div>
    </AntConfigProvider>
  )
}
