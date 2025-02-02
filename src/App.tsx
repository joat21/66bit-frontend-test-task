import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Список сотрудников</h1>} />
      <Route path="/:id" element={<h1>Сотрудник</h1>} />
    </Routes>
  );
}

export default App;
