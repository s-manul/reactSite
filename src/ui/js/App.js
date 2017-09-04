import React from 'react';

import {Route, Switch} from 'react-router-dom'
import {Helmet} from 'react-helmet';
import '../styles/app.css';

import Admin from './pages/Admin';
import FAQ from './pages/FAQ';
import Main from './pages/Main';
import NoMatch from './pages/NoMatch';
import Statistic from './pages/Statistic';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                    link={[
                        {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'},
                        {rel: 'stylesheet', href: '/build/main.css'},
                        {rel: 'shortcut icon', href: '/build/media/shield.png', type: 'image/png'},
                    ]}
                    meta={[
                        {charset: 'UTF-8'},
                        {'http-equiv': 'X-UA-Compatible', content: 'ie=edge'},
                        {name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'}
                    ]}
                    title='closedClub'
                />
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/faq' component={FAQ}/>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path='/statistic' component={Statistic}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}