import React, { Component } from 'react';
import { connect } from 'react-redux';
import { _2_fetch_BoxData_store } from '../../../store/store';

class Box_2 extends Component {

  componentDidMount(){
    if(this.props.items.lenght <= 0){
      this.props._2_fetch_BoxData_store();
    }
  }

  render() {
    const {items} = this.props;
    return (
      <section class="content-block-2 category-box clearfix">
					<h3 class="section-title"><a href="category.html">Reviews</a> <span class="see-all"><a href="category.html">More</a></span></h3>
					<ul>
            {items.map((prop, key) => {
              if(key == 0){
                return(
                  <li class="article-first">
                    <a href="post_reviews.html"><img class="entry-thumbnail" style={{width:344,height:193}} src={prop.images[0].image} alt=""/></a>
                    <h2 class="entry-title"><a href="post_reviews.html">{prop.title}</a></h2>

                    <div class="entry-meta">
                      <span class="entry-stars"></span>				
                      <span class="entry-date">{prop.date}</span>
                            <span class="entry-comments"><a href="post_reviews.html#comments">3 Comments</a></span>					
                    </div>

                    <div class="entry-summary">
                      {prop.description}
                    </div>
                        
                        <div class="more-link">
                            <a href="post_reviews.html">Read the rest of this entry</a>
                        </div>
                  </li>
                );
              }else{
                return(
                  <li class="article-list">

                    <a href="post_reviews.html"><img class="entry-thumbnail" style={{width:52,height:52}} src={prop.images[0].image} alt=""/></a>
      
                    <h2 class="entry-title"><a href="post_reviews.html">{prop.title}</a></h2>
      
                    <div class="entry-meta">
                      <span class="entry-stars"></span>				
                      <span class="entry-date">{prop.date}</span>
                            <span class="entry-comments"><a href="post_reviews.html#comments">3 Comments</a></span>		
                    </div>
                  </li>
                )
              }
            })}
					</ul>
				</section>
    )
  }
};

Box_2.serverFetch = _2_fetch_BoxData_store;

const mapStateToProps = (state) => ({
  items: state._2_BoxData
});

const mapDispatchToProps = {
  _2_fetch_BoxData_store
}

export default connect(mapStateToProps, mapDispatchToProps)(Box_2);