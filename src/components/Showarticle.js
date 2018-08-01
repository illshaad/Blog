import React, { Component }from 'react'
import axios from "axios"
import "../App.css"

class Showarticles extends Component {
    constructor(props){ 
        super(props) 
        this.state = {
            articles :  [],
        }
    }


 testDelete = () => {

    fetch('http://localhost:5678/api/article')
    .then(res => res.json()) 
    .then(body =>{ 
        console.log(body)
        this.setState({
            articles : body
        })   
    })
    .catch(err =>{throw err})

    } 

    componentDidMount(){
    this.testDelete()
    }



    delete = (id) => {
        axios.delete(`http://localhost:5678/api/article/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            console.log(id)
    
        this.testDelete()
    }


    render (){
        return (
        <div className="container">
         <h1 className="text-center mb-5">Bienvenue</h1>
            <div className="row mt-5">
               {this.state.articles.map(article =>{
                    return<ul className="border" key={article._id}>
                    <li>Titre:{article.Titre}</li>
                    <li>Date:{article.Date}</li>
                    <li>Auteur:{article.Auteur}</li>
                    <li>Text:{article.Text}</li>
                    <button className="btn btn-info btn-sm" onClick={this.delete.bind(this, article._id)}>Supprimé</button>

                </ul>
                })}
            </div>
         </div>
        )
    }
}

export default Showarticles