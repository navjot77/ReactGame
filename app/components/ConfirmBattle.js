/**
 * Created by navjotsingh on 3/6/17.
 */

var React=require('react');
var ReactRouter=require('react-router');
var PropTypes=React.PropTypes;
var Link = ReactRouter.Link;
var PlayersDetail=require('../components/PlayersDetail');
var UserWrapper=require("../components/UserWrapper");


function ConfirmBattle(props) {
    console.log(props.playersInfo);
return props.loading === false ?
    <p>loading...</p> :
    <div className="jumbotron col-sm-12 text-center" >
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
            <UserWrapper>
                <PlayersDetail user={ props.playersInfo[0] } />
            </UserWrapper>
            <UserWrapper>
                <PlayersDetail user={ props.playersInfo[0] } />
            </UserWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-12' >
                <button type='button' className='btn btn-lg btn-success' >Initiate Battle!</button>
            </div>
            <div className='col-sm-12' >
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                </Link>
            </div>
        </div>
    </div>

}

module.exports=ConfirmBattle;