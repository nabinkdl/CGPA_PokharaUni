import Home from "./Pages/Home";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Fotter from "./components/Fotter";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Main Content */}
      <div className="flex-grow">
        <Outlet />
      </div>
      {/* Footer */}
      <Fotter />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
