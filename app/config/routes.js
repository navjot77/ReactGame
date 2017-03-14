/**
 * Created by navjotsingh on 3/2/17.
 */


import React from 'react'



import  ReactDOM from 'react-dom';

import ReactRouter,{Router, Route, IndexRoute, hashHistory} from 'react-router';


import Main from '../components/main';
import Home from '../components/Home';


import promptContainer from '../containers/promptContainer';
import battleContainer from '../containers/battleContainer';
import resultContainer from '../containers/resultContainer';

const Routes=(

<Router history={hashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="playerOne" header="Player 1" component={promptContainer}/>
        <Route path="playerTwo/:playerOne" header="Player 2" component={promptContainer}/>
        <Route path='/battle' component={battleContainer}/>
        <Route path="/result" component={resultContainer}/>
    </Route>
</Router>



);

export default Routes;


