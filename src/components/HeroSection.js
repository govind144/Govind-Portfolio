import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/banner-01.jpg';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import Facebook from '../assets/images/facebook.jpg';
import Twitter from '../assets/images/twitter.jpg';
import Instagram from '../assets/images/instagram.jpg';
import Linkedin from '../assets/images/linkedin.jpg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: 10rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 5rem;
      color: darksalmon;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    margin-top: -200px;
  }
  .hero__info {
    margin-top: -30rem;
    display: block;
    position: relative;
    overflow: hidden;
    padding: 2px 0;
    margin-top: -14%;
    left: 70%;
    transform: translate(-70%, -70%);
    font-weight: bolder;
    font-style: oblique;
  }
  /* .p {
    -webkit-text-fill-color: cyan;
  } */
  /* .text {
    max-width: 420px;
    margin-bottom: 100px;
    margin-left: 200px;
    font-size: 20px;
    transform: translate(50%, -10%);
    -webkit-text-fill-color: white;
    font-weight: bold;
    font-style: italic;
    white-space: nowrap;
  } */
  /* .wrapper {
    display: inline-flex;
    align-items: center;
    margin: 0 15px;
  }
  .wrapper .static-txt {
    color: #fff;
    font-size: 30px;
    font-weight: 400;
  }
  .wrapper .dynamic-txts {
    margin-left: 15px; 
    height: 90px;
    line-height: 90px;
    overflow: hidden;
    margin-top: -20px;
  }
  .dynamic-txts li {
    list-style: none;
    color: #fc6d6d;
    font-size: 30px;
    font-weight: 500;
    position: relative;
    top: 0;
    animation: slide 6s linear infinite;
  }
  @keyframes slide {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
  .dynamic-txts li span {
    position: relative;
    margin: 5px 0;
    line-height: 30px;
  }
  .dynamic-txts li span::after {
    content: '';
    position: relative;
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background: orange;
    border-left: 2px solid #fc6d6d;
    animation: typing 12s linear infinite;
  }
  @keyframes typing {
    0% {
      left: 0;
      margin: 0 0 0 0;
    }
    10% { 
      left: 0;
      margin: 0 -35px 0 35px;
    }
    100% {
      left: calc(100% + 30px);
      margin: 0 -35px 0 35px;
    } 
  }*/
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 70px;
    margin-bottom: 200px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-30px) rotate(270deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    p {
      font-size: 1.6rem;
      transform: translateY(-30px) rotate(270deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-360deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Govind Kumar</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as a Backened developer <br />
              with 2+ years of experience.
            </PText>
            {/* Text animation */}
            {/* <div className="wrapper">
              <span>I Love To </span>
              <span className="static-txt">
                <b className="dynamic-txts">Code!</b>
                <b>Develop Backend Services!</b>
                <b>Design Secure Services!</b>
                <b>Cooking!</b>
              </span>
            </div> */}
            {/* <div className="wrapper">
              <div className="static-txt">I Love To</div>
              <ul className="dynamic-txts">
                <li>
                  <span>Code!</span>
                </li>
                <li>
                  <span>Develop!</span>
                </li>
                <li>
                  <span>Design!</span>
                </li>
                <li>
                  <span>Cooking!</span>
                </li>
              </ul>
            </div> */}
            {/* End of text animation */}
            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100004557851407"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Facebook} alt="FB" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/gkn_144"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="TW" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hawsome_gkn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} alt="IG" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/govind-kumar-344628157/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Linkedin} alt="LI" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
