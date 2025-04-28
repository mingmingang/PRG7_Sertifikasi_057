// src/components/TransaksiPembayaran.jsx
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { listTransaksiPembayarans, deleteTransaksiPembayaran } from '../services/TransaksiPembayaranService';
import "../index.css";

export default function TransaksiPembayaran() {
  const [transaksiPembayarans, setTransaksiPembayarans] = useState([]);

  // Load daftar transaksi pembayaran
  useEffect(() => {
    listTransaksiPembayarans()
      .then(res => setTransaksiPembayarans(res.data.data))
      .catch(err => console.error('Load error:', err));
  }, []);

  // View detail (tetap pakai ID atau bisa kirim seluruh objek jika butuh)
  const handleView = (transaksiPembayaran) => {
    Swal.fire({
      title: `Detail Transaksi: ${transaksiPembayaran.idTransaksiPembayaran}`,
      html: `
        <p><strong>ID:</strong> ${transaksiPembayaran.idTransaksiPembayaran}</p>
        <p><strong>Jumlah Pembayaran:</strong> ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(transaksiPembayaran.jumlahPembayaran)}</p>
        <p><strong>Tanggal Transaksi:</strong> ${new Date(transaksiPembayaran.tanggalTransaksi).toLocaleDateString()}</p>
      `,
      icon: 'info'
    });
  };

  // Delete — kirim seluruh objek transaksi pembayaran di body
  const handleDelete = (transaksiPembayaran) => {
    Swal.fire({
      title: 'Yakin dihapus?',
      text: `Transaksi Pembayaran dengan ID ${transaksiPembayaran.idTransaksiPembayaran} akan dihapus!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal'
    }).then(({ isConfirmed }) => {
      if (!isConfirmed) return;

      deleteTransaksiPembayaran(transaksiPembayaran)
        .then(() => {
          Swal.fire('Terhapus!', '', 'success');
          setTransaksiPembayarans(prev => prev.filter(t => t.idTransaksiPembayaran !== transaksiPembayaran.idTransaksiPembayaran));
        })
        .catch(err => {
          console.error('Error deleting data:', err);
          Swal.fire('Gagal', 'Tidak dapat menghapus data.', 'error');
        });
    });
  };

  console.log("data transaksi pembayaran:", transaksiPembayarans);

  return (
    <div className="" style={{ marginLeft: "40px", marginRight: "40px", marginTop: "40px" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>💰 Transaksi Pembayaran</h2>
        <Link to="/transaksiPembayaran/tambah" className="btn btn-success" style={{ marginBottom: "10px" }}>
          + Tambah Transaksi
        </Link>
      </div>

      <div className="table-responsive shadow-sm">
        <table className="table table-striped table-hover mb-0">
          <thead className="">
            <tr>
              <th style={{ width: '10%' }}>No</th>
              <th>Nama Pelanggan</th>
              <th>Nama Layanan</th>
              <th>Jumlah Pembayaran</th>
              <th>Tanggal Transaksi</th>
              <th style={{ width: '30%' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {transaksiPembayarans.length === 0
              ? (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">
                    Belum ada transaksi pembayaran.
                  </td>
                </tr>
              )
              : transaksiPembayarans.map((t, idx) => (
                <tr key={t.idSeqPembayaran}>
                  <td>{idx + 1}</td>
                  <td>{t.namaPelanggan}</td>
                  <td>{t.jenisLayanan}</td>
                  <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(t.biayaBayar)}</td>
                  <td>{new Date(t.tanggal).toLocaleDateString('id-ID', {
  weekday: 'long', // "long" will give you the full weekday name
  day: 'numeric', // Numeric day
  month: 'long', // Full month name
  year: 'numeric' // Full year
})}</td>

                  <td style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => handleView(t)}
                    >
                      Lihat
                    </button>
                    <Link
                      to={`/transaksiPembayaran/edit/${t.idTransaksiPembayaran}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(t)}
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
