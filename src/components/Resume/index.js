import React from 'react';
import ResumeLink from '../../assets/jesse-parent-resume.pdf';

function Resume() {
  return (
    <section className="content">
      <article id="Resume">
        <div className="content-title">
          <h2>Resume</h2>
        </div>
        <div className="content-body">
          <p>
            Feel free to download my <a href={ResumeLink} download="jesse-parent-resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>.
          </p>

          <h3>Front-End Skills</h3>
          <p>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
          </p>
          <h3>Back-End Skills</h3>
          <p>
            <li>ASP.Net</li>
            <li>NodeJS</li>
            <li>PHP</li>
            <li>Python</li>
          </p>
        </div>
      </article>
    </section>
  );
}

export default Resume;