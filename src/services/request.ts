import axios from 'axios';

const baseURL = 'http://121.41.16.183:3000/mock/16';

const request = axios.create({
  baseURL,
  timeout: 10000,
});

export default request;
