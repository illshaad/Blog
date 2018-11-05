import React from 'react'

const ModifyArticle = props => {
 return(
   <div className="container">
     <div className="mt-5">
     <h1>Crée un article</h1>
       <form className="form-group" method="PUT" action="http://localhost:5678/api/article/:id">
        <input className="form-control mb-3" type="text"name="Titre" placeholder="entrer un titre"/>
        <input className="form-control mb-3" type="text" name="Auteur" placeholder="entrer un auteur"/>
        <textarea className="form-control" type="text" name="Text"></textarea>
        <input className="form-control mb-3" type="date" name="Date" placeholder="entrer une année"/>
        <input className="form-control mb-3" type="checkbox" value="true" name="isPublished"/>
        <div className="row text-center">
           <div className="col-12">
             <button className="btn btn-warning align-center" type="submit">Ajouter</button>
           </div>
        </div>
       </form>
     </div>
   </div>
 )
}

export default ModifyArticle