import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import "./css/custom.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./pages/Dashboard";
import TodoScreen from "./pages/TodoScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateTodoForm from "./pages/UpdateTodoForm";
import CreateTodoForm from "./pages/CreateTodoForm";
import Privateroutes from "./components/PrivateRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      

      <Route path="" element={<Privateroutes />}>
        <Route index={true} path="/" element={<Dashboard />} />
        <Route path="/todo/:id" element={<TodoScreen />} />
        <Route path="/todo/:id/update" element={<UpdateTodoForm />} />
      <Route path="/create" element={<CreateTodoForm />} />
      
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
