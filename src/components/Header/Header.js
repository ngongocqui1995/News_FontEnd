import React, { Component } from 'react'
import CategoryTab from '../Tab/CategoryTab';
import Helmet from "react-helmet";

class Header extends Component {
  render() {
    return (
        <header id="masthead" class="site-header container clearfix" role="banner">
          <Helmet>
            <title>Contact Page</title>
            <meta name="description" content="This is a proof of concept for React SSR" />
            <meta name="description" content="This is a proof of concept for React SSR" />
            <meta name="description" content="This is a proof of concept for React SSR" />
          </Helmet>
        <div id="logo">
          <a href="/"><img src="images/logo.png" alt="Logo Title" /></a>
        </div>
  
        <div class="header-ad">
          <a href="#"><img src="http://placehold.it/728x90" alt=""/></a>
        </div>
  
        <div class="clearfix"></div>
  
  
        <div id="secondary-bar" class="clearfix">
  
          <a id="secondary-mobile-menu" href="#"><i class="fa fa-bars"></i> <span>Secondary Menu</span></a>
              <CategoryTab/>
              <div class="header-search">
  
                <i class="fa fa-search"></i>
                <i class="fa fa-times"></i>

              <div class="search-form">

              <form action="search.html" id="searchform" method="get">
                <input name="s" type="text" />
                <button type="submit">Search</button>
              </form>
              
            </div> 
  
          </div>
  
        </div>	
  
      </header>
    )
  }
}

export default Header;