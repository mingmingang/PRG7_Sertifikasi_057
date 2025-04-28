// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar
import Footer from './components/Footer';  // Import Footer
import Home from './pages/Home';
import Pelanggan from './pages/Pelanggan';
import TambahPelanggan from './pages/TambahPelanggan';
import EditPelanggan from './pages/EditPelanggan';
import JenisLayanan from './pages/JenisLayanan';
import TambahJenisLayanan from './pages/TambahJenisLayanan';
import TransaksiPembayaran from './pages/TransaksiPembayaran';
import TambahTransaksiPembayaran from './pages/TambahTransaksiPembayaran';

export default function App() {
  return (
    <>
      {/* Menampilkan Navbar di setiap halaman */}
      <Navbar />

      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Home />} />

        {/* Daftar pelanggan */}
        <Route path="/pelanggan" element={<Pelanggan />} />
        <Route path="/jenisLayanan" element={<JenisLayanan />} />
        <Route path="/jenisLayanan/tambah" element={<TambahJenisLayanan />} />

        {/* Form tambah pelanggan */}
        <Route path="/pelanggan/tambah" element={<TambahPelanggan />} />

        {/* Form edit pelanggan, :idPelanggan jadi param dinamis */}
        <Route path="/pelanggan/edit/:id" element={<EditPelanggan />} />

        {/* Redirect kalau path gak dikenali */}
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/transaksiPembayaran" element={<TransaksiPembayaran />} />
        <Route path="/transaksiPembayaran/tambah" element={<TambahTransaksiPembayaran />} />
      </Routes>

      {/* Menampilkan Footer di setiap halaman */}
      <Footer />
    </>
  );
}
