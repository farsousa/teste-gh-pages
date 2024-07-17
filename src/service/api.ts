import axios from 'axios';


const api = axios.create({

 baseURL: "https://franc4230.c44.integrator.host/questoesdetran-ws"   

});
export default api;