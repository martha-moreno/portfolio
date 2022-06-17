import './index.css';
import Picture from '../../Images/Martha.jpg';
import { Container } from 'react-bootstrap';


const Home = () =>{
    return (
        <Container className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <h3>Welcome,</h3>
                    <h1 className="text-uppercase">I am <strong className="name-banner">Martha </strong></h1>
                    <h4 className="text-uppercase">Software Development Engineer </h4>
                </div>
                
                <div className="col-lg-6 col-md-12">
                    <img className="banner-image img-fluid" src={Picture} alt="banner-img" />
                </div>
            </div>
           
        </Container>
  
        
    );
}

export default Home;

