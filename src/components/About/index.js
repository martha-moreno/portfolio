import './index.css';
import css from "../../Images/css.png"
import html from "../../Images/HTML5.png"
import js from "../../Images/js.jpeg"
import bootstrap from "../../Images/bootstrap.png"
import github from "../../Images/GitHub.png"
import mern from "../../Images/mern.png"
import Resume from "../../Images/Resume-Martha.pdf"


const About = () =>{
    return (
        <div className="container">
            <div className="card card-about mb-3 text-center border-3 shadow-lg rounded">
                <div className="row g-0">
                    <div className="card-header-about">
                    About Me
                    </div>
                    <div className="col-md-4"> 
                        <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid1 rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text"> I'm a software development engineer with experience in MERN stack, currently enrolled in an MSE in Software Engineering Program at ASU. Passionate about back-end development and DevOps engineering.</p>
                            <p className="card-text"> As a former Technical Account Manager, I have a strong background on project management, custom solution building, and team leadership.</p>
                            <a href={Resume} className="btn btn-color" download>Download Resume</a>
                        </div>
                        
                        
                    </div> 
                </div>
                <div className="row g-0">
                    <div className="card-footer text-muted">
                        <img className="img-bottom" src={html} alt="html_logo" height="50"></img>
                        <img className="img-bottom" src={css} alt="css_logo" height="50"></img>
                        <img className="img-bottom" src={js} alt="js_logo" height="50"></img>
                        <img className="img-bottom" src={bootstrap} alt="react_logo" height="50"></img>
                        <img className="img-bottom" src={mern} alt="react_logo" height="50"></img>
                        <img className="img-bottom"src={github} alt="react_logo" height="50"></img>
                    </div>
                </div> 
            </div>
        </div>    
      
        
    );
}

export default About;