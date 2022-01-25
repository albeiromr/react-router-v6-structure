import { NavLink, Outlet } from 'react-router-dom';
import "./test-styles.scss";

export const PublicRouteComponent = () => {
    return (
        <div className="public-route">
            <h1>Soy una ruta publica</h1>
            <nav className="navigation-bar">
                <NavLink to="/public-route" className={(navData) => navData.isActive ? "selected-url" : "link" }>Public route</NavLink>
                <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to home</NavLink>
            </nav>
        </div>
    )
}


export const LoginComponent = () => {
    return (
        <div className="login">
            <h1>Soy la pantalla de login</h1>
            <nav className="navigation-bar">
                <NavLink to="/login" className={(navData) => navData.isActive ? "selected-url" : "link" }>Login</NavLink>
                <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to home</NavLink>
            </nav>
            
        </div>
    )
}

export const HomeComponent = () => {
    return (
        <div className="home">
           <h1>Soy el Home</h1>
           <nav className="navigation-bar">
               <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Home</NavLink>
               <NavLink to="/login" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to login</NavLink>
               <NavLink to="/public-route" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to public route</NavLink>
               <NavLink to="/private-route" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to private route</NavLink>
               <NavLink to="/404" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go 404 page</NavLink>
           </nav>
        </div>
    )
}

export const Error404Component = () => {
    return (
        <div className="error-404">
            <h1>pagina no encontrada</h1>
            <nav className="navigation-bar">
                <NavLink to="/404" className={(navData) => navData.isActive ? "selected-url" : "link" }>Error 404</NavLink>
                <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to home</NavLink>
            </nav>
        </div>
    )
}

export const PrivateRouteComponent = () => {

    return (
        <div className="private-route">
            <h1>Soy una ruta Privada</h1>
            <nav className="navigation-bar">
                <NavLink to="/" className={(navData) => navData.isActive ? "selected-url" : "link" }>Go to home</NavLink>
                <NavLink to="/private-route" className={(navData) => navData.isActive ? "selected-url" : "link" } end >Private route</NavLink>
                <NavLink to="/private-route/nested-route-one" className={(navData) => navData.isActive ? "selected-url" : "link" }>Nested route #1</NavLink>
                <NavLink to="/private-route/nested-route-two" className={(navData) => navData.isActive ? "selected-url" : "link" }>Nested route #2</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export const NestedIndexRoute = () => {
    return(
        <div className="nested-index">
            <h1>Soy el index de las rutas anidadas de este componente</h1>
        </div>
    )
}

export const NestedRouteOne = () => {
    return(
        <div className="nested-one">
            <h1>Soy la ruta anidada #1</h1>
        </div>
    )
}

export const NestedRouteTwo = () => {
    return(
        <div className="nested-two">
            <h1>Soy la ruta anidada #2</h1> 
        </div>
    )
}

export const NestedError404Component = () => {
    return (
        <div className="nested-404">
            <h1>pagina no encontrada</h1>
            
        </div>
    )
}
