import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { EmployeesListPage } from './pages/EmployeesList.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<h1>Главная</h1>} />
        <Route path="employees-list" element={<EmployeesListPage />} />
        <Route path="employees-list/:id" element={<h1>Сотрудник</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
