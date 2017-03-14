/**
 * Created by navjotsingh on 3/6/17.
 */
import React,{PropTypes} from 'react';
import {Link} from 'react-router';

import PlayersDetail from '../components/PlayersDetail';
import UserWrapper from '../components/UserWrapper';


export default function ConfirmBattle(props) {
    console.log(props.playersInfo);
return props.loading === false ?
    <p>loading...</p> :
    <div className="jumbotron col-sm-12 text-center" >
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
            <UserWrapper header="Player 1" >
                <PlayersDetail user={ props.playersInfo[0] } />
            </UserWrapper>
            <UserWrapper  header="Player 2">
                <PlayersDetail user={ props.playersInfo[1] } />
            </UserWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-12' >
                <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
            </div>
            <div className='col-sm-12' >
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                </Link>
            </div>
        </div>
    </div>
}

