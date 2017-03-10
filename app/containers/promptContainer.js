/**
 * Created by navjotsingh on 3/3/17.
 */

var React=require('react');
var PropTypes=React.PropTypes;

var promptContainer= React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired

    },

    getInitialState:function(){
        return{
            userName:""
        }


    },
    updateState:function (event) {
        this.setState({
            userName:event.target.value
        });

    },
    handleSubmit:function (e) {
        e.preventDefault();
        var user=this.state.userName;

        if (this.props.routeParams.playerOne){

            console.log(user);
            this.context.router.push({
                pathname:'/battle',
                query:{
                    playerOne:this.props.routeParams.playerOne,
                    playerTwo:this.state.userName
                }
            })


        }
        else{
            console.log("First move"+user);
            console.log(user);

            this.context.router.push('/playerTwo/' + user)


        }

    },


   render:function () {

       return(

           <div className="jumbotron col-sm-6 col-sm-offset-3 text-center"  style={{background:'black', color:'white', height:900}} >
               <h1>{this.props.route.header}</h1>
               <div className="col-sm-12">
                   <form onSubmit={this.handleSubmit}>
                       <div className="form-group">
                           <input
                               className="form-control"
                               onChange={this.updateState}
                               placeholder="Github Username"
                               type="text"
                               value={this.userName}
                              />
                       </div>
                       <div className="form-group col-sm-4 col-sm-offset-4">
                           <button
                               className="btn btn-block btn-success"
                               type="submit">
                               Continue
                           </button>
                       </div>
                   </form>
               </div>
           </div>
       )

   }




});

module.exports=promptContainer;