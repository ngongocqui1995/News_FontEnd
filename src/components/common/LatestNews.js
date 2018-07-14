import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLatestNewsData } from '../../store/store'

 class LatestNews extends Component {
    componentDidMount(){
        if(this.props.items.lenght <= 0){
            this.props.fetchLatestNewsData();
        }
    }
    render() {
      const { items } = this.props;
        return (
            <div class="widget widget_latest_posts">
                <h3 class="widget-title"><strong>Latest News</strong></h3>
                <ul>
                    {items.map((prop, key) => (
                        <li key = {key}>
                            <a href="post.html"><img class="entry-thumbnail" style={{width: 160, height:90}} src={prop.images[0].image} alt="Post Title"/></a>
                            <h2 class="entry-title"><a href="post.html">{prop.title}</a></h2>
                            <div class="entry-meta">
                                <span class="entry-date">{prop.date}</span>
                            </div> 
                        </li>
                    ))}
                </ul>
            </div>
        )
   }
};

LatestNews.serverFetch = fetchLatestNewsData

const mapStateToProps = (state) => ({
    items: state.latestNewsData,
})

const mapDispatchToProps = {
    fetchLatestNewsData
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestNews);