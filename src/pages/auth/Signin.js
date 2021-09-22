import React from 'react'
import { Link } from 'react-router-dom'

const signin = () => {
    return (
        <>
          <div className="container mt-4 mb-3">
               <div className="row d-flex justify-content-center">
                   <div className="col-md-6 shadow-lg p-3">
                       <form>
                           <div className="mb-3">
                               <label htmlFor="firstname">Firstname</label>
                               <input type="text" className="form-control" id="first"/>
                           </div>
                           <div className="mb-3">
                               <label htmlFor="lastname">LastName</label>
                               <input type="text" className="form-control" id="lastname"/>
                           </div>
                           <div className="mb-3">
                               <label htmlFor="email">Email</label>
                               <input type="email" className="form-control" id="lastname"/>
                           </div>
                           <div className="mb-3">
                               <label htmlFor="password">Password</label>
                               <input type="password" cla ssName="form-control" id="lastname"/>
                           </div>
                           <div className="col-md-6 mb-3">
                               <button className="btn btn-primary form-control"></button>
                           </div>
                           <div className="mb-3">
                               <button className="btn btn-primary form-control">Signin</button>
                           </div>
                           <div className="mb-3">
                               Not Registered yet ? &nbsp;<b><Link to="/signup" className="text-decoration-none">Signup</Link></b>
                           </div>
                       </form>
                   </div>
               </div>
               </div>   
        </>
    )
}

export default signin
