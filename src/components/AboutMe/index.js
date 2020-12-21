import React from 'react';

function AboutMe() {
  return (
    <section className="content">
      <article id="about-me">
        <div className="content-title">
          <h2>About Me</h2>
        </div>
        <div className="content-body">
          <p>
            My name is Jesse Parent and I am a lot of things.
          </p>
          <p>
            I have maintained a Web page of one kind or another since 1995. Unfortunately with folks who get involved in
            the Internet, we seldom find time for our own projects. Social networking has allowed an easy way to
            communicate and keep in touch, so now it’s time to use my Web site what most folks end up using it for: self
            promotion or as an online brochure.
          </p>
          <p>
            I have been a professional improviser since 2001, first dipping my toe into the water in 1992 while in
            college. I’ve also been a performance poet since 2007, when I first competed in the National Poetry Slam. On
            top of that, I have worked as a software engineer since 1995, which pays the bills and keeps my left brain
            well fed.
          </p>
        </div>
        <img src={require('../../assets/images/about.jpg').default} width="200" height="200" align="right" alt="Jesse Parent" />
      </article>
    </section>
  )
}

export default AboutMe;