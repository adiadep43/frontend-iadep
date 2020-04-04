import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-config-iadep.herokuapp.com/'
})

export default api;