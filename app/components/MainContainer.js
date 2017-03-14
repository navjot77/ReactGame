/**
 * Created by navjotsingh on 3/9/17.
 */
import React,{PropTypes} from 'react';



export default function MainContainer (props) {
    return (
        <div className="jumbotron col-sm-12 text-center" >
            {props.children}
        </div>
    )
}

