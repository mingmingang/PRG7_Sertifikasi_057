// src/components/JenisLayanan.jsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { listJenisLayanans, deleteJenisLayanan } from '../services/JenisLayananService';
import "../index.css";

export default function JenisLayanan() {
  const [jenisLayanans, setJenisLayanans] = useState([]);

  // Load daftar jenis layanan
  useEffect(() => {
    listJenisLayanans()
      .then(res => setJenisLayanans(res.data.data))
      .catch(err => console.error('Load error:', err));
  }, []);

  // View detail (tetap pakai ID atau bisa kirim seluruh objek jika butuh)
  const handleView = (jenisLayanan) => {
    Swal.fire({
      title: `Detail: ${jenisLayanan.jenisLayanan}`,
      html: `
        <p><strong>ID:</strong> ${jenisLayanan.idJenisLayanan}</p>
        <p><strong>Jenis Layanan:</strong> ${jenisLayanan.jenisLayanan}</p>
      `,
      icon: 'info'
    });
  };

  // Delete — kirim seluruh objek jenis layanan di body
  const handleDelete = (jenisLayanan) => {
    Swal.fire({
      title: 'Yakin dihapus?',
      text: `Jenis Layanan ${jenisLayanan.jenisLayanan} akan dihapus!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal'
    }).then(({ isConfirmed }) => {
      if (!isConfirmed) return;

      deleteJenisLayanan(jenisLayanan)
        .then(() => {
          Swal.fire('Terhapus!', '', 'success');
          setJenisLayanans(prev => prev.filter(j => j.idJenisLayanan !== jenisLayanan.idJenisLayanan));
        })
        .catch(err => {
          console.error('Error deleting data:', err);
          Swal.fire('Gagal', 'Tidak dapat menghapus data.', 'error');
        });
    });
  };

  console.log("data jenis layanan:", jenisLayanans);

  return (
    <div className="" style={{marginLeft:"40px", marginRight:"40px", marginTop:"40px"}}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🛠️ Jenis Layanan</h2>
        <Link to="/jenisLayanan/tambah" className="btn btn-success" style={{marginBottom:"10px"}}>
          + Tambah Layanan
        </Link>
      </div>

      <div className="table-responsive shadow-sm">
        <table className="table table-striped table-hover mb-0">
          <thead className="">
            <tr>
              <th style={{ width: '10%' }}>No</th>
              <th>Jenis Layanan</th>
              <th>Biaya Layanan</th>
              <th style={{ width: '30%' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jenisLayanans.length === 0
              ? (
                <tr>
                  <td colSpan="3" className="text-center text-muted py-4">
                    Belum ada jenis layanan.
                  </td>
                </tr>
              )
              : jenisLayanans.map((j, idx) => (
                <tr key={j.idJenisLayanan}>
                  <td>{idx + 1}</td>
                  <td>{j.jenisLayanan}</td>
                  <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(j.biaya)}</td>
                  <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => handleView(j)}
                    >
                      Lihat
                    </button>
                    <Link
                      to={`/layanan/edit/${j.idJenisLayanan}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(j)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
