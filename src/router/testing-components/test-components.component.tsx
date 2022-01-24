
import "./test-styles.scss";

export const PublicRouteComponent = () => {
    return (
        <div className="public-route">
            <h1>Soy una ruta publica</h1>

            
        </div>
    )
}


export const LoginComponent = () => {
    return (
        <div className="login">
            <h1>Soy la pantalla de login</h1>

            
        </div>
    )
}

export const HomeComponent = () => {
    return (
        <div className="home">
            <h1>Soy el Home</h1>
           
        </div>
    )
}

export const Error404Component = () => {
    return (
        <div className="error-404">
            <h1>pagina no encontrada</h1>
            
        </div>
    )
}

export const PrivateRouteComponent = () => {

   

    return (
        <div className="private-route">
            <h1>Soy una ruta Privada</h1>

            <nav>
                 
            </nav>
            
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
