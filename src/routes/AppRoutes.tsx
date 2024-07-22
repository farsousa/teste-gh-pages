import {Routes, Route, Navigate} from 'react-router-dom'
import TelaInicial from '../pages/TelaInicial';
import TelaSimulado from '../pages/TelaSimulado';

  const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/pagina-inicial' element={<TelaInicial/>} />
            <Route path='/simulado' element={<TelaSimulado/>} />
            <Route path='/resultadoSimulado' element={<><h1>Tela Resultado</h1></>} />
            <Route path='*' element={<Navigate to = "pagina-inicial" />}/>
        </Routes>
    );
}
export default AppRoutes