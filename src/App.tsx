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

        <section className="career-highlights">
          <ul className="career-highlights__list">
            <li className="career-highlight cardiff-university">
              <img className="career-highlight__logo" src={require('./images/logo-cardiff-university.png')} alt="cardiff university logo" />
              <div className="career-highlight__text">Masters Degree</div>
            </li>
            <li className="career-highlight vanilla-js">
              <img className="career-highlight__logo" src={require('./images/logo-netscape.png')} alt="netscape logo" />
              <div className="career-highlight__text">22 years Vanilla JS</div>
            </li>
            <li className="career-highlight aviva">
              <img className="career-highlight__logo" src={require('./images/logo-aviva.png')} alt="aviva logo" />
              <div className="career-highlight__text">8 years</div>
            </li>
            <li className="career-highlight admiral">
              <img className="career-highlight__logo" src={require('./images/logo-admiral.png')} alt="admiral logo" />
              <div className="career-highlight__text">6 years</div>
            </li>
          </ul>
        </section>

        <section className="projects">
          <h2>Recent skills-updating projects</h2>
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
                <a className="project__website" target="_blank" href="http://climate-10.com">climate-10.com</a>
                <a className="project__github" target="_blank" href="https://github.com/creatively/climate-10">github.com/creatively/climate-10</a>
              </div>
            </li>

            <li className="projects-list__chat">
              <div className="projects-list-item-container">
                <h3>Translating Chat Tool</h3>
                <img className="project__screenshot" alt="translating chat tool screenshot" src={require("./images/screenshot-chat.png")} />
                <div className="project__description">Single-page chat application that uses the Google Translate API, enabling real-time chat for multiple people across multiple languages. Use of websockets on client & server</div>
                <div className="project__skills-icons">
                  <img className="project__skills-icon" alt="javascript" src={require('./images/js-square-120h.png')} /> 
                  <img className="project__skills-icon" alt="node" src={require('./images/node-120h.png')} /> 
                </div>
                <a className="project__website" target="_blank" href="http://translatingchat.com">translatingchat.com</a>
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
                  <img className="project__skills-icon" alt="node" src={require('./images/node-120h.png')} /> 
                </div>
                <a className="project__website" target="_blank" href="http://wordsfeel.com">wordsfeel.com</a>
                <a className="project__github" target="_blank" href="https://github.com/creatively/wordsfeel">github.com/creatively/wordsfeel</a>
              </div>
            </li>
          </ul>
        </section>

        <section className="jobs">
          <h2>Education & Employment</h2>

          <div className="cv">
            <img className="icon-cv" alt="icon cv" src={require('./images/cv.png')} />
            <a className="cv-link" title="cv link" href="./files/chris-charles-cv-oct-2022.pdf">
              <div className="cv-text">View CV</div>
            </a>
          </div>

          <div className="cv-summary">
            <ul>
              <li>Educated to Masters Degree level</li>
              <li>22 years vanilla javascript experience</li>
              <li>8 years Aviva</li>
              <li>6 years Admiral</li>
            </ul>
          </div>

        </section>
      </main>
    </div>
  )
}
