/**
 * Created by navjotsingh on 3/2/17.
 */


var React=require("react");
var ReactDOM=require("react-dom");
var Routes=require("./config/Routes");





ReactDOM.render(Routes,document.getElementById("myApp"));




var USER_DATA = {
    name: 'Navi',
    username:'navjot77',
    image: 'https://avatars1.githubusercontent.com/u/15641327?v=3&u=38391ff6ffb64f92e329cf1c7b81885dfb6041e9&s=400'
}


var ProfilePic = React.createClass({
    render: function () {
        return <img src={this.props.imageUrl} height="400" width="200"></img>
    }
});

var ProfileLink = React.createClass({
    render: function () {
        return (

                <Link href={'https://www.github.com/' +  this.props.username}>
                    {this.props.username}
                </Link>

        );
    }
});

var Link= React.createClass({

    goToUrl:function(){

        window.location.replace(this.props.href);
    },

    render: function () {
        return(
            <span style={{color:'blue', cursor:'pointer'}} onClick={this.goToUrl}>
                {this.props.children}
            </span>
        );


    }


});


var ProfileName = React.createClass({
    render: function (){
        return <div>{this.props.name}</div>
    }
});

var Avatar = React.createClass({
    render: function () {
        return(
            <div>
                <ProfilePic imageUrl={this.props.user.image}/>
                <ProfileName name={this.props.user.name}/>
                <ProfileLink username={this.props.user.username}/>
            </div>
        );
    }
});


//ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('myApp'));
ReactDOM.render(Routes,document.getElementById("myApp"));