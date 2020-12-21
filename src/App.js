import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'

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
      <Header></Header>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Navigation>

      <main>
        {
          renderPage()
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
