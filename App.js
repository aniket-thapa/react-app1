import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX React Element
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);
/**
 * Header
 *  - Logo
 *
 *
 *
 *
 *
 */

// React Component -> 1. Class Based Component - OLD, 2. Functional Component - NEW

// React Functional Components
const TitleComponent = () => (
  <h2 className="title">Hello This is Title Component</h2>
);

const HeadingComponent = () => (
  <div>
    <TitleComponent />
    <h1 className="heading">
      {123456789 + 123456789} Hello React Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
