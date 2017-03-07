/**
 * Created by navjotsingh on 3/3/17.
 */
var React = require('react');
var PropTypes=React.PropTypes;
var GithubHelper=require('../utils/githubHelper');

var ConfirmBattle=require('../components/ConfirmBattle');


var battleContainer= React.createClass({
    contextTypes:{

        router: React.PropTypes.object.isRequired
    },

    getInitialState:function(){
        return {
            loading:false,
            userInfo:[]
        }

    },
    componentDidMount:function () {
      var data= this.props.location.query;


        GithubHelper.getData([data.playerOne, data.playerTwo])
            .then(function (info) {

                this.setState({
                loading:true,
                    userInfo:[info[0],info[1]]
                })

            }.bind(this));
    },

    toJsonFun: function (obj) {
      return <pre>{ JSON.stringify(obj,null,' ') }</pre>

    },

   render:function () {
    return(
        <ConfirmBattle
    loading = {this.state.loading}

    playersInfo={this.state.userInfo}
    /> )

   }

});

module.exports=battleContainer;