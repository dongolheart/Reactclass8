import React from 'react'
import '../components/Card.css'


const Card = () => {
    return (
        <>
        <div className="container-flute mt-4">
           <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card shadow-lg">
      <div className="custom shadow-lg">
      <img src="/img/s1.jpg" className="card-img-top" alt="..."/></div>
      <div className="card-body">
       <center> <h5 className="card-title">Card title</h5></center>
        <center><button className="btn btn-success">View Details</button></center>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card  shadow-lg">
      <img src="./img/c1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
       <center> <h5 className="card-title">Card title</h5></center>
        <center><button className="btn btn-success">View Details</button></center>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
      <img src="./img/c2.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
       <center> <h5 className="card-title">Card title</h5></center>
        <center><button className="btn btn-success">View Details</button></center>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
      <img src="./img/c3.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
       <center> <h5 className="card-title">Card title</h5></center>
        <center><button className="btn btn-success">View Details</button></center>
      </div>
    </div>
  </div>
</div> 
</div>
        </>
    )
}

export default Card
