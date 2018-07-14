import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

//////////////////////////// API /////////////////////////////////////////
import { fetchCTData } from "../api/api";
import { fetchCSData } from "../api/api";
import { fetchLNData } from "../api/api";

import { _1_fetch_BoxData_api } from "../api/api";
import { _2_fetch_BoxData_api } from "../api/api";
import { _3_fetch_BoxData_api } from "../api/api";
import { _4_fetch_BoxData_api } from "../api/api";
import { _5_fetch_BoxData_api } from "../api/api";
import { _6_fetch_BoxData_api } from "../api/api";
import { _7_fetch_BoxData_api } from "../api/api";
import { _videos_fetch_BoxData_api } from "../api/api";
/////////////// TẠO ACTION ///////////////////////////////////////////////
export const initializeSession = ( ) => ( {
    type: "INITIALIZE_SESSION",
} );

const storeCategoryTabData = ( data ) => ( {
    type: "STORE_CATEGORY_TAB_DATA",
    data,
} );

const storeCarouselData = (data) => ( {
    type:"STORE_CAROUSEL_DATA",
    data,
} );

const storeLatestNewsData = (data) => ( {
    type:"STORE_LATEST_NEWS",
    data,
} );

const _1_store_BoxData = (data) => ( {
    type: "STORE_1_BOXDATA",
    data,
} );

const _2_store_BoxData = (data) => ( {
    type: "STORE_2_BOXDATA",
    data,
} );
///////////////////////////////////////////////////////////////////////////
const _3_store_BoxData = (data) => ( {
    type: "STORE_3_BOXDATA",
    data,
} );

const _4_store_BoxData = (data) => ( {
    type: "STORE_4_BOXDATA",
    data,
} );
///////////////////////////////////////////////////////////////////////////
const _5_store_BoxData = (data) => ( {
    type: "STORE_5_BOXDATA",
    data,
} );

const _6_store_BoxData = (data) => ( {
    type: "STORE_6_BOXDATA",
    data,
} );

const _7_store_BoxData = (data) => ( {
    type: "STORE_7_BOXDATA",
    data,
} );
///////////////////////////////////////////////////////////////////////////
const _videos_store_BoxData = (data) => ( {
    type: "STORE_VIDEOS_BOXDATA",
    data,
} );
///////////////////////////////////////////////////////////////////////////
///////////////////////////////// LẤY DỮ LIỆU /////////////////////////////
// Lấy dữ liệu Tab loại                                                              
export const fetchCategoryTabData = () => ( dispatch ) =>                            
    fetchCTData( ).then( res => dispatch( storeCategoryTabData( res ) ) );
                                                               
//Lấy dữ liệu Carousel                               
export const fetchCarouselData = () => ( dispatch ) =>                               
    fetchCSData().then( res => dispatch( storeCarouselData( res ) ) );                
                                                                                     
// Lấy dữ liệu Latest News
export const fetchLatestNewsData = () => (dispatch) =>
    fetchLNData().then( res => dispatch( storeLatestNewsData( res ) ) )
    


// Pure function Lấy dữ liệu Box 1 
export const _1_fetch_BoxData_store = () => (dispatch) => 
    _1_fetch_BoxData_api().then( res => dispatch( _1_store_BoxData( res ) ) )

// Lấy dữ liệu Box 2 
export const _2_fetch_BoxData_store = () => (dispatch) => 
    _2_fetch_BoxData_api().then( res => dispatch( _2_store_BoxData( res ) ) )

////////// 3 và 4 cặp ///////////////

// Lấy dữ liệu Box 3
export const _3_fetch_BoxData_store = () => (dispatch) => 
    _3_fetch_BoxData_api().then( res => dispatch( _3_store_BoxData( res ) ) )

// Lấy dữ liệu Box 4
export const _4_fetch_BoxData_store = () => (dispatch) =>
    _4_fetch_BoxData_api().then( res => dispatch( _4_store_BoxData( res ) ) )

////////// 5 , 6 , 7 cặp ////////////

