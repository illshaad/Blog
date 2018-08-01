import React from 'react'

const Signupadmin = props => {
 return(
   <div className="container">
     <div className="mt-5">
       <form className="form-group" method="POST" action="http://localhost:5678/api/admin/signup">
         <input className="form-control mb-3" type="text" name="firstName" placeholder="entrer un prenom"/>
         <input className="form-control mb-3" type="text" name="lastName" placeholder="entrer un nom"/>
         <input className="form-control mb-3" type="text" name="email" placeholder="entrer un email"/>
         <input className="form-control mb-3" type="text" name="password" placeholder="mots de passe"/>
         <div className="row text-center">
           <div className="col-12">
             <button className="btn btn-warning align-center" type="submit">Inscription</button>
           </div>
        </div>
       </form>
     </div>
   </div>
 )
}

export default Signupadmin