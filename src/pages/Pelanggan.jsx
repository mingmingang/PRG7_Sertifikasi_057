// src/components/Pelanggan.jsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { listPelanggans, deletePelanggan } from '../services/PelangganService';
import "../index.css";

export default function Pelanggan() {
  const [pelanggans, setPelanggans] = useState([]);

  // Load daftar pelanggan
  useEffect(() => {
    
    listPelanggans()
      .then(res => setPelanggans(res.data.data))
      .catch(err => console.error('Load error:', err));
  }, []);

  // View detail (tetap pakai ID atau bisa kirim seluruh objek jika butuh)
  const handleView = (pelanggan) => {
    Swal.fire({
      title: `Detail: ${pelanggan.namaPelanggan}`,
      html: `
        <p><strong>ID:</strong> ${pelanggan.idPelanggan}</p>
        <p><strong>Nama:</strong> ${pelanggan.namaPelanggan}</p>
      `,
      icon: 'info'
    });
  };

  // Delete — kirim seluruh objek pelanggan di body
  const handleDelete = (pelanggan) => {
    Swal.fire({
      title: 'Yakin dihapus?',
      text: `Pelanggan ${pelanggan.namaPelanggan} akan dihapus!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal'
    }).then(({ isConfirmed }) => {
      if (!isConfirmed) return;

      deletePelanggan(pelanggan)
  .then(() => {
    Swal.fire('Terhapus!', '', 'success');
    setPelanggans(prev => prev.filter(p => p.idPelanggan !== pelanggan.idPelanggan));
  })
  .catch(err => {
    console.error('Error deleting data:', err);
    Swal.fire('Gagal', 'Tidak dapat menghapus data.', 'error');
  });

    });
  };

  console.log("data pelanggans:", pelanggans);

  return (
    <div className="" style={{marginLeft:"40px", marginRight:"40px", marginTop:"40px"}}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📋 Data Pelanggan</h2>
        <Link to="/pelanggan/tambah" className="btn btn-success" style={{marginBottom:"10px"}}>
          + Tambah Pelanggan
        </Link>
      </div>

      <div className="table-responsive shadow-sm">
        <table className="table table-striped table-hover mb-0">
          <thead className="">
            <tr>
              <th style={{ width: '10%' }}>No</th>
              <th style={{ width: '15%' }}>ID Pelanggan</th>
              <th>Nama Pelanggan</th>
              <th>Nomor Telepone Pelanggan</th>
              <th style={{ width: '30%' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pelanggans.length === 0
              ? (
                <tr>
                  <td colSpan="3" className="text-center text-muted py-4">
                    Belum ada pelanggan.
                  </td>
                </tr>
              )
              : pelanggans.map((p, idx) => (
               
                <tr key={p.idPelanggan}>
                  <td>{idx + 1}</td>
                  <td>{p.idPelanggan}</td>
                  <td>{p.namaPelanggan}</td>
                  <td>{p.nomorTelepon}</td>
                  <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => handleView(p)}
                    >
                      Lihat
                    </button>
                    <Link
                      to={`/pelanggan/edit/${p.idPelanggan}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(p)}
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
