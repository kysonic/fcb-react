import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as articlesAction from '../../redux/actions/articles';
import {mapStateToProps,mapDispatchToProps} from '../../redux/store';
import NewsList from '../UI/News/NewsList';
import './NewsListPage.css';

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

class NewsListPage extends Component<Props> {
    componentDidMount(){
        if(this.props.articles && this.props.articles.length) return;
        this.props.fetchNews();
    }
    render() {
        return (
            <ul className="NewsListPage">
                <NewsList articles={this.props.articles}></NewsList>
            </ul>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps(articlesAction))(NewsListPage);