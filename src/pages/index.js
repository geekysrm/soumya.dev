import Head from "next/head";

export default function Home() {
  return (
    <div className="homepage">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Soumya Ranjan Mohanty</title>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lora"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">
            geekySRM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="ml-auto navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://geekysrm.github.io/blog"
                  target="_blank"
                >
                  My Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#whoiam">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="announcement">
          💡Note: This site is under construction 🚧. I'm in the middle of
          building a new version in <b>React and Next.js</b>. Please excuse my
          mess!
        </div>
        <br />
        <br />
        <div className="pimg1">
          <br />
          <br />
          <br />
          <div className="image-container">
            <img src="/img/my-pic.jpg" id="mypic" alt="Soumya Ranjan Mohanty" />
          </div>
          <div className="ptext">
            <br />
            <span className="border">Soumya Ranjan Mohanty</span>
            <br />
            <br />
            <div>
              <span className="subtitle">
                A blockchain enthusiast &amp; web developer
              </span>
            </div>
            <br />
            <div className="social-icons">
              <a
                href="https://linkedin.com/in/geekysrm"
                target="_blank"
                className="linkedin social-item"
              >
                <i className="fab fa-lg fa-linkedin" />
              </a>
              <a
                href="https://github.com/geekysrm"
                target="_blank"
                className="github social-item"
              >
                <i className="fab fa-lg fa-github" />
              </a>
              <a
                href="https://twitter.com/geekysrm"
                target="_blank"
                className="twitter social-item"
              >
                <i className="fab fa-lg fa-twitter-square" />
              </a>
              <a
                href="https://medium.com/@geekysrm"
                target="_blank"
                className="github social-item"
              >
                <i className="fab fa-lg fa-medium" />
              </a>
              <a
                href="https://fb.com/geekysrm"
                target="_blank"
                className="facebook social-item"
              >
                <i className="fab fa-lg fa-facebook-square" />
              </a>
            </div>
          </div>
        </div>
        <section className="section section-light" id="whoiam">
          <h2 className="text-3xl font-semibold">Who I am</h2>
          <p id="para-whoiam">
            Hi, <i>you!</i> <br /> I am <b>Soumya Ranjan Mohanty</b>, a Google
            Certified Mobile Web Specialist, Google India Scholar, a full-stack
            web developer and entrepreneur. I completed my BTech. in Computer
            Science Engineering at{" "}
            <a href="https://www.iiit-bh.ac.in" target="_blank">
              IIIT Bhubaneswar
            </a>{" "}
            .
            <br />
            I love coding and participating in hackathons. I have knowledge of
            various web technologies and have build many projects.
            <br />I love writing and I maintain a{" "}
            <a href="https://geekysrm.github.io/blog" target="_blank">
              blog
            </a>{" "}
            where I write about tech.
          </p>
        </section>
        <div className="pimg2" id="skills">
          <div className="ptext">
            <span className="border trans">My Skills and Expertise</span>
          </div>
        </div>
        <section className="section section-light">
          <h2
            className="text-3xl font-semibold"
            style={{ marginBottom: "-100px" }}
          >
            MY SKILLS
          </h2>
          <div id="skill" className="skill-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="skillbar">
                    <div className="skill-progress">
                      <p>Node.JS</p>
                      <p>React.JS</p>
                      <p>HTML 5</p>
                      <p>CSS 3</p>
                      <p>Electron</p>
                      <p>Express JS</p>
                      <p>Javascript</p>
                      <p>SQL</p>
                      <p>Networking</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="skill-progress">
                    <p>C</p>
                    <p>C++</p>
                    <p>React Native</p>
                    <p>Git</p>
                    <p>Gatsby JS</p>
                    <p>Python</p>
                    <p>Web Scraping</p>
                    <p>Next.js</p>
                    <p>GraphQL</p>
                  </div>
                </div>
                {/*End of col lg 6*/}
              </div>
              {/*End of row*/}
            </div>
            {/*End of container*/}
          </div>
        </section>
        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">Education and Experience</span>
          </div>
        </div>
        <section className="section section-dark">
          <h2 className="text-3xl font-semibold">My Education</h2>
          <p className="timeline-container"></p>
          <ul className="timeline">
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag ed3">B Tech. Degree</span>
                  <span className="time-wrapper">
                    <span className="time">2016 - 2020</span>
                  </span>
                </div>
                <div className="desc desc-left">
                  <span className="school">College </span>-{" "}
                  <a href="https://www.iiit-bh.ac.in" target="_blank">
                    IIIT Bhubaneswar
                  </a>
                  .
                  <br />B Tech. in Computer Science and Engineering.
                </div>
              </div>
            </li>
            {/* Item 2 */}
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag ed2">Higher Secondary Education</span>
                  <span className="time-wrapper">
                    <span className="time">2013 - 2015</span>
                  </span>
                </div>
                <div className="desc desc-right">
                  <span className="school">School </span> - Chinmaya Vidyalaya
                  (E.M.), Rourkela.
                  <br /> Completed my +2 Education in the
                  <b>science</b> stream from the same school.
                </div>
              </div>
            </li>
            {/* Item 3 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag ed1">Secondary Education</span>
                  <span className="time-wrapper">
                    <span className="time">2013</span>
                  </span>
                </div>
                <div className="desc desc-left">
                  <span className="school">School </span> - Chinmaya Vidyalaya
                  (E.M.), Rourkela.
                  <br />
                  Studied the academics and learnt life values in a
                  <b>school with a difference</b> (S.W.A.D).
                </div>
              </div>
            </li>
          </ul>
          <h2 className="text-3xl font-semibold">My Experience</h2>
          <span>
            For updated experience info, checkout my{" "}
            <a
              className="text-blue-500"
              href="https://linkedin.com/in/geekysrm"
              target="_blank"
            >
              Linkedin
            </a>
            .
          </span>
          <ul className="timeline">
            {/* Item 1 */}
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag exp1">Web Master</span>
                  <span className="time-wrapper">
                    <span className="time">Aug 2018 - Present</span>
                  </span>
                </div>
                <div className="desc desc-left">
                  <span>ACM IIIT-Bh Chapter</span>.
                  <br /> Started working as web master of ACM IIIT-Bh chapter. I
                  handle all web related matters of the chapter.
                </div>
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag exp1">Front End Developer</span>
                  <span className="time-wrapper">
                    <span className="time">Jun 2018 - Aug 2018</span>
                  </span>
                </div>
                <div className="desc desc-left">
                  <span className="school">Company </span>-
                  <a href="#" target="_blank">
                    Koyofea
                  </a>
                  .
                  <br /> Worked as a Front end Developer. Created the frontend
                  using React.JS with Redux. Made use of the APIs created by the
                  backend team to create the frontend of the app.
                </div>
              </div>
            </li>
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag exp1">Product Development Intern</span>
                  <span className="time-wrapper">
                    <span className="time">Dec 2017 - Feb 2018</span>
                  </span>
                </div>
                <div className="desc desc-left">
                  <span className="school">Company </span>-
                  <a href="https://hasura.io" target="_blank">
                    Hasura
                  </a>
                  .
                  <br /> Worked as a Product Development Intern in Hasura. Made
                  a web site using Node.Js and React.JS with Hasura APIs. Also,
                  came to know about Kubernetes, Ingress and other technologies.{" "}
                  <br />{" "}
                  <b>Won the Pub2Hub Challenge by making cool chatbots.</b>
                </div>
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag exp1">Writer at Codeburst</span>
                  <span className="time-wrapper">
                    <span className="time">Dec 2017 - Present</span>
                  </span>
                </div>
                <div className="desc desc-right">
                  <br /> I write technical articles on{" "}
                  <a href="https://www.codeburst.io">
                    <u>Codeburst.io</u>
                  </a>{" "}
                  , mainly focussed on web development.
                  <br />
                  Codeburst is an online publication that showcases web
                  development articles and tutorials from writers all over the
                  world.
                </div>
              </div>
            </li>
          </ul>
          <p />
        </section>
        <div className="pimg5" id="certs">
          <div className="ptext">
            <span className="border ">Certifications and Trainings</span>
          </div>
        </div>
        <section className="section section-light">
          <h2 className="text-3xl font-semibold">My Certifications</h2>
          <span>
            For updated certifications, checkout my{" "}
            <a
              className="text-blue-500"
              href="https://linkedin.com/in/geekysrm"
              target="_blank"
            >
              Linkedin{" "}
            </a>
            .
          </span>
          <br />
          <br />
          <div className="card-deck">
            <div className="card">
              <div className="card-body">
                <h5 className="text-xl card-title">
                  Participation in 2-day hackathon and Git workshop
                </h5>
                <p className="card-text">
                  I participated in a 2-day open source hackathon &amp; workshop
                  on Git and Github on the occasion of Hacktoberfest.
                </p>
              </div>
              <a
                href="http://bit.ly/srm-hacktoberfest-2018"
                target="_blank"
                className="btn btn-primary"
              >
                View Certificate
              </a>
              <div className="card-footer">
                <small className="text-muted">Issued on Oct 2018</small>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="text-xl card-title">
                  Distinguished Fellow at Hasura
                </h5>
                <p className="card-text">
                  Awarded the Hasura Distingished fellow - High Performer
                  certificate in Hasura Product Development Fellowship. The
                  award recognizes superior performance from fellows who also
                  went above &amp; beyond the call of duty by helping &amp;
                  encouraging others in the program.
                </p>
              </div>
              <a
                href="https://bit.ly/geekysrm-high-performer"
                target="_blank"
                className="btn btn-primary"
              >
                View Certificate
              </a>
              <div className="card-footer">
                <small className="text-muted">Issued on Feb 2018</small>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="text-xl card-title">
                  Introduction to Modern Application Development
                </h5>
                <p className="card-text">
                  This is India's largest MOOC jointly conducted by IIT Madras
                  and Hasura Technologies, in partnership with NASSCOM.
                  Certificate of completion is offered by IIT Madras. I
                  successfully completed the course and got a score of 87% in
                  the NPTEL exam thereby, getting selected in Hasura Product
                  Development Fellowship.
                </p>
              </div>
              <a
                href="http://nptel.ac.in/noc/social_cert/noc17-cs40/NPTEL17CS40S2220030171008811.jpg"
                target="_blank"
                className="btn btn-primary"
              >
                View Certificate
              </a>
              <div className="card-footer">
                <small className="text-muted">Issued on Oct 2017</small>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="text-xl card-title">
                  National Programming Aptitude Test (NPAT)
                </h5>
                <p className="card-text">
                  NPAT is a coding competition conducted by NPTEL (a project by
                  IITs and IISc) in collaboration with ACM India and Google.
                  NPAT is a self-assessment on programming.
                </p>
              </div>
              <a
                href="https://npat.nptel.ac.in/npat_2017/certificate?id=110667720683196056836"
                target="_blank"
                className="btn btn-primary"
              >
                View Certificate
              </a>
              <div className="card-footer">
                <small className="text-muted">Issued on Sep 2017</small>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="text-xl card-title">
                  Network Management Course
                </h5>
                <br />
                <p className="card-text">
                  This was a course on Network Management conducted by Nettech
                  at IIT KGP. Certificate of completion is offered by IIT
                  Kharagpur.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Issued on Jun 2017</small>
              </div>
            </div>
          </div>
        </section>
        <div className="pimg4" id="projects">
          <div className="ptext">
            <span className="border ">Projects Showcase</span>
          </div>
        </div>
        <section className="section section-light">
          <h2 className="text-3xl font-semibold">Projects done by me</h2>
          <span>
            For updated projects, checkout my{" "}
            <a
              className="text-blue-500"
              href="https://linkedin.com/in/geekysrm"
              target="_blank"
            >
              Linkedin{" "}
            </a>
            and my{" "}
            <a
              className="text-blue-500"
              href="https://github.com/geekysrm"
              target="_blank"
            >
              GitHub
            </a>
            .
          </span>
          <br />
          <br />
          <div className="container-fluid ">
            <div className="card-deck ">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-techsoc-website.png"
                  alt="Electron Crypto Currency Tracker"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">
                    Official Website of IIIT Tech Society
                  </h5>
                  <p className="card-text">
                    {" "}
                    The official website of IIIT Bhubaneswar Tech Society made
                    using React.JS
                  </p>
                  <a
                    href="https://tesoc-iiitbh.github.io/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/geekysrm/iiit-tech-society-site"
                    target="_blank"
                    className="btn btn-warning"
                  >
                    View Code
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <small className="text-muted">Aug 2018</small>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-electron-crypto.png"
                  alt="Electron Crypto Currency Tracker"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">
                    Electron Crypto Currency Tracker
                  </h5>
                  <p className="card-text">
                    {" "}
                    Native desktop app that displays current price of crypto
                    currency and alerts user when a specified value is crossed.
                    Works on Windows + Linux + Mac OSX
                  </p>
                  <a
                    href="https://github.com/geekysrm/electron-crypto-currency-tracker/"
                    target="_blank"
                    className="btn btn-warning"
                  >
                    View Code
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <small className="text-muted">May 2018</small>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-e-bloodbank.png"
                  alt="E-bloodbank-app"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">E-Bloodbank</h5>
                  <p className="card-text">
                    {" "}
                    E-bloodbank is a convenient way to connect blood donors to
                    blood recipients. It is an application which lists blood
                    donors and recipients and connect them according to blood
                    groups. Blood acceptors can find appropriate blood donors
                    along with their contact information and geolocation.
                  </p>
                  <a
                    href="https://bloodbank-iiit.herokuapp.com"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/geekysrm/advaita-e-bloodbank"
                    target="_blank"
                    className="btn btn-warning"
                  >
                    View Code
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <small className="text-muted">Feb 2018</small>
                  </div>
                </div>
              </div>
              {/* Add Modal for viewing code in Hasura Hub or github*/}
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-e-election.png"
                  alt="E-election-app"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">E-election</h5>
                  <p className="card-text">
                    I and my teammate made an e-election app that allows users
                    to conduct an election for a given post. For each post,
                    users would be able to nominate themselves as candidates and
                    the users should be able to vote for one of them.
                  </p>
                  <a
                    href="https://ui.artfully11.hasura-app.io"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/geekysrm/e-election-fullstack"
                    target="_blank"
                    className="btn btn-warning"
                  >
                    View Code
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <br />
                    <small className="text-muted">Feb 2018</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-deck ">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-fb-weather-bot.png"
                  alt="FB-weather-bot"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">
                    Facebook Real-Time Weather Bot
                  </h5>
                  <p className="card-text">
                    This is a Weather bot on facebook messenger using Node.JS,
                    which when given a city/place name replies back with the
                    current weather condition and temperatures in °C and °F.
                  </p>
                  <a
                    href="https://hasura.io/hub/projects/geekysrm/fb-messenger-weather-bot"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/geekysrm/fb-messenger-weather-bot"
                    target="_blank"
                    className="btn btn-warning"
                  >
                    View Code
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <small className="text-muted">Jan 2018</small>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-fb-got-bot.png"
                  alt="FB-GOT-bot"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">
                    Facebook Game of Thrones Bot
                  </h5>
                  <p className="card-text">
                    This is a fun bot built on Node.JS for all the{" "}
                    <a href="https://www.hbo.com/game-of-thrones">
                      Game of Thrones
                    </a>{" "}
                    fans out there. It will show info on characters, houses and
                    can also display a random GOT quote, when asked.
                  </p>
                  <a
                    href="https://hasura.io/hub/projects/geekysrm/fb-GameOfThrones-bot"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/geekysrm/GOT-bot"
                    target="_blank"
                    className="btn btn-warning"
                  >
                    View Code
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <br />
                    <small className="text-muted">Jan 2018</small>
                  </div>
                </div>
              </div>
              <div className="card">
                <a
                  href="https://www.youtube.com/watch?v=_GaLNoXkQhk"
                  target="_blank"
                >
                  <img
                    className="card-img-top"
                    src="/img/project-twitter-bot.png"
                    alt="Twitter-bot"
                  />
                </a>
                <div className="card-body">
                  <h5 className="text-xl card-title">
                    Twitter Retweet/Follow/Like Bot
                  </h5>
                  <p className="card-text">
                    A twitter bot built on Node.JS . It favorites, retweets
                    recent tweets about a particular keyword(s) and also follows
                    the user who tweets about them.
                  </p>
                  <a
                    href="https://hasura.io/hub/projects/geekysrm/twitter-bot"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/geekysrm/hasura-twitter-bot"
                    target="_blank"
                    className="btn btn-warning"
                  >
                    View Code
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <br />
                    <small className="text-muted">Jan 2018</small>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-twitter-clone.png"
                  alt="Twitter-clone"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">Twitter UI Clone</h5>
                  <p className="card-text">
                    This is a clone of the twitter website UI. It is created
                    using React.JS and material-ui. The timeline page and the
                    search page is cloned.
                  </p>
                  <a
                    href="https://github.com/geekysrm/HPDFTask1"
                    target="_blank"
                    className="btn btn-warning"
                  >
                    View Code
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <br />
                    <small className="text-muted">Dec 2017</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-deck ">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-attendance-manager.jpg"
                  alt="Attendance-Manager"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">Attendance Manager</h5>
                  <p className="card-text">
                    Attendance Manager is built using Node JS in server side,
                    Postgres as database, and HTML CSS Bootstrap in front-end.
                    It records the attendance in each subject. It displays the
                    percentage of classes in which the user is present day-wise
                    and subject-wise.
                  </p>
                  <a
                    href="http://attendancemanager.tk"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <br />
                    <small className="text-muted">Oct 2017</small>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-bloodgroup-db-cpp.png"
                  alt="Blood-Group-CPP"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">
                    Blood Group Database of Odisha using C++ OOP
                  </h5>
                  <p className="card-text">
                    This is a blood group database for the state of Odisha using
                    C++ Object Oriented Programming. Added positions of users as
                    admins, staffs and donors. Provided methods to add citizen
                    details like full name, age, blood group etc. Added login
                    functionality for admin and staff. Provided search functions
                    to search donors by blood group and city. Users could login
                    and interact via console.
                  </p>
                  <a
                    href="https://github.com/geekysrm/blood-group-db"
                    target="_blank"
                    className="btn btn-warning"
                  >
                    View Code
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <br />
                    <small className="text-muted">Oct 2017</small>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src="/img/project-lfs.jpg"
                  alt="Linux-from-scratch"
                />
                <div className="card-body">
                  <h5 className="text-xl card-title">Linux From Scratch</h5>
                  <p className="card-text">
                    Completed the Linux From Scratch project in 3 weeks time.
                    Understood Linux system fundamentals and built a Linux
                    operating system from scratch upward. LFS version used was
                    8.0. LFS ID : 26894
                  </p>
                  <a
                    href="http://linuxfromscratch.org/lfs/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go to Website
                  </a>
                  <br />
                  <br />
                  <div className="card-footer">
                    <br />
                    <small className="text-muted">Aug 2017</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="resume" className="resume-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center col-lg-10">
                <h1>My Resume</h1>
                <p>You can download my resume by clicking the button below.</p>
                <a
                  href="https://link.soumya.dev/resume"
                  className="btn cmn-btn resume-btn"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Start Contact*/}
        <div id="contact" className="contact-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-left">
                  <div className="contact-details">
                    <h1>Contact Me</h1>
                    <p>
                      You can contact me via the contact form displayed
                      alongside.
                      <br />
                      Alternatively, you can also reach me on my social handles
                      and my email.
                    </p>
                  </div>
                  <div className="contact-address">
                    <p>
                      <b>Presently at:</b> <br />
                      Bengaluru, Karnataka.
                      <br /> India.{" "}
                    </p>
                  </div>
                  <div className="contact-mail">
                    <p>
                      <i
                        className="fa fa-envelope contact-icons"
                        style={{ color: "rgba(154, 164, 167, 0.432)" }}
                      />
                      &nbsp;&nbsp;<span>Email:</span>
                      <a href="mailto:soumyarnm@gmail.com?subject=I%20just%20saw%20your%20personal%20website">
                        soumyarnm@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form">
                  <form
                    method="POST"
                    action="https://formspree.io/soumyacool2012@gmail.com"
                  >
                    <div className="form-group">
                      <label htmlFor="name">
                        Name
                        <span>*</span>
                      </label>
                      <input
                        name="name"
                        type="name"
                        className="form-control"
                        id="name"
                        required
                        aria-required="”true”"
                        pattern="[a-zA-Z][a-zA-Z0-9\s]*"
                        title="Please enter your name e.g.: John Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address
                        <span>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        required
                        aria-required="”true”"
                        pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                        title="Please enter valid email e.g.: example@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">
                        Message
                        <span>*</span>
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows={10}
                        required
                        aria-required="”true”"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn submit-btn"
                      id="submit-btn"
                    >
                      <span>
                        <i className="fab fa-telegram-plane" />
                        &nbsp;&nbsp;&nbsp;Send Message
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center col-lg-8">
                <p className="copyright">
                  Copyright {new Date().getFullYear()} Soumya Ranjan Mohanty{" "}
                  <br /> <i className="fas fa-code" /> With{" "}
                  <i className="fas fa-heart" />
                </p>
                <div className="footer-social-links">
                  <a href="https://linkedin.com/in/geekysrm" target="_blank">
                    <i
                      className="fab fa-linkedin-in"
                      style={{ color: "black" }}
                    />
                  </a>
                  <a href="https://github.com/geekysrm" target="_blank">
                    <i className="fab fa-github" style={{ color: "black" }} />
                  </a>
                  <a href="https://twitter.com/geekysrm" target="_blank">
                    <i className="fab fa-twitter" style={{ color: "black" }} />
                  </a>
                  <a href="https://medium.com/@geekysrm" target="_blank">
                    <i className="fab fa-medium-m" style={{ color: "black" }} />
                  </a>
                  <a href="https://fb.com/geekysrm" target="_blank">
                    <i
                      className="fab fa-facebook-f"
                      style={{ color: "black" }}
                    />
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      <style jsx>{`
        .homepage {
          height: 100%;
          margin: 0;
          font-size: 16px;
          font-family: "Lato", sans-serif;
          font-weight: 400;
          line-height: 1.8em;
          color: #666;
        }

        .pimg1,
        .pimg2,
        .pimg3,
        .pimg4,
        .pimg5 {
          position: relative;
          opacity: 0.7;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;

          /*
    fixed = parallax
    scroll = normal
  */
          background-attachment: fixed;
        }

        .pimg1 {
          background-image: url("./img/image5.jpg");
          min-height: 100%;
          height: 685px;
          min-width: 100%;
        }

        .pimg2 {
          background-image: url("./img/image2.jpg");
          min-height: 400px;
        }

        .pimg3 {
          background-image: url("./img/image3.jpg");
          min-height: 400px;
        }

        .pimg4 {
          background-image: url("./img/image1.jpg");
          min-height: 400px;
        }

        .pimg5 {
          background-image: url("./img/image6.jpg");
          min-height: 400px;
        }

        .section {
          text-align: center;
          padding: 50px 80px;
        }

        .section-light {
          background-color: #f4f4f4;
          color: #666;
        }

        .section-dark {
          background-color: #282e34;
          color: #ddd;
        }

        .ptext {
          position: absolute;
          top: 50%;
          width: 100%;
          text-align: center;
          color: #000;
          font-size: 27px;
          letter-spacing: 8px;
          text-transform: uppercase;
        }

        .ptext .border {
          background-color: #111;
          color: #fff;
          padding: 20px;
        }

        .ptext .border.trans {
          background-color: transparent;
        }

        #para-whoiam {
          font-family: "Josefin Sans", sans-serif;
          font-size: 120%;
        }

        .subtitle {
          color: #fff;
          background-color: #253239;
          width: 500px;
          text-align: center;
          padding: 5px;
          letter-spacing: 6px;
          font-family: "Lora", serif;
          font-size: 24px;
        }

        .social-icons {
          display: flex;
          justify-content: space-evenly;
          background-color: rgba(156, 152, 152, 0.157);
          width: 500px;
          margin: 0 auto;
          flex-flow: row wrap;
        }

        .github {
          color: black;
        }

        .twitter {
          color: #00aced;
        }

        .linkedin {
          color: #007bb6;
        }

        .facebook {
          color: #3b5998;
        }

        #main {
          transition: margin-left 0.5s;
          padding: 20px;
          overflow: hidden;
          width: 100%;
        }

        .timeline {
          margin: 0;
          padding: 0;
          background: none;

          color: white;
          font-family: "Open Sans", sans-serif;
          font-size: 112.5%;
          line-height: 1.6em;
        }

        /* ================ The Timeline ================ */

        .timeline {
          position: relative;
          width: 660px;
          margin: 0 auto;
          margin-top: 20px;
          padding: 1em 0;
          list-style-type: none;
        }

        .timeline:before {
          position: absolute;
          left: 50%;
          top: 0;
          content: " ";
          display: block;
          width: 6px;
          height: 100%;
          margin-left: -3px;
          background: rgb(80, 80, 80);
          background: -moz-linear-gradient(
            top,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
          );
          background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0%, rgba(30, 87, 153, 1)),
            color-stop(100%, rgba(125, 185, 232, 1))
          );
          background: -webkit-linear-gradient(
            top,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
          );
          background: -o-linear-gradient(
            top,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
          );
          background: -ms-linear-gradient(
            top,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
          );
          background: linear-gradient(
            to bottom,
            rgba(80, 80, 80, 0) 0%,
            rgb(80, 80, 80) 8%,
            rgb(80, 80, 80) 92%,
            rgba(80, 80, 80, 0) 100%
          );

          z-index: 5;
        }

        .timeline li {
          padding: 1em 0;
        }

        .timeline li:after {
          content: "";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }

        .direction-l {
          position: relative;
          width: 300px;
          float: left;
          text-align: right;
        }

        .direction-r {
          position: relative;
          width: 300px;
          float: right;
        }

        .flag-wrapper {
          position: relative;
          display: inline-block;

          text-align: center;
        }

        .flag {
          position: relative;
          display: inline;
          background: rgb(248, 248, 248);
          padding: 6px 10px;
          border-radius: 5px;
          color: black;
          font-weight: 600;
          text-align: left;
        }

        .direction-l .flag {
          -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15),
            0 0 1px rgba(0, 0, 0, 0.15);
          -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15),
            0 0 1px rgba(0, 0, 0, 0.15);
          box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15),
            0 0 1px rgba(0, 0, 0, 0.15);
        }

        .direction-r .flag {
          -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15),
            0 0 1px rgba(0, 0, 0, 0.15);
          -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15),
            0 0 1px rgba(0, 0, 0, 0.15);
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15),
            0 0 1px rgba(0, 0, 0, 0.15);
        }

        .direction-l .flag:before,
        .direction-r .flag:before {
          position: absolute;
          top: 50%;
          right: -40px;
          content: " ";
          display: block;
          width: 12px;
          height: 12px;
          margin-top: -10px;
          background: #fff;
          border-radius: 10px;
          border: 4px solid rgb(255, 80, 80);
          z-index: 10;
        }

        .direction-r .flag:before {
          left: -40px;
        }

        .direction-l .flag:before {
          right: -40px;
        }

        .direction-r .ed1:before {
          left: -65px;
        }

        .direction-l .ed2:before {
          right: -54px;
        }

        .direction-r .ed3:before {
          left: -43px;
        }

        .direction-r .exp1:before {
          left: -52px;
        }
        .direction-l .exp1:before {
          right: -29px;
        }

        .direction-l .flag:after {
          content: "";
          position: absolute;
          left: 100%;
          top: 50%;
          height: 0;
          width: 0;
          margin-top: -8px;
          border: solid transparent;
          border-left-color: rgb(248, 248, 248);
          border-width: 8px;
          pointer-events: none;
        }

        .direction-r .flag:after {
          content: "";
          position: absolute;
          right: 100%;
          top: 50%;
          height: 0;
          width: 0;
          margin-top: -8px;
          border: solid transparent;
          border-right-color: rgb(248, 248, 248);
          border-width: 8px;
          pointer-events: none;
        }

        .time-wrapper {
          display: inline;

          line-height: 1em;
          font-size: 0.66666em;
          color: rgb(250, 80, 80);
          vertical-align: middle;
        }

        .direction-l .time-wrapper {
          float: left;
        }

        .direction-r .time-wrapper {
          float: right;
        }

        .time {
          display: inline-block;
          padding: 4px 6px;
          background: none;
        }

        .desc {
          margin: 1em 0.75em 0 0;

          font-size: 0.77777em;
          font-style: italic;
          line-height: 1.5em;
        }

        .desc a {
          color: white;
        }

        .desc a:visited {
          color: white;
        }

        .desc-left {
          text-align: left;
        }

        .desc-right {
          text-align: right;
        }

        .direction-r .desc {
          margin: 1em 0 0 0.75em;
        }

        .image-container {
          display: flex;
          justify-content: center;
        }

        #mypic {
          border-radius: 50%;
          width: 20%;
          height: 20%;
        }

        /* ================ Timeline Media Queries ================ */

        @media screen and (max-width: 660px) {
          .timeline {
            width: 100%;
            padding: 4em 0 1em 0;
          }

          .timeline li {
            padding: 2em 0;
          }

          .direction-l,
          .direction-r {
            float: none;
            width: 100%;

            text-align: center;
          }

          .flag-wrapper {
            text-align: center;
          }

          .flag {
            background: rgb(255, 255, 255);
            z-index: 15;
          }

          .direction-l .flag:before,
          .direction-r .flag:before {
            position: absolute;
            top: -30px;
            left: 50%;
            content: " ";
            display: block;
            width: 12px;
            height: 12px;
            margin-left: -9px;
            background: #fff;
            border-radius: 10px;
            border: 4px solid rgb(255, 80, 80);
            z-index: 10;
          }

          .direction-l .flag:after,
          .direction-r .flag:after {
            content: "";
            position: absolute;
            left: 50%;
            top: -8px;
            height: 0;
            width: 0;
            margin-left: -8px;
            border: solid transparent;
            border-bottom-color: rgb(255, 255, 255);
            border-width: 8px;
            pointer-events: none;
          }

          .time-wrapper {
            display: block;
            position: relative;
            margin: 4px 0 0 0;
            z-index: 14;
          }

          .direction-l .time-wrapper {
            float: none;
          }

          .direction-r .time-wrapper {
            float: none;
          }

          .desc {
            position: relative;
            margin: 1em 0 0 0;
            padding: 1em;
            background: #282e34;
            -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
            text-align: center;
            z-index: 15;
          }

          .direction-l .desc,
          .direction-r .desc {
            position: relative;
            margin: 1em 1em 0 1em;
            padding: 1em;

            z-index: 15;
          }
        }

        @media screen and (min-width: 400px ?? max-width: 660px) {
          .direction-l .desc,
          .direction-r .desc {
            margin: 1em 4em 0 4em;
          }
        }

        .school {
          font-size: 17px;
        }

        @media (max-width: 568px) {
          .pimg1,
          .pimg2,
          .pimg3,
          .pimg4,
          .pimg5 {
            background-attachment: scroll;
          }
          .ptext {
            letter-spacing: 5px;
            display: inline-flex;
            flex-direction: column;
          }
          .subtitle {
            word-wrap: break-all;
            width: 100%;
            text-align: center;
            line-height: 43px;
          }
          .navbar-nav {
            display: none;
          }

          .social-icons {
            width: 350px;
            justify-content: space-around;
          }

          .direction-r .ed1:before {
            left: 103px;
          }

          .direction-l .ed2:before {
            left: 86px;
          }

          .direction-r .ed3:before {
            left: 77px;
          }

          .direction-r .exp1:before {
            left: 105px;
          }
          .direction-r .exp1:before {
            right: 106px;
          }
          #mypic {
            border-radius: 50%;
            width: 70%;
            height: 70%;
          }
          #whoiam {
            margin-top: 100px;
          }
        }

        @media (min-width: 568px) {
          .open-slide {
            display: none;
          }
        }

        .skillbar h1 {
          font-size: 30px;
          text-transform: uppercase;
        }
        a.skill-btn {
          border: 2px solid #2ecc71;
          border-radius: 0;
          text-transform: uppercase;
          padding: 14px 40px 10px;
          font-weight: 700;
          color: #2ecc71;
          margin-top: 25px;
          transition: 0.3s;
        }
        a.skill-btn:hover {
          background: #2ecc71;
          color: #fff;
        }
        .skill-progress .progress {
          height: 30px;
          border-radius: 0;
          margin-bottom: 30px;
        }
        .skill-progress .progress p {
          margin: 0;
          font-size: 18px;
          display: block;
          width: 100%;
          text-align: right;
          padding-right: 10px;
          color: #fff;
        }
        .skill-progress .progress-bar {
          background-color: #2ecc71;
        }
        .skill-progress p {
          text-transform: uppercase;
          margin-bottom: 10px;
          color: #566366;
          font-weight: 700;
          font-size: 22px;
        }
        .skill-progress {
          padding-top: 50px;
        }
        .skill-area {
          padding: 80px 0;
        }

        .resume-area h1 {
          font-size: 30px;
          text-transform: uppercase;
          margin-bottom: 30px;
        }
        .cmn-btn {
          display: inline-block;
          border: 2px solid;
          border-radius: 0;
          padding: 14px 30px 12px;
          text-transform: uppercase;
          font-weight: 700;
        }
        .cmn-btn.resume-btn {
          color: #007bff;
          border-color: #007bff;
          margin-top: 30px;
          transition: 0.3s;
          padding: 12px 50px 10px;
          text-transform: uppercase;
          font-weight: 700;
          border-radius: 0;
          margin-top: 20px;
        }
        .resume-btn:hover {
          background: #007bff;
          color: #fff;
        }
        .resume-area {
          background: #f2f2f1;
          padding: 80px 0;
          position: relative;
          z-index: 2;
        }
        .resume-area:after {
          position: absolute;
          left: 50%;
          bottom: -50px;
          content: "";
          border-width: 25px;
          border-color: #f2f2f1 transparent transparent transparent;
          z-index: 3;
          border-style: solid;
          transform: translateX(-50%);
        }
        .bottom-border {
          border-bottom: 1px solid #ddd;
        }
        .resume-education.work-exp {
          padding: 0 0;
        }

        .contact-area {
          background: #252e30;
          padding: 80px 0;
        }
        .contact-details h1 {
          color: #fff;
          font-size: 30px;
          text-transform: uppercase;
          margin-bottom: 30px;
        }
        .contact-details {
          margin-bottom: 30px;
          color: rgba(208, 221, 224, 0.432);
        }
        .contact-address {
          margin-bottom: 30px;
          color: rgba(208, 221, 224, 0.432);
        }
        .contact-mail p span {
          color: #fff;
          margin-right: 25px;
          width: 40px;
          display: inline-block;
        }
        .contact-mail p {
        }
        .contact-form label {
          color: #fff;
          font-size: 16px;
        }
        .contact-form input,
        .contact-form textarea {
          border-radius: 0;
          background: #4b5456;
          border: 1px solid #4b5456;
          box-shadow: none;
          color: #fff;
        }

        .form-control {
          color: #fff;
        }

        .contact-form .form-control:focus {
          background: #4b5456;
          border: 1px solid #4b5456;
          box-shadow: none;
          color: white;
        }
        .contact-form textarea {
          resize: none;
        }
        .btn.submit-btn {
          background: #191f21;
          color: #fff;
          text-transform: uppercase;
          font-weight: 700;
          border-radius: 0;
          padding: 12px 50px 10px;
          margin-top: 20px;
          transition: 0.3s;
        }
        .submit-btn:hover {
          cursor: pointer;
          background: #007bff;
        }
        .contact-form {
          margin-top: 60px;
        }
        .contact-form label span {
          color: white;
        }
        .footer-area {
          background: #191f21;
          padding: 60px 0;
        }
        .copyright {
          color: #4b5456;
          text-transform: uppercase;
          font-size: 14px;
        }
        .footer-social-links a {
          display: inline-block;
          width: 45px;
          height: 45px;
          text-align: center;
          line-height: 45px;
          background: #4b5456;
          border-radius: 50%;
          font-size: 25px;
          margin-right: 10px;
        }

        .announcement {
          position: fixed;
          width: 100%;
          z-index: 200;
          top: 56px;
          background-color: #0f7baa;
          color: #fff;
          text-align: center;
          padding: 0.625rem 0.625rem;
        }

        .announcement a {
          font-weight: 700;
        }
        .progress {
          display: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
