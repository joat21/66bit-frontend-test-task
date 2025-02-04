import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { EmployeesListPage } from './pages/EmployeesList.page';
import { EmployeeProfilePage } from './pages/EmployeeProfile.page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
      handle={{ crumb: () => <Link to="/">Главная</Link> }}
    >
      <Route index element={<h1>Главная</h1>} />
      <Route
        path="employees-list"
        handle={{
          crumb: () => <Link to="employees-list">Список сотрудников</Link>,
        }}
      >
        <Route index element={<EmployeesListPage />} />
        <Route
          path=":id"
          element={<EmployeeProfilePage />}
          handle={{
            crumb: (id: string) => (
              <Link to={'employees-list/' + id}>Сотрудник</Link>
            ),
          }}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
