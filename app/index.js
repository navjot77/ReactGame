/**
 * Created by navjotsingh on 3/2/17.
 */


var React=require("react");
var ReactDOM=require("react-dom");

var HelloComponent=React.createClass({
    render: function () {
        return(
            <div>
                <p>HELLO BABY</p>
            </div>

        )
    }

});



ReactDOM.render(<HelloComponent />, document.getElementById('myApp'));