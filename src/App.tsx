import React from 'react';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import TaskApp from "./TaskApp";
import './App.css';
import './TaskCard.css'; // If styles are added here
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tasks",
    element: <TaskListPage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}
export default App;