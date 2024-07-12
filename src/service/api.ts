import axios from 'axios';

type stringBusca = {
    url: string
};

const api = axios.create({

 baseURL: "http://franc4230.c44.integrator.host/"   

});
export default api;