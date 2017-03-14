/**
 * Created by navjotsingh on 3/6/17.
 */
import React,{PropTypes} from 'react';


export default function UserWrapper(props){
    return(

        <div className='col-sm-6'>
            <p className='lead'>{props.header}</p>
            {props.children}
        </div>
    )

}

UserWrapper.propType={

    header: PropTypes.string.isRequired
}

