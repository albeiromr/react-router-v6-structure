import { ReactElement, useState } from 'react';
import { Navigate, RouteProps} from "react-router-dom";

interface IBaseGuardProps extends RouteProps {
    children: ReactElement;
}

const PrivateRouteGuard = ({ children }: IBaseGuardProps) => {

    const [ hasTheNeededRole ] = useState<boolean>(false);

    return hasTheNeededRole ? children : <Navigate to="/private-route" />;
}

export default PrivateRouteGuard;  