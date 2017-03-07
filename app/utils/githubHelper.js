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


var helper= {

    getData:function(users) {
        return axios.all(users.map(function(user){
            return getUserInfo(user);
        })).then(function (info) {
            return info.map(function (user) {
                return user.data
            })
        }).catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})

    }

};

module.exports = helper;
