import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _1_fetch_BoxData_store } from '../../../store/store';

class Box_1 extends Component {
    componentDidMount(){
        if(this.props.items.lenght <= 0){
            this.props._1_fetch_BoxData_store();
        }
    }
    render() {
        const {items} = this.props;
        return (
            <section class="content-block-1 category-box clearfix">
            <h3 class="section-title"><a href="category.html">Editor's Choice</a><span class="see-all"><a href="category.html">More</a></span></h3>
            <ul class="clearfix">
                {items.map((prop, key) => (
                <li key = {key}>
                    <a href="post.html"><img class="entry-thumbnail" src={prop.images[0].image} salt=""/></a>   
                    
                    <h2 class="entry-title"><a href="post.html">{prop.title}</a></h2>
                    
                    <div class="entry-meta">
                        <span class="entry-date">{prop.date}</span>
                        <span class="entry-comments"><a href="post.html#comments">3 Comments</a></span>                    
                    </div>                  
                   
                    <div class="entry-summary">
                        {prop.description}
                    </div>
                    
                    <div class="more-link">
                        <a href="post.html">Read the rest of this entry</a>
                    </div>
                </li>
                ))}
            </ul>
        </section>
        )
    }
}

Box_1.serverFetch = _1_fetch_BoxData_store;

const mapStateToProps = (state) => ({
    items: state._1_BoxData
});

const mapDispatchToProps = {
    _1_fetch_BoxData_store
}

export default connect(mapStateToProps, mapDispatchToProps)(Box_1);