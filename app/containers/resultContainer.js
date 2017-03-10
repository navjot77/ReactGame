/**
 * Created by navjotsingh on 3/6/17.
 */


var React = require('react');
var GithubHelper = require('../utils/githubHelper');
var Results=require('../components/Results');
var axios=require('axios');

var resultContainer= React.createClass({

    contextTypes:{
        router:React.PropTypes.object.isRequired
    },

    getInitialState:function(){
      return          {
          loading: false,
          scores:[]


          }

    },



    componentDidMount: function () {
        GithubHelper.getUserScore(this.props.location.state.userInfo).then(function (scores) {
            this.setState({
                scores: [scores[0],scores[1]],
                isLoading: false
            })
        }.bind(this))






    },


    render: function () {
        console.log(this)
    return(

        <Results
            isLoading={this.state.isLoading}
            playersInfo={this.props.location.state.userInfo}
            scores={this.state.scores} />


    )
    }




});


module.exports=resultContainer;