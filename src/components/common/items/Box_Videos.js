import React, { Component } from 'react'
import { connect } from 'react-redux'
import {_videos_fetch_BoxData_store} from '../../../store/store'
import { Link } from 'react-router-dom';

class Box_Videos extends Component {
    componentDidMount(){
        if(this.props.items.lenght <= 0){
            this.props._videos_fetch_BoxData_store();
        }
    }

    render() {
        const {items} = this.props;
        console.log("asdas");
        return (
            <section id="carousel-1" class="carousel-loop container clearfix">

				<h3 class="section-title"><a href="category.html">Must See Videos</a></h3>

			  	<div class="jcarousel">
				    <ul>
				        {items.map(item => (
                        <li>
                            <article class="hentry post">
                                <Link class="video-thumbnail" to={`/tin-tuc/${item.metaKey}`} rel="bookmark">
                                    <img class="entry-thumbnail" src={item.videos[0].imgVideo} alt="Post Title" />
                                    <div class="video-icon"><i class="fa fa-play"></i></div>
                                </Link>							
                                <h2 class="entry-title"><Link to={`/tin-tuc/${item.metaKey}`} rel="bookmark">{item.title}</Link></h2>
                                <div class="entry-meta">
                                    <span class="entry-date">{item.date}</span>
                                </div>	
                            </article>                      	
                        </li>
                        ))}                                                           
				    </ul>
			  	</div>

		        <a href="#" class="jcarousel-control-prev"><i class="fa fa-angle-left"></i></a>
		        <a href="#" class="jcarousel-control-next"><i class="fa fa-angle-right"></i></a>

			</section>
        )
    }
}

Box_Videos.serverFetch = _videos_fetch_BoxData_store;

const mapStateToProps = (state) => ({
    items: state._videos_BoxData,
})

const mapDispatchToProps = {
    _videos_fetch_BoxData_store
}


export default connect(mapStateToProps, mapDispatchToProps)(Box_Videos);