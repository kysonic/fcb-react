// @flow
import React from 'react';
import ArticleListPreview from '../Articles/ArticleListPreview';

type ArticleType = {
    slug: string,
    created: string,
    title: string,
    short: string,
    full: string,
    cover: string
}

type Props = {
    articles: Array<ArticleType>
}

const NewsList = (props: Props) => {
    return (
        <div className="NewsList">
            {
                props.articles.map((article)=>(<ArticleListPreview {...article} key={article.slug}></ArticleListPreview>))
            }
        </div>
    );
}

export default NewsList;