import axios from 'axios';

const BASE_URL = "http://localhost:5001/api"

const auth = axios.create({
  baseURL: `${BASE_URL}/auth`,
});

const entry = axios.create({
  baseURL: `${BASE_URL}/entry`,
});

const spenditbot = axios.create({
  baseURL: `${BASE_URL}/spenditbot`,
});

// const order = axios.create({
//   baseURL: `${BASE_URL}/order`,
// });

export default { auth, entry, spenditbot };