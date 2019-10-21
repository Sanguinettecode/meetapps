import axios from 'axios';
import {SERVICE_URL} from 'react-native-dotenv';

const api = axios.create({
  baseURL: SERVICE_URL,
});

export default api;
