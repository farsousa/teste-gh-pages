import axios from 'axios';

type stringBusca = {
    url: string
};

const api = axios.create({

 baseURL: "http://localhost:3000"   

});
export default api;