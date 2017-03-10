/**
 * Created by navjotsingh on 3/9/17.
 */

var React=require('react');
var PropTypes=React.PropTypes;

var Loading= React.createClass({
    propType:{
        text: PropTypes.string,
        speed:PropTypes.number
    },
    getDefaultProps: function () {
        return {
            text:"Loading...",
            speed:300
        }

    },
    getInitialState:function () {
        return{
            text:this.props.text
        }

    },
    render: function () {
        return (
            <div><h1>{this.state.text}</h1></div>
        )

    },
    componentDidMount:function () {
        var inte=setInterval(function () {
            if (this.state.text == 'Loading...'){
                this.setState({
                    text:'Loading'
                })
            }
            else{
                this.setState({
                    text:this.state.text +'.'
                })
            }

        }.bind(this),this.props.speed)

    },
    componentWillUnmount:function () {
        clearInterval(inte);

    }

});

module.exports=Loading;
