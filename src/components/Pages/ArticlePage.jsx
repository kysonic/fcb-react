// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as articlesAction from '../../redux/actions/articles';
import {mapStateToProps,mapDispatchToProps} from '../../redux/store';
import Article from '../UI/Articles/Article';
import BreadCrumbs from '../UI/BreadCrumbs/BreadCrumbs';
import './ArticlePage.css';

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

class ArticlePage extends Component<Props> {
    componentDidMount(){
        if(this.props.articles && this.props.articles.length) return;
        this.props.fetchNews();
    }
    render(){
        const articleData = this.props.articles.find((article)=>article.slug===this.props.match.params.slug);
        return (
            <div className="ArticlePage">
                <BreadCrumbs {...this.props.match}></BreadCrumbs>
                <Article {...articleData}></Article>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps(articlesAction))(ArticlePage);