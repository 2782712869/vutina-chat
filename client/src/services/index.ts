import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

export const axiosInstance = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    get: {

    },
    post: {

    },
    delete: {

    },
    patch: {
      
    }
  }
});
