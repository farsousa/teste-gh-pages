import axios from 'axios';

type stringBusca = {
    url: string
};

const api = axios.create({

 baseURL: "https://api.github.com"   

});
export default api;