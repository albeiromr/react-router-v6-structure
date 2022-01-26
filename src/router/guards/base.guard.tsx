import { ReactElement } from 'react';
import { Navigate, RouteProps} from "react-router-dom";

interface IBaseGuardProps extends RouteProps {
    children: ReactElement;
}

const BaseGuard = ({ children }: IBaseGuardProps) => {
    let isAuthenticated = false;
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default BaseGuard;  
