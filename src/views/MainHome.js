import React, { Component } from 'react'
import Carousel from '../components/common/Carousel';
import LatestNews from '../components/common/LatestNews';
import Box_1 from '../components/common/items/Box_1';
import Box_2 from '../components/common/items/Box_2';
import Box_3 from '../components/common/items/Box_3';
import Box_4 from '../components/common/items/Box_4';
import Box_5 from '../components/common/items/Box_5';
import Box_6 from '../components/common/items/Box_6';
import Box_7 from '../components/common/items/Box_7';
import Box_Videos from '../components/common/items/Box_Videos';

class MainHome extends Component {

  render() {
    return (
        
        <main id="main" className="site-main container" role="main" style={{display:'block'}}>
    
          <div id="primary" className="content-area column">
    
            <div id="featured-content" className="category-box clearfix">

              <Carousel/>

            </div>

              <Box_1/>
    
              <div className="content-ad">
                  <a href="http://www.theme-junkie.com/"><img src="http://placehold.it/728x90" alt="Post Title"/></a>
              </div>
    
              <Box_2/>
    
              <div className="content-ad">
                  <a href="http://www.theme-junkie.com/"><img src="http://placehold.it/728x90" alt=""/></a>
              </div>

              

            <section className="content-block-3 category-box clearfix">
    
              <Box_3/>

              <Box_4/>
    
            </section>
    
            <div className="content-ad">
              <a href="#"><img src="http://placehold.it/728x90" alt=""/></a>
            </div>
    
            <section className="content-block-4 category-box clearfix">
    
              <Box_5/>
    
              <Box_6/>

              <Box_7/>

              <div className="block block-right">
    
                <h3 className="section-title"><a href="category.html">Culture</a><span className="see-all"><a href="category.html">More</a></span></h3>	
    
                <ul>

                </ul>
    
              </div>
    
            </section>
            
    
          </div>
    
    
          <div className="sidbear sidebar1 column">
    
            <LatestNews/>
    
            <div className="widget widget_latest_comments">
    
              <h3 className="widget-title"><strong>Opinions</strong></h3>
    
              <ul>
                <li>
                  <a href="post.html#comments">
                    <img className="avatar" src="http://placehold.it/64x64" alt="Author Name"/>
                    <h3 className="name">Jack Lenox</h3>
                    <div className="comment">
                      If you make yourself an ass, don't complain if people ride you.
                    </div>
                  </a>
                </li>
    
                <li>
                  <a href="post.html#comments">
                    <img className="avatar" src="http://placehold.it/64x64" alt="Author Name"/>
                    <h3 className="name">Kevin Koehler</h3>
                    <div className="comment">
                      Keep good men company and you shall be of the number.
                    </div>
                  </a>
                </li>
    
                <li>
                  <a href="post.html#comments">
                    <img className="avatar" src="http://placehold.it/64x64" alt="Author Name"/>
                    <h3 className="name">Ben Lowery</h3>
                    <div className="comment">
                      Experience is the father of wisdom and memory the mother.
                    </div>
                  </a>
                </li>
    
                <li>
                  <a href="post.html#comments">
                    <img className="avatar" src="http://placehold.it/64x64" alt="Author Name"/>
                    <h3 className="name">Neha Gajjar</h3>
                    <div className="comment">
                      Happy is the man who learns from the misfortunes of others.
                    </div>
                  </a>
                </li>														
              </ul>
    
            </div>
    
              <div className="widget">
                  <h3 className="widget-title"><strong>General Widget</strong></h3>
                  <ul>
                      <li><a href="#">Just Another List Item 1</a></li>
                      <li><a href="#">Just Another List Item 2</a></li>
                      <li><a href="#">Just Another List Item 3</a></li>                               
                  </ul>                       
              </div>
    
            <div className="widget widget_ads">
              <h3 className="widget-title">Sponsor</h3>
              <a href="#"><img src="http://placehold.it/160x600" alt=""/></a>
            </div>
    
          </div>
          
          <div id="secondary" className="widget-area widget-primary sidebar2 column" role="complementary">
    
              <div className="widget widget_ads">
                  <h3 className="widget-title">Advertisement</h3>
                  <a href="http://www.theme-junkie.com/" target="_blank"><img src="http://placehold.it/300x250" alt="Ad Widget" /></a>
              </div>
    
              <div className="widget widget_social clearfix">
                  <ul>
                      <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i><span><strong>5,600</strong></span><span>Followers</span></a></li>
                      <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i><span><strong>1,986</strong></span><span>Fans</span></a></li>            
                      <li><a href="#" title="GooglePlus"><i className="fa fa-google-plus"></i><span><strong>1,300</strong></span><span>In Circle</span></a></li>
                      <li><a href="#" title="RSS"><i className="fa fa-rss"></i><span><strong>20,000</strong></span><span>Subscribers</span></a></li>
                  </ul>
              </div>
    
              <div className="widget widget_newsletter">
                  <h3 className="widget-title">Newsletter</h3>
                  <div className="newsletter-container">
                  <p>Subscribe to our newsletter to receive breaking news by email.</p>    
                  <form role="form">
                      <input type="text" placeHolder="Enter your email..."/>
                      <button className="btn" type="button">Signup</button>
                  </form>
                  </div>
              </div>
    
              <div className="widget widget_tabs">
    
                  <ul className="tabs-nav">
                      <li className="active"><a href="#tab1" title="Popular"><i className="fa fa-star"></i></a></li>
                      <li><a href="#tab2" title="Latest"><i className="fa fa-clock-o"></i></a></li>
                      <li><a href="#tab3" title="Comments"><i className="fa fa-comments"></i></a></li>        
                      <li><a href="#tab4" title="Tags"><i className="fa fa-tags"></i></a></li>
                  </ul>
    
                <div className="tabs-container">
    
                    <div className="tab-content" id="tab1">
                        <ul>
                                           
                        </ul>      
                    </div>
    
                    <div className="tab-content" id="tab2">
                        <ul>
                                               
                        </ul>
                    </div>
    
                    <div className="tab-content" id="tab3">
                        <ul>
                                        
                        </ul>           
                    </div>   
    
                    <div className="tab-content" id="tab4">
                        <a href="#">WordPress</a>
                        <a href="#">Themes</a>
                        <a href="#">Plugins</a>
                        <a href="#">Hosting</a>
                        <a href="#">Web Design</a>
                        <a href="#">Web Dev</a>
                        <a href="#">Domain Name</a>
                        <a href="#">WP Engine</a>
                        <a href="#">Affiliates</a>
                        <a href="#">bbPress</a>         
                    </div>
    
                </div>
    
              </div>
              
              <div className="widget widget_ads">
                  <h3 className="widget-title">Advertisement</h3>  
                  <a href="http://www.theme-junkie.com/" target="_blank"><img src="http://placehold.it/300x250" alt="Ad Widget" /></a>
              </div>
    
              <div className="widget widget_twitter">
                  <h3 className="widget-title"><strong>Latest Tweets</strong></h3>
                  <ul>
                      <li>RT <a href="#">@envato</a>: <a href="#">#WordPress</a> 3.9.2 is now available as a security release. It is strongly advised to update immediately. <a href="#">http://t.co/PPcIPyrkZz</a> <span className="timestamp"><a href="#">3 hours ago</a></span></li>
                      <li>Heatwave Offer. Sign up for an annual plan and get 3 months of free WP Engine <a href="#">#WordPress</a> hosting! Code: "HeatWave14" <a href="#">http://t.co/bsg79FCgvy</a> <span className="timestamp"><a href="#">1 day ago</a></span></li>
                      <li>BOOM! Theme Junkie is now 5 years old and we've got some presents for you! <a href="#">http://t.co/koSdMC7duxy</a> <span className="timestamp"><a href="#">3 days ago</a></span></li>          
                  </ul>
              </div>
    
              <div className="widget widget_125">
                  <h3 className="widget-title"><strong>Sponsors</strong></h3> 
                  <a href="#"><img src="http://placehold.it/125x125" alt=""/></a>
                  <a href="#"><img className="img-right" src="http://placehold.it/125x125" alt=""/></a>
                  <a href="#"><img src="http://placehold.it/125x125" alt=""/></a>
                  <a href="#"><img className="img-right" src="http://placehold.it/125x125" alt=""/></a>
              </div>
    
              <div className="widget">
                  <h3 className="widget-title"><strong>General Widget</strong></h3>
                  <ul>
                      <li><a href="#">Just Another List Item 1</a></li>
                      <li><a href="#">Just Another List Item 2</a></li>
                      <li><a href="#">Just Another List Item 3</a></li>                               
                  </ul>                       
              </div>
              
              <div className="widget widget_ads">
                  <h3 className="widget-title">Advertisement</h3>  
                  <a href="http://www.theme-junkie.com/" target="_blank"><img src="http://placehold.it/300x600" alt="Ad Widget" /></a>
              </div>
    
          </div>
    
          <div className="clearfix"></div>
    
          <Box_Videos/>
        </main>
    )
  }
}

export default MainHome;