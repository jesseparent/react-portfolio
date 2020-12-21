import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    { name: 'About Me', id: 'aboutme' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
    { name: 'Resume', id: 'resume' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () => {
    switch (currentCategory.name) {
      case 'Portfolio':
        return (<Portfolio></Portfolio>);
      case 'Contact':
        return (<ContactForm />);
      case 'Resume':
        return (<Resume />);
      default:
        return (<AboutMe></AboutMe>);
    }
  };

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <Hero></Hero>
      <main>
        {
          renderPage()
        }
      </main>
    </div>
  );
}

export default App;
