import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { saveTransaksiPembayaran } from '../services/TransaksiPembayaranService';  // Assuming you have this service to save data
import "../index.css";
import { Link } from 'react-router-dom';

export default function TambahTransaksiPembayaran() {
  const [idPelanggan, setIdPelanggan] = useState('');
  const [idJenisLayanan, setIdJenisLayanan] = useState('');
  const [idSeqPembayaran, setIdSeqPembayaran] = useState('');
  const [biayaBayar, setBiayaBayar] = useState('');
  const [tanggal, setTanggal] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idPelanggan.trim() || !idJenisLayanan.trim() || !idSeqPembayaran.trim()) {
      Swal.fire('Gagal!', 'Semua kolom harus diisi.', 'error');
      return;
    }

    if (!biayaBayar.trim() || isNaN(biayaBayar) || Number(biayaBayar) <= 0) {
      Swal.fire('Gagal!', 'Biaya bayar harus diisi dengan angka yang valid.', 'error');
      return;
    }

    if (!tanggal.trim()) {
      Swal.fire('Gagal!', 'Tanggal harus diisi.', 'error');
      return;
    }

    const newTransaksiPembayaran = { 
      idPelanggan, 
      idJenisLayanan, 
      idSeqPembayaran, 
      biayaBayar: Number(biayaBayar), 
      tanggal: new Date(tanggal).toISOString() 
    };

    saveTransaksiPembayaran(newTransaksiPembayaran)
      .then(() => {
        Swal.fire('Berhasil!', 'Transaksi pembayaran baru telah ditambahkan.', 'success');
        navigate('/transaksi-pembayaran');
      })
      .catch((err) => {
        console.error('Error adding data:', err);
        Swal.fire('Gagal!', 'Tidak dapat menambahkan transaksi pembayaran.', 'error');
      });
  };

  return (
    <div className="" style={{ marginLeft: "40px", marginRight: "60px", marginTop: "40px" }}>
      <div className="card shadow-lg rounded">
        <div className="card-header bg-success text-white">
          <h2 className="mb-0" style={{ color: "white" }}>Tambah Transaksi Pembayaran</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="idPelanggan" className="form-label fw-semibold" style={{ marginBottom: "20px" }}>
                ID Pelanggan
              </label>
              <input
                type="text"
                id="idPelanggan"
                className="custom-input"
                value={idPelanggan}
                onChange={(e) => setIdPelanggan(e.target.value)}
                placeholder="Masukkan ID Pelanggan"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="idJenisLayanan" className="form-label fw-semibold" style={{ marginBottom: "20px" }}>
                ID Jenis Layanan
              </label>
              <input
                type="text"
                id="idJenisLayanan"
                className="custom-input"
                value={idJenisLayanan}
                onChange={(e) => setIdJenisLayanan(e.target.value)}
                placeholder="Masukkan ID Jenis Layanan"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="idSeqPembayaran" className="form-label fw-semibold" style={{ marginBottom: "20px" }}>
                ID Sequence Pembayaran
              </label>
              <input
                type="text"
                id="idSeqPembayaran"
                className="custom-input"
                value={idSeqPembayaran}
                onChange={(e) => setIdSeqPembayaran(e.target.value)}
                placeholder="Masukkan ID Sequence Pembayaran"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="biayaBayar" className="form-label fw-semibold" style={{ marginBottom: "20px" }}>
                Biaya Bayar
              </label>
              <input
                type="number"
                id="biayaBayar"
                className="custom-input"
                value={biayaBayar}
                onChange={(e) => setBiayaBayar(e.target.value)}
                placeholder="Masukkan biaya bayar"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="tanggal" className="form-label fw-semibold" style={{ marginBottom: "20px" }}>
                Tanggal
              </label>
              <input
                type="date"
                id="tanggal"
                className="custom-input"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                required
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success btn-lg">
                Simpan
              </button>
              <button type="button" className="btn btn-warning btn-lg" style={{ marginLeft: "20px" }}>
                <Link to="/transaksi-pembayaran" className="text-decoration-none">
                  &larr; Kembali ke Daftar Transaksi Pembayaran
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
