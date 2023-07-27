import emailjs from '@emailjs/browser';
import React from 'react';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const org = document.getElementById('org').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_zh9npvn', 'template_6s1qhaq', { name, org, email, message }, 'R0xU2aRnpXrpyIk5P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    alert("Message Sent!")
    document.getElementById('formID').reset()
  }
  
  return ( 
    <div id="contact" className = "contact">

      <div id="contactHeading">
        <h1>
          Stay in Touch
        </h1>

      </div>

      <div id="forms">
        <form id="formID">
          <label for="name">Name</label><br />
          <input type="text" id="name" class="in"></input><br />

          <label for="organization">Organization</label><br />
          <input type="text" id="org" class="in"></input><br />
      
          <label for="email">Email</label><br />
          <input type="text" id="email" class="in"></input><br />

          <label for="message">Message</label><br />
          <textarea type="text" id="message" name="message" rows="10" cols ="40" class="in"></textarea><br />

        </form>

        <button type="button" onClick={sendEmail}>Submit</button>

        <div id="socials">
          <img src={require("./pictures/github.png")} />
          <a href = "https://github.com/SutMa">GitHub</a> 
          <img src={require("./pictures/linkedin.png")} />
          <a href = "linkedin.com/in/sut">LinkedIn</a>
        </div>


      </div>

    </div>
   );
}

export default Contact;