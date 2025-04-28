import React from 'react';
import { Link } from 'react-router-dom';
import service from "../assets/image.png";

export default function Home() {
  return (
    <div className="" style={{marginRight:"40px", marginLeft:"40px"}}>
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Selamat Datang di Bengkel Bahari!</h1>
          <p className="col-md-8 fs-4 text-muted">
            Kelola data pelanggan Anda dengan mudah dan efisien. 
            Nikmati berbagai fitur terbaik untuk mempermudah manajemen pelanggan.
          </p>
          <Link to="/pelanggan" className="btn btn-success btn-lg">
            🛍️ Lihat Daftar Pelanggan
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="text-center mb-5 " style={{marginTop:"20px"}}>
        <img 
          style={{borderRadius:"20px"}}
          src={service}
          alt="Hero Image"
          className="img-fluid rounded-3 shadow-lg"
        />
      </div>

      {/* Statistic Cards */}
      <div className="row g-4 mb-5">
  <div className="col-md-4">
    <div className="card text-white bg-primary h-100 shadow" style={{ border: '2px solid #007bff', boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)' }}>
      <div className="card-body">
        <h5 className="card-title">Total Pelanggan</h5>
        <p className="card-text fs-2">120</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card text-white bg-warning h-100 shadow" style={{ border: '2px solid #ffc107', boxShadow: '0 4px 8px rgba(255, 193, 7, 0.3)' }}>
      <div className="card-body">
        <h5 className="card-title">Pelanggan Aktif</h5>
        <p className="card-text fs-2">80</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card text-white bg-success h-100 shadow" style={{ border: '2px solid #28a745', boxShadow: '0 4px 8px rgba(40, 167, 69, 0.3)' }}>
      <div className="card-body">
        <h5 className="card-title">Pelanggan Baru Bulan Ini</h5>
        <p className="card-text fs-2">20</p>
      </div>
    </div>
  </div>
</div>


      {/* Gallery Section */}
      <div className="mb-5">
        <h2 className="fw-bold text-center mb-4">Galeri Pelanggan</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow">
              <img 
                src="https://images.unsplash.com/photo-1529673191160-51a582264d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
                alt="Customer 1"
                className="card-img-top rounded-3"
              />
              <div className="card-body">
                <h5 className="card-title">Pelanggan A</h5>
                <p className="card-text">Pelanggan A adalah salah satu pelanggan setia kami dengan layanan premium.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img 
                src="https://images.unsplash.com/photo-1512290391891-10126b2ab232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
                alt="Customer 2"
                className="card-img-top rounded-3"
              />
              <div className="card-body">
                <h5 className="card-title">Pelanggan B</h5>
                <p className="card-text">Pelanggan B selalu puas dengan kualitas layanan kami dan memberikan feedback positif.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-c7d48e274da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
                alt="Customer 3"
                className="card-img-top rounded-3"
              />
              <div className="card-body">
                <h5 className="card-title">Pelanggan C</h5>
                <p className="card-text">Pelanggan C baru-baru ini bergabung dan kami berharap memberikan pengalaman terbaik.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="d-flex justify-content-center mb-5">
        <Link to="/pelanggan/tambah" className="btn btn-outline-success btn-lg me-3">
          + Tambah Pelanggan
        </Link>
        <Link to="/pelanggan" className="btn btn-outline-primary btn-lg">
          Daftar Lengkap
        </Link>
      </div>

      {/* Additional Information Section */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1531493982124-d6f96d241ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=600"
              alt="Information"
              className="card-img-top rounded-3"
            />
            <div className="card-body">
              <h5 className="card-title">Informasi Layanan</h5>
              <p className="card-text">Kami menawarkan berbagai layanan yang dapat disesuaikan dengan kebutuhan pelanggan. Pelajari lebih lanjut tentang berbagai produk dan layanan kami.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1565264305-c10b1b4b7ec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA1fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=600"
              alt="Testimonial"
              className="card-img-top rounded-3"
            />
            <div className="card-body">
              <h5 className="card-title">Testimonial Pelanggan</h5>
              <p className="card-text">Dengarkan apa yang pelanggan kami katakan tentang pengalaman mereka menggunakan aplikasi kami.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
