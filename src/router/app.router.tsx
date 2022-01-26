import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
    Error404Component, 
    HomeComponent, 
    LoginComponent, 
    NestedIndexRoute, 
    NestedRouteOne, 
    NestedRouteTwo, 
    PrivateRouteComponent, 
    PublicRouteComponent 
} from './testing-components/test-components.component';
import  App  from '../App'
import BaseGuard from './guards/base.guard';
import PrivateRouteGuard from './guards/private-route.guard';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<HomeComponent />}/>
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/public-route" element={<PublicRouteComponent />}/>
                    <Route path="/private-route" element={<BaseGuard ><PrivateRouteComponent /></BaseGuard>}>
                        <Route index element={<NestedIndexRoute />}/>
                        <Route path="nested-route-one" element={<NestedRouteOne />}/>
                        <Route path="nested-route-two" element={<PrivateRouteGuard><NestedRouteTwo /></PrivateRouteGuard>}/>
                    </Route>
                    <Route path="*" element={<Error404Component />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;