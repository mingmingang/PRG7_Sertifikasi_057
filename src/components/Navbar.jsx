import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  
  return (
    <nav className="navbar custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bengkel Bahari
        </Link>
        <ul className="nav-menu">
          <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`nav-item dropdown ${pathname.startsWith('/pelanggan') ? 'active' : ''}`}>
            <span className="dropdown-toggle">Pelanggan</span>
            <ul className="dropdown-menu">
              <li><Link to="/pelanggan">Daftar Pelanggan</Link></li>
              <li><Link to="/pelanggan/tambah">Tambah Pelanggan</Link></li>
            </ul>
          </li>
          <li className={`nav-item dropdown ${pathname.startsWith('/jenisLayanan') ? 'active' : ''}`}>
            <span className="dropdown-toggle">Jenis Layanan</span>
            <ul className="dropdown-menu">
              <li><Link to="/jenisLayanan">Daftar Layanan</Link></li>
              <li><Link to="/jenisLayanan/tambah">Tambah Layanan</Link></li>
            </ul>
          </li>
          <li className={`nav-item dropdown ${pathname.startsWith('/transaksi') ? 'active' : ''}`}>
            <span className="dropdown-toggle">Transaksi Service</span>
            <ul className="dropdown-menu">
              <li><Link to="/transaksiPembayaran">Daftar Transaksi</Link></li>
              <li><Link to="/transaksiPembayaran/tambah">Tambah Transaksi</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
