import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/tools',
});

export default api;