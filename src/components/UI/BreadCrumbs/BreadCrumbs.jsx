// @flow
import React from 'react';
import {Link} from 'react-router-dom';

import  './BreadCrumbs.css';

const ROUTES_LINKS = {
    'article': {
        title: 'News',
        to: '/news'
    }
};

const slugToTitle = (slug)=>slug.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const mapRoutesToLinks = (url)=>{
    const splitUrl = url.split('/').filter((component)=>!!component);
    return splitUrl.slice(0,splitUrl.length-1).map((component,i)=>{
        if(ROUTES_LINKS[component]) return Object.assign({id:i},ROUTES_LINKS[component]);
    });
};

type Props = {
    isExact: boolean,
    params: Object,
    path: string,
    url: string
};

const BreadCrumbs = (props: Props) => {
    const links = mapRoutesToLinks(props.url);
    return (
        <ul className="BreadCrumbs">
            {links.map((link)=>(<li key={link && link.id}><Link to={link && link.to}>{link && link.title}</Link> <span className="chevron-right">></span> </li>))}
            <li>{slugToTitle(props.params.slug)}</li>
        </ul>
    );
}

export default BreadCrumbs;