/**
 * Created by navjotsingh on 3/6/17.
 */
var React = require('react');
var PropTypes = React.PropTypes;



function UserDetails (user) {

    return (
        <div>
            {!!user.user.score && <li className="list-group-item"><h3>Score: {user.user.score}</h3></li>}
            <li className="list-group-item"> <img src={user.avatar_url} className="img-rounded img-responsive"/></li>
            {user.user.name && <li className="list-group-item">Name: {user.user.name}</li>}
            <li className="list-group-item">Username: {user.user.login}</li>
            {user.user.location && <li className="list-group-item">Location: {user.user.location}</li>}
            <li className="list-group-item">Followers: {user.user.followers}</li>
            <li className="list-group-item">Following: {user.user.following}</li>
            <li className="list-group-item">Public Repos: {user.user.public_repos}</li>
            {user.user.blog && <li className="list-group-item">Blog: <a href={user.user.blog}> {user.user.blog}</a></li>}
        </div>
    )
}

UserDetails.propTypes = {
    score: PropTypes.number,
    info: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        blog: PropTypes.string,
        company: PropTypes.string,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        location: PropTypes.string,
        login: PropTypes.string.isRequired,
        name: PropTypes.string,
        public_repos: PropTypes.number.isRequired
    })
}

module.exports = UserDetails;