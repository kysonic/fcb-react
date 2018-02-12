// @flow
import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ArticlePage from '../Pages/ArticlePage';
import NewsListPage from '../Pages/NewsListPage';
import LoginPage from '../Pages/LoginPage';

import './Main.css';

import store from '../../redux/store';

import footbalLoaderGif from '../../assets/football_loader.gif';

type Props = {};
type State = {
    loading: boolean,
};
class Main extends Component<Props,State> {
    state = {
        loading: false
    }
    unsubscribe: any
    constructor(props: Props,context: any){
        super(props,context);
        this.unsubscribe = store.subscribe(()=>this.setState({loading:store.getState().loading}));
    }
    render() {
        return (
            <div className="Main">
                {this.state.loading && this.renderLoading()}
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/article/:slug' component={ArticlePage}/>
                    <Route path='/news' component={NewsListPage}/>
                    <Route path='/login' component={LoginPage}/>
                </Switch>
            </div>
        )
    }
    renderLoading(){
        return (
            <div className="loading">
                <div className="loading-gif" style={{backgroundImage:`url(${footbalLoaderGif})`}}></div>
            </div>
        )
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
}

export default Main;