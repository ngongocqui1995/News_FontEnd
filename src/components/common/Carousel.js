import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCarouselData } from '../../store/store'

class Carousel extends Component {
    componentDidMount(){
        if(this.props.circuits.lenght <= 0)
        {
            this.props.fetchCarouselData();
        }
    }

    render() {
        const { circuits } = this.props;
        return (
            <div id="carousel-0" class="jcarousel">
            <ul>
                {circuits.map((prop, key) => (
                <li key = {key}>
                    <article class="hentry clearfix">
                        <a href="post.html"><img class="entry-thumbnail" src={prop.images[0].image} alt="Post Title"/></a>
                        <h2 class="entry-title"><a href="post.html" rel="bookmark">{prop.title}</a></h2>
                        <div class="entry-meta">
                            <span class="entry-stars"></span>				
                            <span class="entry-date">Oct. 16, 2014</span>
                            <span class="entry-comments"><a href="post.html#comments">5 Comments</a></span>
                        </div>	
                        <div class="entry-summary">
                            {prop.description}
                        </div>

                        <div class="more-link">
                            <a href="post.html">Read the rest of this entry</a>
                        </div>

                    </article>
                </li>
                ))}
            </ul>
            <p class="jcarousel-pagination-0"></p>
            <a href="#" class="jcarousel-control-prev"><i class="fa fa-chevron-left"></i></a>
            <a href="#" class="jcarousel-control-next"><i class="fa fa-chevron-right"></i></a>
        </div>
    )
  }
}

Carousel.serverFetch = fetchCarouselData;

const mapStatetoProps = ( state ) => ({
    circuits: state.carouselData,
});

const mapDispatchToProps = {
    fetchCarouselData,
}

export default connect(mapStatetoProps, mapDispatchToProps)(Carousel);