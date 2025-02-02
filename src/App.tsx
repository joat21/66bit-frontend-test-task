import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<h1>Главная</h1>} />
        <Route path="employees-list" element={<h1>Список сотрудников</h1>} />
        <Route path=":id" element={<h1>Сотрудник</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
