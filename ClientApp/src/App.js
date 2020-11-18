import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <AuthorizeRoute path='/App' component={Main} />
                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                </Layout>
            </BrowserRouter>
        );
    }
}