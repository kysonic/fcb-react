// @flow
import React, {Component} from 'react';
import ArticlePreview from '../Articles/ArticlePreview';
import './News.css';

type Props = {
    articles: Array<Object>
}

class News extends Component<Props> {
    render(){
        return (
            <div className="News">
                {this.renderFirstBlock()}
                {this.renderSecondBlock()}
            </div>
        )
    }
    renderFirstBlock(){
        const firstArticle = this.props.articles && this.props.articles[0];
        return firstArticle ? (
            <div className="block-1">
                <ArticlePreview {...firstArticle}></ArticlePreview>
            </div>
        ) : null;
    }
    renderSecondBlock(){
        const secondArticle = this.props.articles && this.props.articles[1];
        const thirdArticle = this.props.articles && this.props.articles[2];
        return secondArticle && thirdArticle ? (
                <div className="block-2">
                    <ArticlePreview {...secondArticle}></ArticlePreview>
                    <ArticlePreview {...thirdArticle}></ArticlePreview>
                </div>
            ) : null;
    }
}

export default News;