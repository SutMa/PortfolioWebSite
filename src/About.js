const About = () => {
    return (
        <div className="temp">

            <div id ="about" className="tittle">
                <h1>About</h1>
            </div>

            <div className="flex" >

                <div className="education">
                    <h2>Education:</h2>
                    <h3>Louisiana State University</h3>
                    <h3>Bachelor of Science in Computer Science</h3>
                </div>

                <div className="skills">
                    <h2>Technical Skills:</h2>
                    <h3>Languages: Java, HTML, CSS, JavaScript, C</h3>
                    <h3>Databases: MongoDB, Firebase</h3>
                    <h3>Developer Tools: VSCode, Apache NetBeans, Figma, Github, Affinity Suite, Agile/Scrum, CommandLine</h3>
                    <h3>Technologies/Frameworks: ReactJS, NodeJS, ExpressJS</h3>
                </div>

                <div className="exp">
                    <h2>Experience:</h2>
                    <h3>Louisiana State Board of Regents</h3>
                    <h3>Information Technology:</h3>
                    <ul>
                        <li>Imaged new desktops, laptops, and workstations for Department of State employee usage</li>
                        <li>Troubleshoot technical problem from OS issues to memory corruption</li>
                        <li>IT infrastructure setup and monitoring</li>
                        <li>Partitioned hard drive disks for Admin and User</li>
                        <li>Installed software updates for OS and user programs</li>
                    </ul>
                    
                </div>

            </div>

        </div>
        
        
    );
}
 
export default About;