import {Routes, Route, Navigate} from 'react-router-dom'
import TelaInicial from '../pages/TelaInicial';
import TelaSimulado from '../pages/TelaSimulado';

  const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/pagina-inicial' element={<TelaInicial/>} />
            <Route path='/simulado/:id' element={<TelaSimulado/>} />
            <Route path='*' element={<Navigate to = "pagina-inicial" />}/>
        </Routes>
    );
}
export default AppRoutes