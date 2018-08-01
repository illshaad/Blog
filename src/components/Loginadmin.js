import React, {Component} from 'react'
import axios from "axios"

class Loginadmin extends Component {
    constructor(props) {
        super(props)
        this.state ={
            login : [],
            loggedIn : false,
            email: "",
            password: ""
        }
    }

    sendProps = () => {
        this.props.callback(this.state)
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.props.test)
    }

    submit = (e) => {
        e.preventDefault();
        const login = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5678/api/admin/login', login)
        .then(response =>{
            this.setState({
                login : response
            })
            this.props.history.push("/add")
        })
        // .then(function(res){
        //     localStorage.setItem('token',res.data.token)
        // })
     .catch(err =>{throw err})
        console.log(this.state.login)
    }



render (){
 return(
   <div className="container">
     <div className="mt-5">
       <form className="form-group" onSubmit={this.submit} >
         <input onChange={this.handleOnChange} className="form-control mb-3" type="text" name="email" placeholder="entrer un email"/>
         <input onChange={this.handleOnChange} className="form-control mb-3" type="password" name="password" placeholder="entrer un mots de pass"/>
         <div className="row text-center">
           <div className="col-12">
             <button className="btn btn-warning align-center" type="submit">Connecter</button>
           </div>
        </div>
       </form>
     </div>
   </div>
 )}
}




export default Loginadmin