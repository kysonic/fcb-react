// @flow
import React from 'react';
import {Link} from 'react-router-dom';
import './ArticleListPreview.css'

type Props = {
    slug: string,
    created: string,
    title: string,
    short: string,
    full: string,
    cover: string
}

const ArticleListPreview = (props:Props) => {
    return (
        <div className="ArticleListPreview">
            <div className="title">{props.title}</div>
            <div className="short">{props.short}</div>
            <Link className="read-more" to={`/article/${props.slug}`}>READ MORE</Link>
        </div>);
}

export default ArticleListPreview;