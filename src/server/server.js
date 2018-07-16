import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath, Router, Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import {SSRRoutes} from "../routers/routes";
import Helmet from "react-helmet";

import createStore, { initializeSession } from "../store/store";
import Home from "../layouts/Home";
import Detail from "../layouts/Detail";
import Category from "../layouts/Category";
import { indexRoutes } from "../routers/routes";

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );
app.use(express.static("public"))

app.get( "*", ( req, res ) => {
    const context = { };
    const store = createStore( );
    
    store.dispatch( initializeSession( ) );
    console.log("store changed", store.getState());
    if(SSRRoutes.filter(route => matchPath( req.url, route )).length > 0){
        const dataRequirements =
            SSRRoutes
                .filter( route => matchPath( req.url, route ) ) // filter matching paths
                .map( route => route.component ) // map to components
                .filter( comp => comp.serverFetch ) // check if components have data requirement
                .map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement
            
            Promise.all( dataRequirements ).then( ( ) => {
                const jsx = (
                    <ReduxProvider store={ store }>
                        <StaticRouter context={ context } location={ req.url }>
                                <Switch>
                                    {indexRoutes.map((prop, key) => (
                                        <Route exact path={prop.path}  component={prop.component} key = {key} />
                                    ))}
                                </Switch>
                        </StaticRouter>
                    </ReduxProvider>
                );
            const reactDom = renderToString( jsx );
            const reduxState = store.getState( );
            const helmetData = Helmet.renderStatic( );

            res.writeHead( 200, { "Content-Type": "text/html" } );
            res.end( htmlTemplate( reactDom, reduxState, helmetData ) );
        } );
    }else{
        const helmetData = Helmet.renderStatic( );
        res.writeHead( 200, { "Content-Type": "text/html" } );
        res.end( htmlTemplate1( '', '', helmetData ) );
    }
} );



app.listen( 2048 );

function htmlTemplate( reactDom, reduxState, helmetData ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${ helmetData.title.toString( ) }
            ${ helmetData.meta.toString( ) }
            <title>React SSR</title>
            <!-- Stylesheets -->
            <link rel="stylesheet" type="text/css" href="/style.css"/>	
            <link rel="stylesheet" type="text/css" href="/css/font-awesome.css"/>
            <link rel="stylesheet" type="text/css" href="/css/prettyPhoto.css"/>	
            <link rel="stylesheet" type="text/css" href="/css/colors/default.css"/>
            <link rel="stylesheet" type="text/css" href="/css/responsive.css"/>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
            </script>
            <script src="./app.bundle.js"></script>
        </body>

        <script type="text/javascript" src="/js/hoverIntent.js"></script>
        <script type="text/javascript" src="/js/superfish.js"></script>	
        
        <script type="text/javascript" src="/js/retina.js"></script>
        
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </html>
    `;
}

function htmlTemplate1( reactDom, reduxState, helmetData ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${ helmetData.title.toString( ) }
            ${ helmetData.meta.toString( ) }
            <title>React SSR</title>
            <!-- Stylesheets -->
            <link rel="stylesheet" type="text/css" href="/style.css"/>	
            <link rel="stylesheet" type="text/css" href="/css/font-awesome.css"/>
            <link rel="stylesheet" type="text/css" href="/css/prettyPhoto.css"/>	
            <link rel="stylesheet" type="text/css" href="/css/colors/default.css"/>
            <link rel="stylesheet" type="text/css" href="/css/responsive.css"/>
        </head>
        
        <body>
            <div id="app">Not found</div>
        </body>

        <script type="text/javascript" src="/js/hoverIntent.js"></script>
        <script type="text/javascript" src="/js/superfish.js"></script>	
        
        <script type="text/javascript" src="/js/retina.js"></script>
        
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        </html>
    `;
}