// src/components/EditPelanggan.jsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { getPelangganById, updatePelanggan } from '../services/PelangganService';

export default function EditPelanggan() {
  const [namaPelanggan, setNamaPelanggan] = useState('');
  const navigate = useNavigate();        // Untuk redirect setelah edit
  const { idPelanggan } = useParams();   // Mengambil idPelanggan dari URL

  // Ambil data pelanggan berdasarkan idPelanggan
  useEffect(() => {
    getPelangganById(idPelanggan)
      .then((res) => {
        setNamaPelanggan(res.data.data.namaPelanggan);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        Swal.fire('Gagal!', 'Tidak dapat memuat data pelanggan.', 'error');
      });
  }, [idPelanggan]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!namaPelanggan.trim()) {
      Swal.fire('Gagal!', 'Nama pelanggan harus diisi.', 'error');
      return;
    }

    const updatedPelanggan = { idPelanggan, namaPelanggan };

    updatePelanggan(updatedPelanggan)
      .then(() => {
        Swal.fire('Berhasil!', 'Pelanggan berhasil diubah.', 'success');
        navigate('/pelanggan');  // Redirect setelah update berhasil
      })
      .catch((err) => {
        console.error('Error updating data:', err);
        Swal.fire('Gagal!', 'Tidak dapat mengubah data pelanggan.', 'error');
      });
  };

  return (
    <div className="container py-5">
      <h2>Edit Pelanggan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="namaPelanggan" className="form-label">
            Nama Pelanggan
          </label>
          <input
            type="text"
            id="namaPelanggan"
            className="form-control"
            value={namaPelanggan}
            onChange={(e) => setNamaPelanggan(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
