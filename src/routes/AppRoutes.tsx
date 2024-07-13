import {Routes, Route, Navigate} from 'react-router-dom'
import Tela_inicial from '../pages/Tela_inicial';
import Tela_simulado from '../pages/Tela_simulado';

  const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Tela_inicial/>} />
            <Route path='/simulado/:id' element={<Tela_simulado/>} />
            <Route path='*' element={<Navigate to = "pagina-inicial" />}/>
        </Routes>
    );
}
export default AppRoutes