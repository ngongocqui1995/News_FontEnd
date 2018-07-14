import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainHome from "../views/MainHome";

class Home extends React.Component {
    render() {
        return (
            <div id="page" class="hfeed site clearfix">
                <Header />
                <MainHome/>
                <Footer/>
            </div>
        );
    }
}

export default Home;