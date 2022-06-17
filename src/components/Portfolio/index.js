import bankapp from "../../Images/Bank.jpeg"
import { Container } from "react-bootstrap";
import './index.css'

const Portfolio = () =>{
    return (
        <> 
        <h1 className="title"> <strong>Portfolio</strong></h1>
        <Container className="container">
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
            <div className="card shadow border-2" >
            <img className="card-img-top bg-image hover-overlay ripple img-fluid" data-mdb-ripple-color="light" src={bankapp} alt="BankApp"></img>
            <a href="#!">
                <div className="mask"></div>
              </a>
            <div className="card-body">
                <h5 className="card-title">Banking Application</h5>
                <p className="card-text">Full-stack banking application with MERN.</p>
                <a target="_blank"  href="https://martha-morenofullstackbanking.herokuapp.com/#/" className="btn btn-custom">Demo</a>
                <a target="_blank"  href="https://github.com/martha-moreno/fullstackbankingapplication" className="btn btn-custom">Github</a>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
            <div className="card shadow border-2" >
            <img className="card-img-top bg-image hover-overlay ripple img-fluid" data-mdb-ripple-color="light" src={bankapp} alt="BankApp"></img>
            <a href="#!">
                <div className="mask"></div>
              </a>
            <div className="card-body">
                <h5 className="card-title">Banking Application</h5>
                <p className="card-text">Full-stack banking application with MERN.</p>
                <a target="_blank"  href="https://martha-morenofullstackbanking.herokuapp.com/#/" className="btn btn-custom">Demo</a>
                <a target="_blank"  href="https://github.com/martha-moreno/fullstackbankingapplication" className="btn btn-custom">Github</a>
            </div>
            </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
            <div className="card shadow border-2" >
            <img className="card-img-top bg-image hover-overlay ripple img-fluid" data-mdb-ripple-color="light" src={bankapp} alt="BankApp"></img>
            <a href="#!">
                <div className="mask"></div>
              </a>
            <div className="card-body">
                <h5 className="card-title">Banking Application</h5>
                <p className="card-text">Full-stack banking application with MERN.</p>
                <a target="_blank"  href="https://martha-morenofullstackbanking.herokuapp.com/#/" className="btn btn-custom">Demo</a>
                <a target="_blank"  href="https://github.com/martha-moreno/fullstackbankingapplication" className="btn btn-custom">Github</a>
            </div>
            </div>
            </div>
        </div>

        </Container>
        </>
    
       
    );
}

export default Portfolio;