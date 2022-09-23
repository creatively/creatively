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
              <div className="projects-list-item-container">
                <h3>Local Climate Change Calculator</h3>
                <img className="project__screenshot" alt="climate project screenshot" src={require("./images/screenshot-climate.png")} />
                <div className="project__description">Calculates and graphs climate data for a given location, calculating the change in the last 10 years. It calls a node backend proxy API, that in turn calls a third-party past-weather data API</div>
                <div className="project__skills-icons">
                  <img className="project__skills-icon" alt="javascript" src={require('./images/js-square-120h.png')} /> 
                  <img className="project__skills-icon" alt="typescript" src={require('./images/ts-square-120h.png')} /> 
                  <img className="project__skills-icon" alt="react" src={require('./images/react-120h.png')} /> 
                  <img className="project__skills-icon" alt="node" src={require('./images/node-120h.png')} /> 
                </div>
                <a className="project__website" target="_blank" href="https://translated-chat.herokuapp.com">climate.herokuapp.com</a>
                <a className="project__github" target="_blank" href="https://github.com/creatively/climate">github.com/creatively/climate</a>
              </div>
            </li>

            <li className="projects-list__chat">
              <div className="projects-list-item-container">
                <h3>Translating Chat Tool</h3>
                <img className="project__screenshot" alt="climate project screenshot" src={require("./images/screenshot-chat.png")} />
                <div className="project__description">Single-page chat application that uses the Google Translate API, enabling real-time chat for multiple people across multiple languages. Use of websockets on client & server</div>
                <div className="project__skills-icons">
                  <img className="project__skills-icon" alt="javascript" src={require('./images/js-square-120h.png')} /> 
                  <img className="project__skills-icon" alt="node" src={require('./images/node-120h.png')} /> 
                </div>
                <a className="project__website" target="_blank" href="https://translated-chat.herokuapp.com">translated-chat.herokuapp.com</a>
                <a className="project__github" target="_blank" href="https://github.com/creatively/translated-chat">github.com/creatively/translated-chat</a>
              </div>
            </li>

            <li className="projects-list__chat">
              <div className="projects-list-item-container">
                <h3>Visual Content Analysis Tool</h3>
                <img className="project__screenshot" alt="analysis project screenshot" src={require("./images/screenshot-analysis.png")} />
                <div className="project__description">Transforms a text transcript into a visual representation of the emotional landscape of the text</div>
                <div className="project__skills-icons">
                  <img className="project__skills-icon" alt="javascript" src={require('./images/js-square-120h.png')} /> 
                  <img className="project__skills-icon" alt="typescript" src={require('./images/ts-square-120h.png')} /> 
                </div>
                <a className="project__website" target="_blank" href="https://translated-chat.herokuapp.com">translated-chat.herokuapp.com</a>
                <a className="project__github" target="_blank" href="https://github.com/creatively/translated-chat">github.com/creatively/translated-chat</a>
              </div>
            </li>
          </ul>
        </section>

      </main>
    </div>
  )
}
