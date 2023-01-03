import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AntdTable from './TableExample';
import MyForm from './MyForm';
import Something from './ListExample';
import { Button, Result, Typography } from 'antd';
import { Login } from './screens/Login';
import { ProtectedRoute } from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute condition={() => localStorage.getItem('token')}>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'table',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <AntdTable />
          </ProtectedRoute>
        ),
      },
      {
        path: 'form',
        element: (
          <ProtectedRoute redirect={'list'}>
            <MyForm />
          </ProtectedRoute>
        ),
      },
      {
        path: 'list',
        element: <Something />,
      },
    ],
  },
  {
    path: 'signIn',
    element: <Login />,
  },
  {
    path: '*',
    element: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
