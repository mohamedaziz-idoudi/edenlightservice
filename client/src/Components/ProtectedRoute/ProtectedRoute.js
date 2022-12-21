import React from 'react';
import {Route,Navigate} from 'react-router-dom';

function ProtectedRoute ({setAuth:setAuth,isAuth: isAuth, Component: Component, ...props}) {
    return (
        isAuth ? <Component setAuth={setAuth} /> : <Navigate to={{
            pathname: "/admin",
            state: { from: props.location }
          }} />
        );
}
export default ProtectedRoute;