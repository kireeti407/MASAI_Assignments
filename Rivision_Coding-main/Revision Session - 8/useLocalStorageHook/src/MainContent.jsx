import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Welcome to the Theme Toggle App!</h1>
      <p>
        This is a simple application to demonstrate the use of a custom `useLocalStorage` hook
        with the React Context API to create a persistent theme switcher.
      </p>
      <p>
        Click the button above to toggle between light and dark modes. The selected theme will
        be saved in your browser's local storage and will persist even after you refresh the page.
      </p>
    </div>
  );
};

export default MainContent;