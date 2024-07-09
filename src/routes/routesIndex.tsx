import { Button } from '@mui/material';
import {Routes, Route, Navigate} from 'react-router-dom'


export const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Button>Pagina inicial</Button>} />

            <Route path='*' element={<Navigate to = "pagina-inicial" />}/>
        </Routes>
    );
}