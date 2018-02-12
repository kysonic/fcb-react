// @flow
import React, {Component} from 'react';
import News from '../UI/News/News';
import './HomePage.css';

import {mapStateToProps,mapDispatchToProps} from '../../redux/store';
import {connect} from 'react-redux';
import * as articlesAction from '../../redux/actions/articles';

type ArticleType = {
    slug: string,
    created: string,
    title: string,
    short: string,
    full: string,
    cover: string
}

type Props = {
    articles: Array<ArticleType>,
    fetchNews: Function,
    match: Object
}

class HomePage extends Component<Props> {
    componentDidMount(){
        if(this.props.articles && this.props.articles.length) return;
        this.props.fetchNews();
    }
    render(){
        return (
            <div className="HomePage">
                <News articles={this.props.articles}></News>
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps(articlesAction))(HomePage);