import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { firebase_app } from '../data/config';
import { authHeader, handleResponse } from '../services/fack.backend';

const PrivateRoute = () => {
    const [currentUser, setCurrentUser] = useState(false);
    const [authenticated, setAuthenticated] = useState(false)
    const jwt_token = localStorage.getItem('token');

    useEffect(() => {
        const requestOptions = { method: 'GET', headers: authHeader() };
        fetch('/users', requestOptions).then(handleResponse)
        firebase_app.auth().onAuthStateChanged(setCurrentUser);
        setAuthenticated(JSON.parse(localStorage.getItem('authenticated')))
        localStorage.setItem('authenticated', authenticated);
        localStorage.setItem('currentUser', currentUser);
    }, []);

    return (
        currentUser !== null || authenticated || jwt_token ?
            <Outlet />
            :
            <Navigate exact to={`${process.env.PUBLIC_URL}/login`} />
    );
}

export default PrivateRoute;

