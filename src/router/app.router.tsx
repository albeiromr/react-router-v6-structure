import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeComponent } from './testing-components/test-components.component';
import  App  from '../App'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<App />}>
                    <Route path="/" element={<HomeComponent />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;