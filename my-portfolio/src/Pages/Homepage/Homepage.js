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
          {/* Change to morning, afternoon or evening dependant on local time */}
          <h1>Hello, I'm Paul</h1>
          <p>A creative</p>
          <p className="text-scroll">{textArray[currentIndex]}</p>
        </div>
        {/* <!-- About me --> */}
        <div className="about">
          <h3>About</h3>
          <p>
            I am enthusiastic about pursuing a career as a junior developer,
            where I can make a real difference and impact in my work. As I grow
            and become more experienced, I am looking to gain a deeper knowledge
            in software development and enhance my ability to add value within
            the tech industry. I have a passion for creativity, problem solving
            and all things tech related.
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
