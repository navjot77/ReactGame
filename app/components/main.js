/**
 * Created by navjotsingh on 3/2/17.
 */

var React=require('react');
var Main=React.createClass({
    render:function () {
       return(
        <div>
            {this.props.children}
        </div>
       )
}



});

module.exports = Main;
