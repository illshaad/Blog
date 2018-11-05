import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom'
import Addarticle from './components/Addarticle'
import Showarticle from './components/Showarticle'
import Navbar from './components/Navbar'
import Signupadmin from './components/Signupadmin'
import Loginadmin from './components/Loginadmin'
import registerServiceWorker from './registerServiceWorker';

class Test extends Component {
    constructor(props) {
        super(props)
        this.state ={
            login : [],
            loggedIn : false,
        }
    }
}
const Root = () =>{
    return(
<Router>
    <div>
    <Navbar/>
        <Switch>
            <Route exact path='/' component={Showarticle}/>
            <Route exact path='/add' component={Addarticle}/>
            <Route exact path ='/signup' component = {Signupadmin}/>
            <Route exact path='/login'  component={Loginadmin}/>
        </Switch>
    </div>
</Router>
    )
}
 
ReactDOM.render(
<Router>
    <Root/>
</Router>,
document.getElementById('root')
);
registerServiceWorker();
