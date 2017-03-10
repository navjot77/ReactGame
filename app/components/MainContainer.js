/**
 * Created by navjotsingh on 3/9/17.
 */
var React = require('react');


function MainContainer (props) {
    return (
        <div className="jumbotron col-sm-12 text-center" >
            {props.children}
        </div>
    )
}

module.exports = MainContainer;