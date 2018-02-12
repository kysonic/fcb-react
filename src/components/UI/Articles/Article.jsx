// @flow
import React from 'react';
import './Article.css';

type Props = {
    slug: string,
    created: string,
    title: string,
    short: string,
    full: string,
    cover: string
}

const Article = (props: Props)=>{
    return (
        <div className="Article">
            <div className="header">
                <div className="img" style={{backgroundImage:`url(${props.cover})`}}></div>
                <div className="text-content">
                    <div className="sub-title">Press release</div>
                    <div className="title">{props.title}</div>
                </div>
            </div>
            <div className="content">
                <div className="share">
                    <div className="created">{props.created}</div>
                </div>
                <div className="full">{props.full}</div>
            </div>
        </div>
    );
}

export default Article;