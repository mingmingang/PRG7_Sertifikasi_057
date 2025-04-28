import axios from 'axios';

// URL dasar untuk akses API
const REST_API_BASE_URL = 'http://localhost:8080/layanans';

// Fungsi untuk mengambil daftar jenis layanan
export const listJenisLayanans = () => {
  return axios.get(`${REST_API_BASE_URL}/getLayanans`);
};

// Fungsi untuk menyimpan jenis layanan baru
export const saveJenisLayanan = (jenisLayanan) => {
  return axios.post(`${REST_API_BASE_URL}/saveJenisLayanan`, jenisLayanan);
};

// Fungsi untuk memperbarui jenis layanan yang ada
export const updateJenisLayanan = (jenisLayanan) => {
  return axios.post(`${REST_API_BASE_URL}/updateJenisLayanan`, jenisLayanan);
};

// Fungsi untuk menghapus jenis layanan
export const deleteJenisLayanan = (jenisLayanan) => {
  return axios.post(`${REST_API_BASE_URL}/deleteJenisLayanan`, jenisLayanan);
};
