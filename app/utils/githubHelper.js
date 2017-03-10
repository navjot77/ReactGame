/**
 * Created by navjotsingh on 3/3/17.
 */

var axios=require('axios');
var React=require('react');

var id='3dc13813e0cb3d5c8f80';
var secret='b2fab9ef2e37c7e184af6d47e3058b003c2fcb5f';
var params="?client_id="+id+"&lient_secret="+secret;


function getUserInfo(user) {
    return axios.get('https://api.github.com/users/'+user+params)

}

function getRepos (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

function getTotalStars (repos) {
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count
    }, 10)
}

function getPlayersData (player) {

    return getRepos(player.login)
        .then(getTotalStars)
        .then(function (totalStars) {
            return {

                totalStars: totalStars
            }
        })
}

function calculateScores (players) {
    return [
        players[0].totalStars,
        players[1].totalStars
    ]
}






var helper= {

    getData:function(users) {
        return axios.all(users.map(function(user){

            return getUserInfo(user);
        })).then(function (info) {
            return info.map(function (user) {

                return user.data
            })
        }).catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})

    },


    getUserScore: function (players) {

        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);
        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(function (err) {console.warn('Error in battle function: ', err)})
        //return axios.all([user[0].login,user[1].login]).then(this.findScore)


    },



};

module.exports = helper;
