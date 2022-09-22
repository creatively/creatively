import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Chris Charles</h1>
        <p className="header__sub-heading">Javascript Engineer</p>
        <div className="header__banner-chris-image"></div>
      </header>
      <main>
        <section className="skills">
          <ul className="skills-list">
            <li className="skills-list__js">Javascript</li>
            <li className="skills-list__ts">Typescript</li>
            <li className="skills-list__node">Node</li>
            <li className="skills-list__react">React</li>
          </ul>
        </section>

        <section className="projects">
          <h2>Example Projects</h2>
          <ul className="projects-list">
            <li className="projects-list__chat">
              <h3>Translating Chat Tool</h3>
              <img className="project-screenshot" alt="project screenshot" src=""/>>
              <div className="project-description">Single-page chat application that uses the Google Translate API, enabling real-time chat for multiple people across multiple langauges. Uses websocket.io client & server</div>
              <a className="project-website" href="https://translated-chat.herokuapp.com">translated-chat.herokuapp.com</a>
              <a className="project-github" href="https://github.com/creatively/translated-chat">github.com/creatively/translated-chat</a>
            </li>
            <li className="projects-list__analysis">
              
            </li>
            <li className="projects-list__climate">
              
            </li>
          </ul>
        </section>

        <h2>Example Projects</h2>

        <a className="link-website" href="www.myclimatechanged.com">www.myclimatechanged.com</a>
        <a className="link-github" href="www.github.com/creatively/myclimatechanged">www.github.com/creatively/myclimatechanged</a>

        <a className="link-website" href="www.translatedchat.com">www.translatedchat.com</a>
        <a className="link-github" href="www.github.com/creatively/translatedchat">www.github.com/creatively/translatedchat</a>

        <a className="link-website" href="www.transcript-visualisation.com">www.transcript-visualisation.com</a>
        <a className="link-github" href="www.github.com/creatively/transcript-visualisation">www.github.com/creatively/transcript-visualisation</a>

      </main>
    </div>
  )
}
