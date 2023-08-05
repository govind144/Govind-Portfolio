import { v4 as uuidv4 } from 'uuid';
import mailImg from '../images/mail-icon-image.jpg';
import Portfolio from '../images/portolio.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Yahoo Mail',
    desc: 'An backend application to send an email.',
    img: mailImg,
    link: 'https://github.com/govind144/Yahoo_Mail',
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc: 'A website to introduce myself',
    img: Portfolio,
    link: 'https://github.com/govind144/Govind-Portfolio',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Coin Tracker',
  //   desc: 'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
  //   img: CoinTrackerImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc: 'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   img: CavinImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
];

export default projects;
