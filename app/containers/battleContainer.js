/**
 * Created by navjotsingh on 3/3/17.
 */
import React,{PropTypes} from 'react';

var GithubHelper=require('../utils/githubHelper');

import ConfirmBattle from '../components/ConfirmBattle';


const battleContainer= React.createClass({
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
                console.log("---",info);
                this.setState({
                loading:true,
                    userInfo:[info[0],info[1]]
                })

            }.bind(this));
    },

    toJsonFun: function (obj) {
      return <pre>{ JSON.stringify(obj,null,' ') }</pre>

    },

    handleInitiate: function () {
    console.log("Indide handler initiate ");
    this.context.router.push({
        pathname: '/result',
        state:{
            userInfo: this.state.userInfo,
        }

        })

    },

   render:function () {
    return(
        <ConfirmBattle
    loading = {this.state.loading}
    onInitiateBattle={this.handleInitiate}
    playersInfo={this.state.userInfo}
    /> )

   }

});

export default battleContainer;