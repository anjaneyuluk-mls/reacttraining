import App from './App';
import ListExample from './Screens/ListExample';
import AntdTable from './Screens/TableExample';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/list',
    element: <ListExample />,
  },
  {
    path: '/table',
    element: <AntdTable />,
  },
];

export default routes;
