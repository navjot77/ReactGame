/**
 * Created by navjotsingh on 3/2/17.
 */

var React=require('react');
var ReactCSSTransitionGroup=require('react-addons-css-transition-group');
require('../main.css');

var Main=React.createClass({
    render:function () {
       return(
        <div>
            <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={1500}
            transitionLeaveTimeout={1500}
            >

                {React.cloneElement(this.props.children, {key: this.props.location.pathname})}


            </ReactCSSTransitionGroup>

        </div>
       )
}



});

module.exports = Main;
