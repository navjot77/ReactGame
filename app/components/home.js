/**
 * Created by navjotsingh on 3/2/17.
 */
var React = require('react');
var reactRouter=require('react-router');
var Link=reactRouter.Link;

function Home () {
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


module.exports = Home;
