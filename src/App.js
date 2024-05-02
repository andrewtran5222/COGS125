import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Andrew's Portfolio</h1>
        <p>Hi, I'm Andrew. Thanks for checking out my work.</p>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>UCSD Graduate with a Major in Cognitive Science (w/ Specialization in Design and Interaction), Minor in Computer Science</p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Prompt-a-Week</h3>
            <p>Description of Project 1</p>
          </li>
          <li>
            <h3>UCSD RIMAC Gym Locker Kiosk Prototype</h3>
            <p>Description of Project 2</p>
          </li>
          <li>
            <h3>MyAnimeList</h3>
            <p>Description of Project 3</p>
          </li>
        </ul>
      </section>
      <section className="Contact">
        <h2>Contact Me</h2>
        <p>Email: andrewtran5222-at-gmail-dot-com</p>
        <p>Phone: seven,one,four-224-2368</p>
      </section>
    </div>
  );
}

export default App;
