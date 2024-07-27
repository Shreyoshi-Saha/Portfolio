import { useState, useEffect } from "react";
// import { FaInstagram, FaGithubSquare } from "react-icons/fa";
// import { CiFacebook, CiLinkedin } from "react-icons/ci";
// import { SiGmail } from "react-icons/si";
import 'animate.css';

const Contact = () => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }

    setTimeout(() => {
      setStatus({ success: false, message: '' });
    }, 5000);
  };

  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="container contact-form ">
          <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
            
              
                  
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                          
                          <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} /> 
                          <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                        

                        
                          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        
                          <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                        
                          <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                          <button type="submit"><span>{buttonText}</span></button>
                        
                        {
                          status.message &&
                          
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          
                        }
                      
                    </form>
                 
               
            
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Contact;
