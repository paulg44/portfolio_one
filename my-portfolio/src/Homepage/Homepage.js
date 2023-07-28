// Component for Homepage
import "./Homepage.css"

function Homepage() {
    return (
    <div id="main" class="main">
      {/* <!-- Image --> */}
      <img
        src="./img/profile_test_2-PhotoRoom.png-PhotoRoom.png"
        alt=""
        className="main-img"
      />
      {/* <!-- Main Header --> */}
      <main className="main-container">
        <div className="main-header">
          <h1>Hey, I'm Paul</h1>
          <p>An Aspiring</p>
          <p className="text-scroll"></p>
        </div>
        {/* <!-- About me --> */}
        <div className="about">
          <h3>About</h3>
          <p>
            Hello, and welcome to my portfolio website. I am a 39 year old
            former painter and decorator on course to become a fullstack web
            developer, looking to make a change in my life and others. I am a
            recent graduate of the
            <code
              ><a href="https://www.schoolofcode.co.uk/" target="_blank"
                >School of Code</a></code>
            bootcamp and I enjoyed every challenging minute.
            <br />
            <br />
            If you would like to get in touch, please contact me
            <code><a href="contact.html">here</a></code>. Alternatively click
            <code
              ><a href="projects.html" className="bounce-text">projects</a></code>
            to view some of my work. Thanks for your time, Paul.
          </p>
        </div>
      </main>
    </div>
    )
}

export default Homepage