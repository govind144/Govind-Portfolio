import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import Button from '../components/Button';
import AboutImg from '../assets/images/gkn.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .sim-btn {
    line-height: 30px;
    height: 30px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0px;
    /* cursor: pointer; */
  }
  .btn-hover-new {
    color: #333333;
    -webkit-transition: all 0.5sec;
    transition: all 0.5sec;
    position: relative;
    border: 0px solid green;
    overflow: hidden;
    padding: 2px 2px 2px 2px;
    display: inline-block;
    background-color: gray;
  }
  .btn-hover-new button {
    transition: all 0.3sec;
    /* text-align: center; */
    font-weight: bold;
    background-color: darkcyan;
    font-size: 20px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  const cvLink =
    'https://drive.google.com/file/d/1bgCO0w6z8EgfmkgCQ4C17JPjnIdjGNxG/view?usp=sharing';
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Govind Kumar</span>
              </p>
              <h2 className="about__heading">Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Samastipur, Bihar. A place of beauty and nature. I
                  always try to design stuff with my unique point of view. also
                  love to create things that can be useful to others.
                  <br /> <br />
                  I started coding since I was in College. Coding is now a part
                  of my life. I love it and now I have the opportunity to
                  develop the web. I find it really interesting and I enjoyed
                  the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <a
                href={cvLink}
                target="_blank"
                rel="noreferrer"
                className="sim-btn btn-hover-new"
                // data-text="Download CV"
              >
                <button type="button">Download CV</button>
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="10th & 12th"
                items={['SDSVM BATAHA, Rosera']}
              />
              <AboutInfoItem title="B.TECH" items={['BPPIMT, Kolkata']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['JAVA', 'Spring Boot', 'JPA', 'MySql']}
              />
              <AboutInfoItem
                title="Others"
                items={['Photoshop', 'Video Editing']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2022-"
                items={['Software Engineer at INT']}
              />
              <AboutInfoItem
                title="2021-2022"
                items={['Associate Software Engineer at INT']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
