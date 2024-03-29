// Component for Homepage
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import profileImg from '../../IMG/profile_test_2-PhotoRoom.png-PhotoRoom.png';

function Homepage() {
  const textArray = [
    'Software Developer',
    'Web Developer',
    'Web Designer',
    'UI/UX Designer',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the currentIndex, wrapping back to the beginning if necessary
      setCurrentIndex(prevIndex => (prevIndex + 1) % textArray.length);
    }, 2800);

    return () => {
      clearInterval(intervalId);
    };
  }, [textArray.length]);

  return (
    <div id="main" class="main">
      {/* <!-- Image --> */}
      <img src={profileImg} alt="side profile" className="main-img" />
      {/* <!-- Main Header --> */}
      <main className="main-container">
        <div className="main-header">
          <h1>Hey, I'm Paul</h1>
          <p>An Aspiring</p>
          <p className="text-scroll">{textArray[currentIndex]}</p>
        </div>
        {/* <!-- About me --> */}
        <div className="about">
          <h3>About</h3>
          <p>
            Hello, and welcome to my portfolio. I'm a former painter and
            decorator turned junior developer, looking to make a change in my
            life and in others. I am a graduate of the
            <code>
              <a
                href="https://www.schoolofcode.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;School of Code&nbsp;
              </a>
            </code>
            bootcamp, and have a passion for creativity, problem solving and all
            things tech related.
            <br />
            <br />
            If you would like to get in touch, please contact me
            <code>
              &nbsp;<Link to={'/contact'}>here </Link>
            </code>
            . Alternatively click
            <code>
              <Link to={'/projects'} className="bounce-text">
                &nbsp;projects&nbsp;
              </Link>
            </code>
            to view some of my work. Thanks for your time, Paul.
          </p>
        </div>
      </main>

      {/* <h1 className="construction">CURRENTLY UNDER CONSTRUCTION  (Refactor to React) COME BACK MONDAY 31ST JULY</h1> */}
    </div>
  );
}

export default Homepage;
