import { ReactElement, useState } from 'react';
import { Navigate, RouteProps} from "react-router-dom";

interface IBaseGuardProps extends RouteProps {
    children: ReactElement;
}

const BaseGuard = ({ children }: IBaseGuardProps) => {

    const [ isLogged ] = useState<boolean>(false);

    return isLogged ? children : <Navigate to="/login" />;
}

export default BaseGuard;  