// Lấy dữ liệu Box 5
export const _5_fetch_BoxData_store = () => (dispatch) =>
    _5_fetch_BoxData_api().then( res => dispatch( _5_store_BoxData( res ) ) )

export const _6_fetch_BoxData_store = () => (dispatch) =>
    _6_fetch_BoxData_api().then( res => dispatch( _6_store_BoxData( res ) ) )

export const _7_fetch_BoxData_store = () => (dispatch) =>
    _7_fetch_BoxData_api().then( res => dispatch( _7_store_BoxData( res ) ) )

// Lấy dữ liệu box videos
export const _videos_fetch_BoxData_store = () => (dispatch) =>
    _videos_fetch_BoxData_api().then( res => dispatch( _videos_store_BoxData( res ) ) )

////////////////////////////////////////////////////////////////////////////

/////////////////////////// REDUCER ////////////////////////////////////////
const sessionReducer = ( state = false, action ) => {                                
    switch ( action.type ) {                                                         
        case "INITIALIZE_SESSION":                                                   
            return true;                                                             
        default: return state;                                                       
    }                                                                                
};                                                                                   
                                                                                     
const categoryTabDataReducer = ( state = [ ], action ) => {                                     
    switch ( action.type ) {                                                         
        case "STORE_CATEGORY_TAB_DATA":                                                           
            return action.data;                                                  
        default: return state;                                                       
    }                                                                                
};

const carouselDataReducer = ( state = [ ], action ) => {                                     
    switch ( action.type ) {
        case "STORE_CAROUSEL_DATA":
            return action.data;                                                  
        default: return state;                                                       
    }                                                                                
};

const latestNewsReducer = ( state = [ ], action ) => {
    switch ( action.type ) {
        case "STORE_LATEST_NEWS":
            return action.data;
        default: return state;
    }
}

const _1_BoxReducer = ( state = [ ], action ) => {
    switch ( action.type ){
        case "STORE_1_BOXDATA":
            return action.data;
        default: return state;
    }
}

const _2_BoxReducer = ( state = [ ], action ) => {
    switch ( action.type ){
        case "STORE_2_BOXDATA":
            return action.data;
        default: return state;
    }
}

const _3_BoxReducer = ( state = [ ], action ) => {
    switch ( action.type ){
        case "STORE_3_BOXDATA":
            return action.data;
        default: return state;
    }
}

const _4_BoxReducer = ( state = [], action ) => {
    switch ( action.type ){
        case "STORE_4_BOXDATA":
            return action.data;
        default: return state;
    }
}

const _5_BoxReducer = ( state = [], action ) => {
    switch (action.type){
        case "STORE_5_BOXDATA":
            return action.data;
        default: return state;
    }
}

const _6_BoxReducer = ( state = [], action ) => {
    switch (action.type){
        case "STORE_6_BOXDATA":
            return action.data;
        default: return state;
    }
}

const _7_BoxReducer = ( state = [], action ) => {
    switch (action.type){
        case "STORE_7_BOXDATA":
            return action.data;
        default: return state;
    }
}

const _videos_BoxReducer = ( state = [], action ) => {
    switch (action.type){
        case "STORE_VIDEOS_BOXDATA":
            return action.data;
        default: return state;
    }
}

const reducer = combineReducers( {                                                   
    loggedIn: sessionReducer,                                                        
    categoryTabData: categoryTabDataReducer,
    carouselData: carouselDataReducer,
    latestNewsData: latestNewsReducer,
    _1_BoxData: _1_BoxReducer,
    _2_BoxData: _2_BoxReducer,
    _3_BoxData: _3_BoxReducer,
    _4_BoxData: _4_BoxReducer,
    _5_BoxData: _5_BoxReducer,
    _6_BoxData: _6_BoxReducer,
    _7_BoxData: _7_BoxReducer,
    _videos_BoxData: _videos_BoxReducer
} );                                                                                 
                                                                                     
////////////////////////////////////////////////////////////////////////////////////////

export default ( initialState ) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );