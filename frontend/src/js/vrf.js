'use strict';

import React from 'react';
import { Route, Redirect, Router, RouterContext} from 'react-router';
import {Provider} from 'react-redux';
import {getStore} from './stores/vrf-store';
import Spotippos from './spotippos';
import AdvertisingsPage from './pages/advertisings';
import NoPage from './pages/no-page';

export const routes = (
    <Route path="" component={Spotippos}>
        <Route path="/anuncios" component={AdvertisingsPage} />
        <Route path="/novo-anuncio" component={NoPage} />
        <Route path="/anuncio/:id" component={NoPage} />
        <Redirect from="*" to="/anuncios" />
    </Route>
);

export const serverSide = (renderProps, initialState) => (
    <Provider store={getStore(initialState)}>
        <RouterContext {...renderProps} />
    </Provider>
);

export const clientSide = renderProps => (
    <Provider store={getStore(window.__PRELOADED_STATE__)}>
        <Router {...renderProps}/>
    </Provider>
);