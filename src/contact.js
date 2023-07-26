function Contact() {
  return ( 
    <div id="contact">

      <div>
        <h1>
          Stay in Touch
        </h1>

      </div>

      <div id="forms">
        <form >
          <label for="name">Name</label><br />
          <input type="text" id="name"></input><br />

          <label for="organization">Organization</label><br />
          <input type="text" id="org"></input><br />
      
          <label for="email">Email</label><br />
          <input type="text" id="email"></input><br />

          <label for="message">Message</label><br />
          <textarea type="text" id="message" name="message" rows="10" cols ="60"></textarea><br />
            
        </form>

        <div id="socials">
          <img src={require("./pictures/github.png")} />
          <img src={require("./pictures/linkedin.png")} />
        </div>


      </div>

    </div>
   );
}

export default Contact;