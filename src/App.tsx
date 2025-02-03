import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { EmployeesListPage } from './pages/EmployeesList.page';
import { EmployeeProfilePage } from './pages/EmployeeProfile.page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<h1>Главная</h1>} />
        <Route path="employees-list" element={<EmployeesListPage />} />
        <Route path="employees-list/:id" element={<EmployeeProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
