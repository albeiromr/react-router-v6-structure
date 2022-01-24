import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404Component, HomeComponent, LoginComponent, PrivateRouteComponent, PublicRouteComponent } from './testing-components/test-components.component';
import  App  from '../App'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<App />}>
                    <Route path="/" element={<HomeComponent />}/>
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/public-route" element={<PublicRouteComponent />}/>
                    <Route path="/private-route" element={<PrivateRouteComponent />}></Route>
                    <Route path="/404" element={<Error404Component />} />
                    <Route path="*" element={<Error404Component />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;