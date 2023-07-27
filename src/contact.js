function Contact() {

  
  return ( 
    <div id="contact" className = "contact">

      <div id="contactHeading">
        <h1>
          Stay in Touch
        </h1>

      </div>

      <div id="forms">
        <form >
          <label for="name">Name</label><br />
          <input type="text" id="name" class="in"></input><br />

          <label for="organization">Organization</label><br />
          <input type="text" id="org" class="in"></input><br />
      
          <label for="email">Email</label><br />
          <input type="text" id="email" class="in"></input><br />

          <label for="message">Message</label><br />
          <textarea type="text" id="message" name="message" rows="10" cols ="40" class="in"></textarea><br />
        </form>

        <button>Summit</button>

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