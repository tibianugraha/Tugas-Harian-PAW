// src/components/MahasiswaList.js
import MahasiswaItem from './MahasiswaItem';

const MahasiswaList = ({ mahasiswa, setMahasiswa }) => {
    if (mahasiswa.length === 0) {
        return (
            <div className="alert alert-info">
                Belum ada data mahasiswa. Silakan tambah data baru.
            </div>
        );
    }

    return (
        <div className="card">
            <div className="card-header">
                <h5>Daftar Mahasiswa</h5>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>NIM</th>
                                <th>Nama</th>
                                <th>Jurusan</th>
                                <th>Angkatan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mahasiswa.map(mhs => (
                                <MahasiswaItem
                                    key={mhs.id}
                                    mahasiswa={mhs}
                                    setMahasiswa={setMahasiswa}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MahasiswaList;