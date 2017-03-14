/**
 * Created by navjotsingh on 3/2/17.
 */
import React,{PropTypes} from 'react';
import {Link} from 'react-router';

export default function Home () {
        return (

        <div className="jumbotron col-sm-12 text-center" style={{background:'black', color:'white', height:1000}}>
            <h1>BattleGround</h1>
            <p className='lead'>Want a fight ?</p>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-primary'>Start Battle</button>
            </Link>
        </div>

        )


    }



