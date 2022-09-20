import React from 'react';

import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { firebase_app } from '../data/config';

import { configureFakeBackend, authHeader, handleResponse } from '../services/fack.backend';
import Callback from '../auth/callback';
import Loader from '../layout/loader';
import { authRoutes } from './AuthRoutes';
import LayoutRoutes from './LayoutRoutes';
import Signin from '../auth/signin';
import PrivateRoute from './PrivateRoute';
import { classes } from '../data/layouts';

// setup fake backend
configureFakeBackend();
const Routers = () => {

        const abortController = new AbortController();
        const [currentUser, setCurrentUser] = useState(false);
        const [authenticated, setAuthenticated] = useState(false)
        const jwt_token = localStorage.getItem('token');
        const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
        const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();

        useEffect(() => {
                const requestOptions = { method: 'GET', headers: authHeader() };
                fetch('/users', requestOptions).then(handleResponse)
                firebase_app.auth().onAuthStateChanged(setCurrentUser);
                setAuthenticated(JSON.parse(localStorage.getItem("authenticated")))
                console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
                console.disableYellowBox = true;
                return function cleanup() {
                        abortController.abort();
                }

        }, [abortController]);

        return (
                <BrowserRouter basename={'/'}>
                        <>
                                <Suspense fallback={<Loader />}>
                                        <Routes>
                                                <Route path={'/'} element={<PrivateRoute />}>
                                                        {currentUser !== null || authenticated || jwt_token ?
                                                                <>
                                                                        <Route exact
                                                                                path={`${process.env.PUBLIC_URL}` }
                                                                                element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default/${layout}`} />}
                                                                        />
                                                                </> : ''}
                                                        <Route path={`/*`} element={<LayoutRoutes />} />
                                                </Route>
                                                <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />
                                                <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<Signin />} />
                                                {authRoutes.map(({ path, Component }, i) => (
                                                        <Route path={path} element={Component} key={i} />
                                                ))}
                                        </Routes>
                                </Suspense>
                        </>
                </BrowserRouter>
        );
};

export default Routers;