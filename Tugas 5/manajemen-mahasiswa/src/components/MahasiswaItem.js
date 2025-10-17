// src/components/MahasiswaItem.js

const MahasiswaItem = ({ mahasiswa, setMahasiswa }) => {
    const handleDelete = () => {
        setMahasiswa(prev => prev.filter(mhs => mhs.id !== mahasiswa.id));
    };

    return (
        <tr>
            <td>{mahasiswa.nim}</td>
            <td>{mahasiswa.nama}</td>
            <td>{mahasiswa.jurusan || '-'}</td>
            <td>{mahasiswa.angkatan || '-'}</td>
            <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={handleDelete}
                >
                    Hapus
                </button>
            </td>
        </tr>
    );
};

export default MahasiswaItem;