import Image from "next/image";

export default function Home() {
  return (
    <>
        <header>
        <nav>
            <div className="left">Aditya's Portfolio</div>
            <div className="right">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contact me</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <section className="firstSection">
            <div className="leftSection">
                <div>Hi, My name is <span className="purple">Aditya.</span></div>
                <div>I'am a Passionate</div>
                <span id="element"></span>
                <div className="button">
                    {/* <button className="btn">Download Resume</button>
                    <button className="btn">Visit Github</button> */}
                    <a href="public/Resume.pdf" download class="btn">Download Resume</a>
                    <a href="https://github.com/Adityakonkewad" download class="btn">Visit Github</a>
                </div>
            </div>
            <div className="rightSection">
                <img src="/devv.png" alt="" />
            </div>
        </section>
        <hr/>
        <section className="secondSection">
            <span className="text-gray">what I have done so far</span>
            <h1>Work Experience</h1>
            <div className="line"></div>
            <div className="box">
                <div className="vertical">
                    <img className="img-top" src="/front.png" alt=""/>
                    <div className="vertical-title">
                        Front-End Developer
                    </div>
                    <div className="vertical-desc">
                        Skilled Front-end Developer with 4 years of experience in designing, developing and maintaining
                        front-end web applications. Achieved measurable success.
                    </div>
                </div>
                <div className="vertical">
                    <img className="img-top" src="/java.png" alt=""/>
                    <div className="vertical-title">
                        Java & DSA
                    </div>
                    <div className="vertical-desc">
                        Highly motivated and detail-oriented Fresher Java with a passion for developing efficient and
                        reliable software solutions. Skilled in troubleshooting and debugging, with a proven track
                        record of improving system efficiency.
                    </div>
                </div>
                <div className="vertical">
                    <img className="img-top" src="/sql.png" alt=""/>
                    <div className="vertical-title">
                        DBMS/SQL
                    </div>
                    <div className="vertical-desc">
                        Include specific SQL skills such as data manipulation (SELECT, INSERT, UPDATE, DELETE), data
                        definition (CREATE, ALTER, DROP), and database administration tasks. For tips on effectively
                        showcasing DBMS and SQL skills.
                    </div>
                </div>
                <div className="vertical">
                    <img className="img-top" src="/python.png" alt=""/>
                    <div className="vertical-title">
                        Python
                    </div>
                    <div className="vertical-desc">
                        Applying as an Entry Level Python Developer, focus on demonstrating My Python skills. Includes
                        the basics of python.
                    </div>
                </div>
            </div>
        </section>
      
    </main>
    <footer>
        <div className="footer">
            <div className="footer-first">
                <h3>This is Portfolio</h3>
            </div>
            <div className="footer-second">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-third">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-fourth">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className="footer-rights">
            copyright &#169; adityasportfolio|All rights reserved
        </div>
    </footer>
    </>
  );
}
