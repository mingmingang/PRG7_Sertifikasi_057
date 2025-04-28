import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/pelanggans';

export const listPelanggans = () => {
  return axios.get(`${REST_API_BASE_URL}/getPelanggans`);
};

export const savePelanggan = (pelanggan) => {
  return axios.post(`${REST_API_BASE_URL}/savePelanggan`, pelanggan);
};

export const updatePelanggan = (pelanggan) => {
  return axios.post(`${REST_API_BASE_URL}/updatePelanggan`, pelanggan);
};

export const deletePelanggan = (pelanggan) => {
  return axios.post(`${REST_API_BASE_URL}/deletePelanggan`, { data: pelanggan });
};

export const getPelangganById = (id) =>
    axios.get(`${REST_API_BASE_URL}/getPelanggan/${id}`);
