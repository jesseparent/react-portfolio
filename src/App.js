import logo from './logo.svg';
import './App.css';

function App() {
  return (
    < div >
      <header>
        <div className="header-name">
          <h1>Jesse Parent</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
            <li><a
              href="mailto:me@jesseparent.com?subject=Resume%20Request&body=We%20would%20love%20a%20copy%20of%20your%20most%20recent%20resume">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
