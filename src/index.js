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
import { LifeCycleDemo } from './lifecycle/LifeCycleDemo';
import { RCounter } from './usereducer/ReducerDemo';
import { TimerDemo } from './TimerDemo/TimerDemo';
import { UserContext, UserProvider } from './contexts/UserContext';
import { ProfilePage } from './screens/ProfilePage';
import Main from './ReduxDemo/Main';
import Movies from './screens/Movies';
import NewMovie from './screens/NewMovie';

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
        path: 'profile',
        element: <ProfilePage />,
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
    path: 'lifecycle',
    element: <LifeCycleDemo />,
  },

  { path: 'reducer', element: <RCounter /> },
  { path: 'timer', element: <TimerDemo /> },
  { path: 'redux', element: <Main /> },
  { path: 'movies', element: <Movies /> },
  { path: 'newmovie', element: <NewMovie /> },
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
  // <React.StrictMode>
  <div style={{ padding: 24 }}>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </div>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
