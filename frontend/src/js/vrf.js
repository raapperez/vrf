'use strict';

import React from 'react';
import { Route, Redirect, Router  } from 'react-router';
import RealtiesPage from './pages/realties';
import {Provider} from 'react-redux';
import store from './stores/vrf-store';

export const routes = (
    <Route path="" component={({children}) => (children) }>
        <Route path="/anuncios" component={RealtiesPage} />
        <Redirect from="*" to="/anuncios" />
    </Route>
);

export default renderProps => (
    <Provider store={store}>
        <Router {...renderProps}/>
    </Provider>
);