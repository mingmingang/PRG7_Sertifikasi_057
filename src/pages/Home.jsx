import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import service from "../assets/image.png";
import girl from "../assets/girl.png";
import boy from "../assets/boy.png";
import girl2 from "../assets/girl2.png";
import srv from "../assets/service.png";
import testimonial from "../assets/Testimonial.png";
import service1 from "../assets/image.png";
import service2 from "../assets/servicee2.jpg";
import service3 from "../assets/ser.jpg";


function HeroSlider() {
  const images = [service1, service2, service3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ganti gambar setiap 3 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-5" style={{ marginTop: "20px" }}>
      <img
        style={{ borderRadius: "20px" }}
        src={images[currentImageIndex]}
        alt="Hero Image"
        className="img-fluid rounded-3 shadow-lg"
      />
    </div>
  );
}

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
        {/* <img 
          style={{borderRadius:"20px"}}
          src={service}
          alt="Hero Image"
          className="img-fluid rounded-3 shadow-lg"
        /> */}
        <HeroSlider/>
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
                src={girl}
                alt="Customer 1"
                style={{height:"600px", objectFit:"cover"}}
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
                src={boy}
                style={{height:"600px", objectFit:"cover"}}
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
                src={girl2}
                style={{height:"600px", objectFit:"cover"}}
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
              src={srv}
              style={{height:"300px", objectFit:"cover"}}
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
              src={testimonial}
              style={{height:"300px", objectFit:"cover"}}
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
