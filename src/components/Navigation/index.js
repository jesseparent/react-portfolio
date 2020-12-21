import React, { useEffect } from 'react';

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);
  return (
    <header>
      <div className="header-name">
        <h1>Jesse Parent</h1>
      </div>
      <nav>
        <ul>
          {categories.map((category) => (
            <li
              className={` ${currentCategory.name === category.name && 'selectedCategory'}`}
              key={category.id} onClick={() => {
                setCurrentCategory(category);
              }}>{category.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;