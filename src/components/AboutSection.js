import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SectionTitle from './SectionTitle';
import PText from './PText';
import AboutImg from '../assets/images/about.png';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    margin-top: -100px;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  /* .aboutSection__right .img{
    flex: 1;
    position: relative;
    top: -40px;
    bottom: 50px;
    width: 100%;
    height: auto;
    border: 5px solid var(--gray-1);
  } */
  /* .aboutSection__left {
    flex: 1;
    margin-left: 100px;
  }
  .aboutSection__right {
    position: relative;
    width: 400px; /*Set the width of the container */
  /*height: 490px; Set the desired height of the clipped image */
  /*overflow: hidden;
    right: 150px;
    .aboutImg img {
      flex: 1;
      position: relative;
      top: -50px; Decrease the length from the top 
      bottom: 50px; Decrease the length from the bottom
      width: 100%;
      height: auto;
      border: 10px solid var(--gray-1);
    } */
  } 
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About me"
          />
          <PText>
            I am a backend developer/Software Engineer specializing in
            Java,Spring Boot & Microservice.Accomplished software developer with
            2+ years of experience in the development of applications.Experience
            in Pharma, Insurance, domain. Experience in every stage of the
            lifecycle of software development, including design, coding,
            debugging, and unit testing.Integrating payment gateway in one of
            the projects.Won the best performance award.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
