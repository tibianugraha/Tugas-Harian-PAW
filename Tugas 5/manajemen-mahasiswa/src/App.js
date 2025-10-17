// src/App.js
import { useState } from 'react';
import './App.css';
import MahasiswaForm from './components/MahasiswaForm';
import MahasiswaList from './components/MahasiswaList';

function App() {
  const [mahasiswa, setMahasiswa] = useState([]);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Manajemen Data Mahasiswa</h1>
      <MahasiswaForm setMahasiswa={setMahasiswa} />
      <MahasiswaList mahasiswa={mahasiswa} setMahasiswa={setMahasiswa} />
    </div>
  );
}

export default App;