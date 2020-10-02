import React from 'react';
// import emailjs from 'emailjs-com';

class ContactUs extends React.Component {

    sendEmail(e) {
        e.preventDefault();

        // emailjs.sendForm("service_xj11pov", "template_9y9kauc", e.target, "user_J3m42A7J6CyNZsMpU2kLo")
    }
    render() {
        return (
            <div>
                <h2>Contact Us</h2>
            </div>
        )
    }
}

export default ContactUs;