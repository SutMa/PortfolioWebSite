const Projects = () => {
    return (
        
        <div  id="pro" className="project-page">
            
            <div className="header">
                <h1>Projects</h1>
                <p>Take a look...</p>
            </div>
            
            
            <div className="one">
                <h2>TigerNote</h2>
                <h3>HTML, CSS, JS, React</h3>
                <p>A pocket knife for students. With versitile functions like note taking, reminders, calender, and sticky notes.</p>
                <a href="">Source Code</a> 


            </div>

            <div className="three">
                <h2>Tutor App</h2>
                <h3>React Native, Firebase</h3>
                <p>Students can book tutors based on subject, Tutors can customize their own time, Admin can create/delete accounts and bookings.</p>
                <a href="">Source Code</a>
            </div>


            <div className="two">
               <h2>Lexical Analyzer</h2>
               <h3>Java</h3>
               <p>Reads input source code and groups them into categories. Individual words are returned as a token object.</p>
               <a href="">Source Code</a>
            </div>

            

            <div className="four">
                <h2>Blog Site</h2>
                <h3>React, JSON Server</h3>
                <p>Mock blogging site that allows addding and deleting blog articles. Uses local JSON server.</p>
                <a href="">Source Code</a>
            </div>

            <div className="five">
                <h2>Sudoku Validator</h2>
                <h3>Java, Threads</h3>
                <p>Uses 3 concurrent threads which validates a part of the Sudoku solution from row, column, and subgrid.</p>
                <a href="">Source Code</a>
            </div>


            <div className="six">
                <h2>CLOCK Replacement Simulation</h2>
                <h3>Java</h3>
                <p>Page replacement algorithm that simulates how an OS would allocate memory.</p>
                <a href="">Source Code</a>
            </div>

            <div className="seven">
                <h2>IEEE 754 Convertor</h2>
                <h3>Java</h3>
                <p>Takes in decimal number as input and returns the equivalent IEEE 754 format.</p>
                <a href="">Source Code</a>
            </div>

            <div className="eight">
                <h2>Prefix to Infix</h2>    
                <h3>Java</h3>
                <p>Takes in prefix expression as String, generates its infix format and evaluates its value.</p>
                <a href="">Source Code</a>
            </div>

        </div>
    );
}
 
export default Projects;