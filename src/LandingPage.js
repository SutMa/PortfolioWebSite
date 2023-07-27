import "./index.css";

const LandingPage = () => {

    const handleContactClick = () => {
        const contactElement = document.getElementById('contact');

        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div id="home" className="landing-page">
            <h1>Hi, it's Sut.</h1>
            <h1>I'm a Software Engineer.</h1>
            <button onClick={handleContactClick}>Contact Me</button>

        </div>
    );
}
 
export default LandingPage;