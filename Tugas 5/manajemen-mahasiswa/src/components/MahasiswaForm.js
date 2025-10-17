// src/components/MahasiswaForm.js
import { useState } from 'react';

const MahasiswaForm = ({ setMahasiswa }) => {
    const [formData, setFormData] = useState({
        nim: '',
        nama: '',
        jurusan: '',
        angkatan: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.nim && formData.nama) {
            setMahasiswa(prev => [...prev, { ...formData, id: Date.now() }]);
            setFormData({ nim: '', nama: '', jurusan: '', angkatan: '' });
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h5>Tambah Mahasiswa Baru</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">NIM</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nim"
                                    value={formData.nim}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Nama</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Jurusan</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="jurusan"
                                    value={formData.jurusan}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Angkatan</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="angkatan"
                                    value={formData.angkatan}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Tambah Mahasiswa</button>
                </form>
            </div>
        </div>
    );
};

export default MahasiswaForm;
