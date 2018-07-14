import fetch from "isomorphic-fetch";

// fetch Category Tab
export function fetchCTData( ) {
    return fetch( "http://localhost:3001/news_category" )
        .then( res => res.json( ) )
        .then( res => res);
}

// fetch Carousel Data 
export function fetchCSData() {
    return fetch( "http://localhost:3001/news" )
        .then(res => res.json())
        .then(res => res);
}

// fetch Latest News Data
export function fetchLNData() {
    return fetch( "http://localhost:3001/news/tai-chinh-chung-khoan/3" )
        .then(res => res.json())
        .then(res => res);
}

// fetch Box 1
export function _1_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/tai-chinh-chung-khoan/3" )
        .then(res => res.json())
        .then(res => res)
}

// fetch Box 2
export function _2_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/tai-chinh-chung-khoan/4" )
        .then(res => res.json())
        .then(res => res)
}
////////////////////////////////////////////////////////////////////////
// fetch Box 3
export function _3_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/tai-chinh-chung-khoan/3" )
        .then(res => res.json())
        .then(res => res)
}

// fetch Box 4
export function _4_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/tai-chinh-chung-khoan/3" )
        .then(res => res.json())
        .then(res => res)
}
//////////////////////////////////////////////////////////////////////////
// fetch Box 5
export function _5_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/tai-chinh-chung-khoan/4" )
        .then(res => res.json())
        .then(res => res)
}

// fetch Box 6
export function _6_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/tai-chinh-chung-khoan/4" )
        .then(res => res.json())
        .then(res => res)
}

// fetch Box 7
export function _7_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/tai-chinh-chung-khoan/4" )
        .then(res => res.json())
        .then(res => res)
}

//////////////////////////////////////////////////////////////////////////
// fetch Videos
export function _videos_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/tai-chinh-chung-khoan/3" )
        .then(res => res.json())
        .then(res => res)
}