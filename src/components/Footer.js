import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Govind Kumar</h1>
          <PText>
            I am working as a Backened developer with 2+ years of experience.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              //   {
              //     title: '+88012312',
              //     path: 'tel:+88012312',
              //   },
              {
                title: 'kgovind14471@gmail.com',
                path: 'mailto:kgovind14471@gmail.com',
              },
              {
                title: 'Rosera, Samastipur',
                path: 'https://www.google.com/maps/place/Ansh+Kirana+Bhandar/@25.7551888,86.0180301,17z/data=!3m1!4b1!4m6!3m5!1s0x39edf1ed89506fbf:0x1818c965787b829c!8m2!3d25.755184!4d86.020605!16s%2Fg%2F11n7t46927?entry=ttu',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/profile.php?id=100004557851407',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/gkn_144',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/hawsome_gkn/',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/govind-kumar-344628157/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2023 - Govind Kumar | Designed By{' '}
            <a target="_blank" rel="noreferrer">
              GKN
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
