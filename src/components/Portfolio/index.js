import React, { useState } from 'react';

import bgWork1 from '../../assets/images/work-git-ticket.jpg';
import bgWork2 from '../../assets/images/work-avengers.jpg';
import bgWork3 from '../../assets/images/work-runbuddy.jpg';
import bgWork4 from '../../assets/images/work-jesseparent.jpg';
import bgWork5 from '../../assets/images/work-jnj.jpg';
import bgWork6 from '../../assets/images/work-utahimprov.jpg';

const bgWork1Style = {
  backgroundImage: "url( " + bgWork1 + ")"
}

const bgWork2Style = {
  backgroundImage: "url( " + bgWork2 + ")"
}

const bgWork3Style = {
  backgroundImage: "url( " + bgWork3 + ")"
}

const bgWork4Style = {
  backgroundImage: "url( " + bgWork4 + ")"
}

const bgWork5Style = {
  backgroundImage: "url( " + bgWork5 + ")"
}

const bgWork6Style = {
  backgroundImage: "url( " + bgWork6 + ")"
}

function Portfolio() {

  return (
    <article id="work">
      <div className="content-title">
        <h2>Portfolio</h2>
      </div>
      <div className="content-body work">
        <a href="https://git-ticketing-system.herokuapp.com/" target="_blank" rel="noopener noreferrer"><div className="work-item work1" style={bgWork1Style}>
          <div className="work-label">
            <h3>
              Git Ticketing System
            </h3>
            <h4>
              NodeJS/mySQL/JavaScript
            </h4>
          </div>
        </div></a>
        <a href="https://jesseparent.github.io/avengersassembled/" target="_blank" rel="noopener noreferrer"><div className="work-item work2" style={bgWork2Style}>
          <div className="work-label">
            <h3>
              Avengers Assembled
            </h3>
            <h4>
              JavaScript/APIs/CSS
            </h4>
          </div>
        </div></a>
        <a href="https://jesseparent.github.io/run-buddy/" target="_blank" rel="noopener noreferrer"><div className="work-item work3" style={bgWork3Style}>
          <div className="work-label">
            <h3>
              Run Buddy
            </h3>
            <h4>
              HTML/CSS
            </h4>
          </div>
        </div></a>
        <a href="http://www.jesseparent.com" target="_blank" rel="noopener noreferrer"><div className="work-item work4" style={bgWork4Style}>
          <div className="work-label">
            <h3>
              JesseParent.com
            </h3>
            <h4>
              HTML/CSS/JavaScript
            </h4>
          </div>
        </div></a>
        <a href="http://www.jokyrandjesster.com" target="_blank" rel="noopener noreferrer"><div className="work-item work5" style={bgWork5Style}>
          <div className="work-label">
            <h3>
              JoKyR and Jesster
            </h3>
            <h4>
              HTML/CSS/JavaScript
            </h4>
          </div>
        </div></a>
        <a href="https://web.archive.org/web/20060103065142/http://www.utahimprov.com/" target="_blank" rel="noopener noreferrer"><div className="work-item work6" style={bgWork6Style}>
          <div className="work-label">
            <h3>
              Utah Improv
            </h3>
            <h4>
              SSI/JavaScript/CGI
            </h4>
          </div>
        </div></a>
      </div>
    </article>
  )
}

export default Portfolio;