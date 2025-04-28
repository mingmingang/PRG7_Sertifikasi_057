import axios from 'axios';

// Base URL for the API
const REST_API_BASE_URL = 'http://localhost:8080/transaksiPembayarans';

// Function to fetch all transactions
export const listTransaksiPembayarans = () => {
  return axios.get(`${REST_API_BASE_URL}/getTransaksiPembayarans`);
};

// Function to save a new transaction
export const saveTransaksiPembayaran = (transaksiPembayaran) => {
  return axios.post(`${REST_API_BASE_URL}/saveTransaksiPembayaran`, transaksiPembayaran);
};

// Function to edit an existing transaction
export const updateTransaksiPembayaran = (transaksiPembayaran) => {
  return axios.post(`${REST_API_BASE_URL}/editTransaksiPembayaran`, transaksiPembayaran);
};

// Function to delete a transaction
export const deleteTransaksiPembayaran = (transaksiPembayaran) => {
  return axios.post(`${REST_API_BASE_URL}/deleteTransaksiPembayaran`, transaksiPembayaran);
};
