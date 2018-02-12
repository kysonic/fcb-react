// @flow
import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';

type Nav = {
    id: number,
    title: string,
    path: string
}

const NAVIGATION: Array<Nav> = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'News',
        path: '/news'
    }
];

const Navigation = () => {
    return (
        <ul className="Navigation">
            {
                NAVIGATION.map((item)=>
                    <li className="item" key={item.id}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                )
            }
        </ul>
    );
};

export default Navigation;