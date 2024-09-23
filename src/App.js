import "./App.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <h1>Adrian Jhan Y. Arcega</h1>
          <h2>Future Software Developer</h2>
        </div>

        <div className="Content">
          <div className="Contact">
            <h3>Contact</h3>
            <p>adrianarcega@email.com</p>
            <p>09954565464</p>
            <p>Macabebe, Pampanga</p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#" className="social-icon" aria-label="GitHub">
                <i className="fa fa-github"></i>
              </a>
            </div>
            <h3>Education</h3>
            <p>Bachelor of Science in Information Technology</p>
            <p>University of the Assumption</p>
            <h3>Skills</h3>
            <ul>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className="Experience">
            <h3> Education College Experience</h3>
            <h4>First Year College (2022)</h4>
            <ul>
              <li>
                Made a mini tic-tac-toe game using Python through tkinter GUI
              </li>
              <li>Created a wireframe of the University of the Assumption</li>
              <li>Created a mockup of the University of the Assumption</li>
            </ul>
            <h4>Second Year College (2023)</h4>
            <ul>
              <li>
                Designed and implemented a relational database for a campus
                event management system using SQL
              </li>
              <li>Created complex queries for data retrieval and analysis</li>
              <li>
                Worked on database normalization, reducing data redundancy and
                improving data integrity
              </li>
            </ul>
            <h4>Third Year College (2024)</h4>
            <ul>
              <li>
                Created responsive websites using HTML and CSS, ensuring
                cross-browser compatibility
              </li>
              <li>
                Developed interactive web elements using basic JavaScript
                functionalities
              </li>
              <li>
                Designed a personal portfolio website, showcasing projects and
                skills
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
