import React from 'react';
import Project from '../Project';

import bgWork1 from '../../assets/images/work-garage-sale.jpg';
import bgWork2 from '../../assets/images/work-git-ticket.jpg';
import bgWork3 from '../../assets/images/work-avengers.jpg';
import bgWork4 from '../../assets/images/work-runbuddy.jpg';
import bgWork5 from '../../assets/images/work-jesseparent.jpg';
import bgWork6 from '../../assets/images/work-jnj.jpg';

function Portfolio() {

  const projects = [
    {
      name: 'Garage Sale',
      url: 'https://garage-sale-project.herokuapp.com/',
      bgStyle: {
        backgroundImage: "url( " + bgWork1 + ")"
      },
      technologies: 'NodeJS/Mongoose/GraphQL',
      id: 1
    },
    {
      name: 'Git Ticketing System',
      url: 'https://git-ticketing-system.herokuapp.com/',
      bgStyle: {
        backgroundImage: "url( " + bgWork2 + ")"
      },
      technologies: 'NodeJS/mySQL/JavaScript',
      id: 2
    },
    {
      name: 'Avengers Assembled',
      url: 'https://jesseparent.github.io/avengersassembled/',
      bgStyle: {
        backgroundImage: "url( " + bgWork3 + ")"
      },
      technologies: 'JavaScript/APIs/CSS',
      id: 3
    },
    {
      name: 'Run Buddy',
      url: 'https://jesseparent.github.io/run-buddy/',
      bgStyle: {
        backgroundImage: "url( " + bgWork4 + ")"
      },
      technologies: 'HTML/CSS',
      id: 4
    },
    {
      name: 'JesseParent.com',
      url: 'http://www.jesseparent.com',
      bgStyle: {
        backgroundImage: "url( " + bgWork5 + ")"
      },
      technologies: 'HTML/CSS/JavaScript',
      id: 5
    },
    {
      name: 'JoKyR and Jesster',
      url: 'http://www.jokyrandjesster.com',
      bgStyle: {
        backgroundImage: "url( " + bgWork6 + ")"
      },
      technologies: 'HTML/CSS/JavaScript',
      id: 6
    }
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