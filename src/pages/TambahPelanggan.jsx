// src/components/TambahPelanggan.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { savePelanggan } from '../services/PelangganService';
import "../index.css";
import { Link } from 'react-router-dom';


export default function TambahPelanggan() {
  const [namaPelanggan, setNamaPelanggan] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!namaPelanggan.trim()) {
      Swal.fire('Gagal!', 'Nama pelanggan harus diisi.', 'error');
      return;
    }
    const newPelanggan = { namaPelanggan };
    savePelanggan(newPelanggan)
      .then(() => {
        Swal.fire('Berhasil!', 'Pelanggan baru telah ditambahkan.', 'success');
        navigate('/pelanggan');
      })
      .catch((err) => {
        console.error('Error adding data:', err);
        Swal.fire('Gagal!', 'Tidak dapat menambahkan pelanggan.', 'error');
      });
  };

  return (
    <div className="" style={{marginLeft:"40px", marginRight:"60px", marginTop:"40px"
    }}>
      <div className="card shadow-lg rounded">
        <div className="card-header bg-success text-white">
          <h2 className="mb-0" style={{color:"white"}}>Tambah Pelanggan</h2>
        </div> 
        <div className="card-body">
          <form onSubmit={handleSubmit}>

          <div className="mb-4">
               
               <label htmlFor="namaPelanggan" className="form-label fw-semibold" style={{marginBottom:"20px"}}>
                 ID Pelanggan
               </label>
             
               <input
                 type="text"
                 id="namaPelanggan"
                 className="custom-input"
                 value={namaPelanggan}
                 onChange={(e) => setNamaPelanggan(e.target.value)}
                 placeholder="Masukkan ID Pelanggan"
                 required
                 
               />
             </div>

            <div className="mb-4">
               
              <label htmlFor="namaPelanggan" className="form-label fw-semibold" style={{marginBottom:"20px"}}>
                Nama Pelanggan
              </label>
            
              <input
                type="text"
                id="namaPelanggan"
                className="custom-input"
                value={namaPelanggan}
                onChange={(e) => setNamaPelanggan(e.target.value)}
                placeholder="Masukkan nama pelanggan"
                required
                
              />
            </div>

            <div className="mb-4">
               
               <label htmlFor="namaPelanggan" className="form-label fw-semibold" style={{marginBottom:"20px"}}>
                 Nomor Telepon
               </label>
             
               <input
                 type="text"
                 id="namaPelanggan"
                 className="custom-input"
                 value={namaPelanggan}
                 onChange={(e) => setNamaPelanggan(e.target.value)}
                 placeholder="Masukkan nomor telepone"
                 required
               
               />
             </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success btn-lg">
                Simpan
              </button>
              <button type="submit" className="btn btn-warning btn-lg" style={
                {marginLeft:"20px"}
              }>
                 <Link to="/pelanggan" className="text-decoration-none">
                 &larr; Kembali ke Daftar Pelanggan
            </Link>
               
              </button>
            </div>
          </form>
        </div>
       
      </div>
    </div>
  );
}

