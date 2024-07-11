import { Button } from '@mui/material';
import {Routes, Route, Navigate} from 'react-router-dom'
import Tela_inicial from '../pages/Tela_inicial';
import Tela_simulado from '../components/CardSimulado';

  const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Tela_inicial/>} />
            <Route path='/simulado' element={<Tela_simulado/>} />
            <Route path='*' element={<Navigate to = "pagina-inicial" />}/>
        </Routes>
    );
}
export default AppRoutes