/**
 * Created by navjotsingh on 3/6/17.
 */

import React,{PropTypes} from 'react';
import {Link} from 'react-router';



import UserDetails from '../components/PlayersDetail';
import UserDetailsWrapper from '../components/UserWrapper';
import MainContainer from '../components/MainContainer';

import Loading from './Loading';




function StartOver () {
    return (
        <div className='col-sm-12' >
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
        </div>
    )
}

function Tie (props) {
    return (
        <MainContainer>
            <h1>It's a Tie!</h1>
            <StartOver />
        </MainContainer>
    )
}
export default function Results (props) {
    if (props.isLoading === true) {
        return <Loading />
    }
    if (props.scores[0] === props.scores[1]) {
        return (
            <Tie scores={props.scores} playersInfo={props.playersInfo}/>
        )
    }
    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
}
Results.propTypes = {
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

