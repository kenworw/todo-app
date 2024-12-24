import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./css/custom.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./pages/Dashboard";
import TodoScreen from "./pages/TodoScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index={true} path="/" element={<Dashboard />} />
    <Route path="/todo/:id" element={<TodoScreen />} />
  </Route>)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
