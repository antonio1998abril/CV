import React from "react";
import "./App.css";
import FOTO from "./FOTO/foto.jpg";
import PHONE from "./FOTO/cell image.png"
import GIT from "./FOTO/git.svg";
import Linkeding from "./FOTO/linkeding.svg";

function App() {
  return (
    <>
      <div id="cv" className="instaFade">
        <div className="mainDetails">
          <div id="headshot" className="quickFade">
            <img src={FOTO} alt="Antonio Rodriguez Barrientos" />
          </div>

          <div id="name">
            <h1 className="quickFade delayTwo">Antonio Rodriguez Barrientos</h1>
           {/*  <h2 className="quickFade delayThree"></h2> */}
          </div>

          <div id="contactDetails" className="quickFade delayFour">
            <ul>
              <li>Hotmail : <b>antoniorbx1998@gmail.com</b></li>
              <li>Nationality: Mexican, Age:25</li>
              <li>PHONE: <img src={PHONE} alt="Antonio Rodriguez Barrientos" className="phoneImage" /></li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>

        <div id="mainArea" className="quickFade delayFive">
          <section>
            <article>
              <div className="sectionTitle">
                <h1>Personal Profile</h1>
              </div>

              <div className="sectionContent">
                <p>
                  {" "}
                  Software developer with 2 years of experience, Responsible,
                  with professional ethics, critical analysis, ability to work
                  in team, with a dynamic and enthusiastic nature, easy to
                  learn, participative and proactive, always oriented towards
                  continuous improvement and innovation, currently I have
                  experience using JavaScript and Python technologies.
                </p>
              </div>
            </article>
            <div className="clear"></div>
          </section>

          <section>
            <div className="sectionTitle">
              <h1>Experience</h1>
            </div>

            <div className="sectionContent">
              <article>
                <h2>Apex Systems</h2>
                <b className="test">1/Sep/2021 - Now</b>

                <br />
                <p>
                  React, Redux, Css, Git, Express, Node, Django, Python, OpenCV,
                  PostgreSQL, Axios, Docker, Docker-Compose, Mongo db
                </p>
              </article>

              <article>
                <h2>UDG VIRTUAL</h2>
                <b className="test">1/March/2021 - 29/Aug/2021</b>
                <br />
                <p>JavaScript, Css, HTML, Php</p>
              </article>
            </div>
            <br />
            <div className="clear"></div>
          </section>

       {/*    <section>
            <div className="sectionTitle">
              <h1>Personal Projects</h1>
              <b className="git">Github User antonio1998abril </b>
            </div>

            <div className="sectionContent">
              <article>
                <h2>Intruder detected</h2>
                <p className="subDetails">
                  {" "}
                  React, Redux,PostgreSQL, Python, Node, OpenCV, Django, Docker
                </p>

                <br />
                <p>
                  <a
                    href="https://cmsantoblog.herokuapp.com/"
                    className="clickme danger"
                  >
                    Demo
                  </a>
                  &nbsp;&nbsp;https://cmsantoblog.herokuapp.com/
                </p>
              </article>

              <article>
                <h2>Diabetins- Activity Recommendation System</h2>
                <p className="subDetails">
                  {" "}
                  React, Redux, Mysql, Python, Django, Docker
                </p>

          
                <br />

                <p>
                  <a
                    href="https://antonio-ecommerce-portafolio.herokuapp.com/"
                    className="clickme danger"
                  >
                    Demo
                  </a>
                  &nbsp;&nbsp;https://antonio-ecommerce-portafolio.herokuapp.com/
                </p>
              </article>
            </div>

            <div className="clear"></div>
          </section> */}

          <section>
            <div className="sectionTitle">
              <h1>Experience with</h1>
            </div>

            <div className="sectionContent">
              <ul className="keySkills">
                <li> Python, Django, OpenCV, Socket.io, Javascript,Node </li>
                <li> React, Redux,Css, Html </li>
                <li> Mysql, PostgreSQL, Git, Docker </li>
                <li> Docker-Compose</li>
                <li> English: Intermediate</li>
              </ul>
            </div>
            <div className="clear"></div>
          </section>

          <section>
            <div className="sectionTitle">
              <h1>Education</h1>
            </div>

            <div className="sectionContent">
              <article>
                <p>
                  <a
                    href="https://verify.w3schools.com/1N5TESOPGC"
                    className="clickme danger-text"
                  >
                    React Certification
                  </a>
                  &nbsp;&nbsp;https://verify.w3schools.com/1N5TESOPGC
                </p>
              </article>
              <article>
                <h2>Centro Universitario de Ciencias Exactas e Ingenerias</h2>
                <p className="subDetails">Graduated December 2021</p>
                <p>2017-2021</p>
              </article>
              <article>
                <h2>Proulex Tepeyac</h2>
                <p className="subDetails">English School</p>
                <p>2013-2015</p>
              </article>
            </div>
            <div className="clear"></div>
          </section>
          <section>
            <div className="sectionTitle">
              <h1>Contact me</h1>
            </div>

            <div className="sectionContent">
              <article>
                <h4>Linkedin: antonio-rodriguez-barrientos-9720a217b</h4>
              </article>{" "}
              <br />
              <div id="headshot" className="quickFade">
                <a href="https://github.com/antonio1998abril">
                  <img src={GIT} alt="Antonio Rodriguez Barrientos" />
                </a>
              </div>
              <div id="headshot" className="quickFade">
                <a href="https://www.linkedin.com/in/antonio-rodriguez-barrientos-9720a217b/">
                  <img src={Linkeding} alt="Antonio Rodriguez Barrientos"></img>{" "}
                </a>
              </div>
            </div>

            <div className="clear"></div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
