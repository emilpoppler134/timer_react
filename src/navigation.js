import { createBrowserRouter } from "react-router-dom";

import Start from './pages/Start';
import History from './pages/History';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  { path: "/", element: <Start /> },
  { path: "/history", element: <History /> },
  { path: "/login", element: <Login />, },
  { path: "/signup", element: <Signup />, }
]);

export default router;