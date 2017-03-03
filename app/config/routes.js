/**
 * Created by navjotsingh on 3/2/17.
 */

var React = require('react');
var ReactDOM=require('react-dom');
var ReactRouter=require('react-router');
var Router=ReactRouter.Router;
var Route=ReactRouter.Route;
var IndexRoute=ReactRouter.IndexRoute;
var HashHistory=ReactRouter.hashHistory;
var Main=require('../components/Main');
var Home=require('../components/Home');
var promptContainer=require('../containers/promptContainer');

var Routes=(

<Router history={HashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="playerOne" header="Player 1" component={promptContainer}/>
        <Route path="playerTwo/:playerOne" header="Player 2" component={promptContainer}/>
    </Route>
</Router>



);

module.exports =Routes;


