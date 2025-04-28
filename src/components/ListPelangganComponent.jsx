import React, { useEffect, useState } from 'react';
import { listPelanggans } from '../services/PelangganService';
import { Link } from 'react-router-dom';

function ListPelangganComponent() {
  const [pelanggans, setPelanggans] = useState([]);

  useEffect(() => {
    listPelanggans()
      .then(response => {
        console.log(response);
        setPelanggans(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">PelangganApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Beranda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pelanggan">Daftar Pelanggan</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-light btn-sm shadow-sm">
                  + Tambah Pelanggan
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container py-5">
        <div className="card shadow-lg rounded">
          <div className="card-header bg-success text-white d-flex align-items-center justify-content-between">
            <h2 className="mb-0">
              🛍️ Daftar Pelanggan Setia
            </h2>
          </div>

          <div className="card-body">
            <p className="text-muted mb-4">
              Data pelanggan yang tercatat pada sistem kami.
            </p>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-success">
                  <tr>
                    <th style={{ width: '10%' }}>No</th>
                    <th>Nama Pelanggan</th>
                  </tr>
                </thead>
                <tbody>
                  {pelanggans.length === 0 ? (
                    <tr>
                      <td colSpan="2" className="text-center text-muted">
                        Belum ada pelanggan yang terdaftar. 😥
                      </td>
                    </tr>
                  ) : (
                    pelanggans.map((pelanggan, index) => (
                      <tr key={pelanggan.idPelanggan}>
                        <td>{index + 1}</td>
                        <td>{pelanggan.namaPelanggan}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-footer text-muted text-center">
            ❤️ Terima kasih atas kepercayaan Anda!
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPelangganComponent;
