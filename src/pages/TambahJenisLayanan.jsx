import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { saveJenisLayanan } from '../services/JenisLayananService';
import "../index.css";
import { Link } from 'react-router-dom';

export default function TambahJenisLayanan() {
  const [jenisLayanan, setJenisLayanan] = useState('');
  const [biaya, setBiaya] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jenisLayanan.trim()) {
      Swal.fire('Gagal!', 'Jenis layanan harus diisi.', 'error');
      return;
    }

    if (!biaya.trim() || isNaN(biaya) || Number(biaya) <= 0) {
      Swal.fire('Gagal!', 'Biaya harus diisi dengan angka yang valid.', 'error');
      return;
    }

    const newJenisLayanan = { jenisLayanan, biaya: Number(biaya) };
    saveJenisLayanan(newJenisLayanan)
      .then(() => {
        Swal.fire('Berhasil!', 'Jenis layanan baru telah ditambahkan.', 'success');
        navigate('/jenis-layanan');
      })
      .catch((err) => {
        console.error('Error adding data:', err);
        Swal.fire('Gagal!', 'Tidak dapat menambahkan jenis layanan.', 'error');
      });
  };

  return (
    <div className="" style={{ marginLeft: "40px", marginRight: "60px", marginTop: "40px" }}>
      <div className="card shadow-lg rounded">
        <div className="card-header bg-success text-white">
          <h2 className="mb-0" style={{ color: "white" }}>Tambah Jenis Layanan</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="jenisLayanan" className="form-label fw-semibold" style={{ marginBottom: "20px" }}>
                Jenis Layanan
              </label>
              <input
                type="text"
                id="jenisLayanan"
                className="custom-input"
                value={jenisLayanan}
                onChange={(e) => setJenisLayanan(e.target.value)}
                placeholder="Masukkan jenis layanan"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="biaya" className="form-label fw-semibold" style={{ marginBottom: "20px" }}>
                Biaya
              </label>
              <input
                type="number"
                id="biaya"
                className="custom-input"
                value={biaya}
                onChange={(e) => setBiaya(e.target.value)}
                placeholder="Masukkan biaya layanan"
                required
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success btn-lg">
                Simpan
              </button>
              <button type="button" className="btn btn-warning btn-lg" style={{ marginLeft: "20px" }}>
                <Link to="/jenisLayanan" className="text-decoration-none">
                  &larr; Kembali ke Daftar Jenis Layanan
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
