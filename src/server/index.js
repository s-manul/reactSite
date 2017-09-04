import React from 'react'
import ReactDOMServer from 'react-dom/server';
import {Helmet} from "react-helmet";
import { StaticRouter } from 'react-router-dom';
import App from '../ui/js/App';
import template from './template';

export default function serverRenderer({ clientStats, serverStats }) {
    return (req, res, next) => {
        const context = {};
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={ req.url } context={ context }>
                <App />
            </StaticRouter>
        );

        const helmet = Helmet.renderStatic();
        res.status(200).send(template({
            markup: markup,
            helmet: helmet
        }));
    };
}