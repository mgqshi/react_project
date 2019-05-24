import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { Router } from "react-router-dom"
//rem
import 'lib-flexible'
// redux
import { Provider } from "react-redux"
import store  from "./reducer/index"
//appjs
import MainHeader from '@/components/main-header'
import MainFooter from '@/components/main-footer'
//路由入口
import RouteApp from '@/routers/router'
import history from '@/routers/history';

require('./statics/css/app.less')


ReactDOM.render(
    <Provider store = { store } >
        <Router history={history}>
        <div className="page-wrap">
            <MainHeader isShow={ true } />
            <div className="page-main" id="main-page">
                <RouteApp />
            </div>
            <MainFooter />
        </div>
        </Router>
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
