// @flow
import React from 'react';
import './ArticlePreview.css';
import {Link} from 'react-router-dom';

type Props = {
    slug: string,
    created: string,
    title: string,
    short: string,
    full: string,
    cover: string
}

const ArticlePreview = (props:Props) => {
    function cutTheTitle(title){
        return title.length>50?title.substr(0,50)+'...':title;
    }
    return (
        <Link className="ArticlePreview" to={`/article/${props.slug}`}>
            <div className="title">{cutTheTitle(props.title)}</div>
            <div className="overlay"></div>
            <div className="img" style={{backgroundImage:`url(${props.cover})`}}></div>
        </Link>
    );
}

export default ArticlePreview;