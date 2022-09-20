import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import AppLayout from '../components/layout';


const LayoutRoutes = () => {

  return (
    <>
      <Routes>
        {routes.map(({ path, Component }, i) => (
          <Route element={<AppLayout />} key={i}>
            <Route path={path} element={Component} />
          </Route>
        ))}
      </Routes>
    </>
  );
};

export default LayoutRoutes;