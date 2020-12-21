import React from 'react';
import Project from '../Project';

import bgWork1 from '../../assets/images/work-git-ticket.jpg';
import bgWork2 from '../../assets/images/work-avengers.jpg';
import bgWork3 from '../../assets/images/work-runbuddy.jpg';
import bgWork4 from '../../assets/images/work-jesseparent.jpg';
import bgWork5 from '../../assets/images/work-jnj.jpg';
import bgWork6 from '../../assets/images/work-utahimprov.jpg';

function Portfolio() {

  const projects = [
    {
      name: 'Git Ticketing System',
      url: 'https://git-ticketing-system.herokuapp.com/',
      bgStyle: {
        backgroundImage: "url( " + bgWork1 + ")"
      },
      technologies: 'NodeJS/mySQL/JavaScript',
      id: 1
    },
    {
      name: 'Avengers Assembled',
      url: 'https://jesseparent.github.io/avengersassembled/',
      bgStyle: {
        backgroundImage: "url( " + bgWork2 + ")"
      },
      technologies: 'JavaScript/APIs/CSS',
      id: 2
    },
    {
      name: 'Run Buddy',
      url: 'https://jesseparent.github.io/run-buddy/',
      bgStyle: {
        backgroundImage: "url( " + bgWork3 + ")"
      },
      technologies: 'HTML/CSS',
      id: 3
    },
    {
      name: 'JesseParent.com',
      url: 'http://www.jesseparent.com',
      bgStyle: {
        backgroundImage: "url( " + bgWork4 + ")"
      },
      technologies: 'HTML/CSS/JavaScript',
      id: 4
    },
    {
      name: 'JoKyR and Jesster',
      url: 'http://www.jokyrandjesster.com',
      bgStyle: {
        backgroundImage: "url( " + bgWork5 + ")"
      },
      technologies: 'HTML/CSS/JavaScript',
      id: 5
    },
    {
      name: 'Utah Improv',
      url: 'https://web.archive.org/web/20060103065142/http://www.utahimprov.com/',
      bgStyle: {
        backgroundImage: "url( " + bgWork6 + ")"
      },
      technologies: 'SSI/JavaScript/CGI',
      id: 6
    },
  ];

  return (
    <section className="content">
      <article id="work">
        <div className="content-title">
          <h2>Portfolio</h2>
        </div>
        <div className="content-body work">
          {projects.map(project => (
            <Project {...project}
              key={project.id}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default Portfolio;