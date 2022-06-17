import emailjs from 'emailjs-com';
import React from 'react';
import './index.css';

function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm('service_fj5io3k', 'template_2r720wm', e.target, 'pkafHyUqqxrIsyX_u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert('Your message has been sent!')
}
const Contact = () =>{
    return (
        <> 
            <h1 className="title"> <strong>Contact Me</strong></h1>
            <div className="container"> 
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className='form-control' placeholder="Your Name" name="name"/>
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <input type="email" className='form-control' placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <input type="text" className='form-control' placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <textarea className='form-control' placeholder="Your message" cols="30" rows="8" name="message"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className='btn btn-custom' value='Send Message'/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;