/**
 * Created by navjotsingh on 3/2/17.
 */
import React,{PropTypes} from 'react';

const ReactCSSTransitionGroup=require('react-addons-css-transition-group');
import '../main.css';

const Main=React.createClass({
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

export default Main;
