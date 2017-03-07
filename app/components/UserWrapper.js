/**
 * Created by navjotsingh on 3/6/17.
 */
var React=require('react');
var PropTypes=React.PropTypes;

function UserWrapper(user){
    return(

        <div className='col-sm-6'>
            <p className='lead'>{user.header}</p>
            {user.children}
        </div>
    )

}

UserWrapper.propType={


    headers: PropTypes.string.isRequired,
}

module.exports=UserWrapper;