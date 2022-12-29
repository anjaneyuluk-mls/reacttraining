import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AntdTable from './TableExample';
import MyForm from './MyForm';
import ListExample from './ListExample';
import { Button, Result, Typography } from 'antd';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'table',
        element: <AntdTable />,
      },
      {
        path: 'form',
        element: <MyForm />,
      },
      {
        path: 'list',
        element: <ListExample />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button  type="primary">Back Home</Button>}
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
