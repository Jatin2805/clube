// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Spi = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);


  const fetchEvents = () => {

    axios.get('http://localhost:3001/spiralsevents')
      .then((res) => {
        console.log(res.data.data)
        setEvents(res.data.data)

      })
      .catch(err => console.log(err));

  }

  return (
    <>
      <div>
        <link rel="stylesheet" href="main.css" />
        <link rel="stylesheet" href="events.css" />
        {/* <link rel="stylesheet" href="style.css"/> */}

        <div class="pooji">
          <nav>
            <ul>
              <li><a href="/mainevents" style={{ padding: 50, paddingTop: 200, color: "aqua" }}>Home</a></li>
              {/* <li><a href="/home">Home</a></li> */}
              <li><a href="/spi" style={{ padding: 25, color: "aqua" }}>Spirals</a></li>
              <li><a href="/ry" style={{ padding: 25, color: "aqua" }}>Rythms</a></li>
              <li><a href="/ac" style={{ padding: 25, color: "aqua" }}>AAC</a></li>
              <li><a href="/ec" style={{ padding: 25, color: "aqua" }}>ECell</a></li>
              <li><a href="/sp" style={{ padding: 25, color: "aqua" }}>Spices</a></li>
              <li><a href="/login" style={{ padding: 25, color: "aqua" }}>Login</a></li>
            </ul>

          </nav>
        </div>

        <div >
          {/* <div >
                    <h2 style={{color:'white'}}>Spirals Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile"> 
                                <div class="text">
                                    <p class="animate-text">{event.eventname}</p>
                                    <p class="animate-text"> {event.eventdesc}</p>
                                    <p class="animate-text">{event.eventdate}</p>
                                    <p class="animate-text">{event.eventtype}</p>
                                </div>
                        </div>        
                            ))} 
                </div> */}
        </div>
      </div>
      <div>
        <meta charSet="UTF-8" />
        <title>Team Spirals</title>
        {/* <link rel="stylesheet" href="spiral.css" /> */}
        {/* <link rel="stylesheet" type="text/css" href="homes.css" /> */}
        <div className="pooji">
          <nav>
            <ul>

            </ul>
          </nav>
          <div style={{ float: 'right' }}>
            <img src="https://th.bing.com/th/id/R.71c5fb80df9c079ea12e1f16518b77bc?rik=hmbhTKqC4mJijA&riu=http%3a%2f%2fwww.mun.griet.ac.in%2flogo%2fspiarls.png&ehk=M3qGB3nKOyOMPb7o9cpMXFSj6TK9AaD1rdwYTmI1a9s%3d&risl=&pid=ImgRaw&r=0" width={600} height={600} />
          </div><br />
          <div className="content">
            <span className="title">Literary Club</span>
            <h1>TEAM <span>SPIRALS</span></h1>
            <p>
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
              <br /><br />
            </p>
            {/* <section className="web container" id="about"> */}
            <h2 className="heading" style={{ color: 'red' }}>About the Club</h2>
            <br /><br />
            <p style={{ color: 'pink' }}>The society aims at enhancing the much-required leadership qualities as well as interpersonal communication skills by encouraging students to participate in and organize various inter and intra college literary events.
              <br /><br />
              <br /><br />
            </p>
            <section className="web container" id="education">
              <div>
                <div style={{ float: 'right' }}>
                  <img src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rvcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80" width={500} height={400} />
                </div>
                <div>
                  <h2 className="heading" style={{ color: "red" }}>Our Story</h2>
                  <p style={{ color: 'lightblue' }}>Team SPIRALS has been successfully conducting  many such events since it's inception in the year 2014 and has received immense response and love. The club was named and initiated by Dr. J N Murthy.
                    <br /><br />
                    The club provides an ideal platform for all the book-lovers, story-tellers, poets, writers and bloggers to interact and share their views. The logo of team SPIRALS shines in the glitter of 4 different color, each with a significant value. The glorious green color symbolizes united strength of the team The radiant red represents endeavor to seek and spread knowledge. The blissfull blue indicates stability of the team The vivacious voilet depicts uniqueness of the work. These colors inherently manifest the skills of listening, speaking, reading and writing.<br />
                    <br /><br />
                    <br /><br />
                  </p>
                </div>
              </div>
              <section className="web container" id="accomplishments">
                <h2 className="heading">The Team</h2>
                <br /><br />
                <p style={{ color: "pink" }}>“Leadership is not about titles, positions , or work hours. It’s about relationships.”</p>
                <div style={{ float: 'left' }}>
                  <img src="data:image/jpeg;base64,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" width={400} height={300} />
                </div>
                <p style={{ color: 'lightblue' }}> Ms. Stgy Sandhya Ma’am
                  <br />
                  Professor and Spirals Coordinator
                </p>
                <p style={{ color: 'lightblue' }}>
                  <br /><br />
                  “As much as the society enjoys the limelight, it has also hosted multiple Intra college literary events to hunt for fresh talents and guided those with a passion. Those with a flair for literature have always found a family in the Society.”
                  <br /><br />
                  <br /><br /></p>
                <br /><br />
                <section className="web container" id="activities">
                  <h2 className="heading" style={{ color: "red" }}>Events</h2>
                  <link href="events.css" rel="stylesheet" type="text/css" />
                  <p style={{ color: 'white' }}>Some of the best events to look forward to are</p>

                  <div >
                    <h2 style={{ color: 'aqua' }}>Spirals Events</h2>

                    {events && events.map && events.map((event, idx) => (
                      <div class="tile" style={{ width: 361 }}>
                        <div className='card_img'>
                          <img src="https://designcuts.b-cdn.net/wp-content/uploads/2022/11/Best-Magazine-Mockups-for-Editorial-Print-Cover.png" alt="" style={{ margin: 0 }} />
                        </div>
                        <div class="text">
                          <p class="animate-text">{event.eventname}</p>
                          <p class="animate-text"> {event.eventdesc}</p>
                          <p class="animate-text">{event.eventdate}</p>
                          <p class="animate-text">{event.eventtype}</p>
                        </div>
                      </div>
                    ))}
                  </div>



                  {/* <div className="wrap">
                <div className="tile">  */}
                  {/* <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png" /> */}
                  {/* <div className="text">
                    <h1>Spirals Carnival</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      An annual event that marks the beginning of the academic year. The day is packed with a hand-picked selection of literary events carefully curated by the seniors to open new avenues for the freshers
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://garden.spoonflower.com/c/12742058/p/f/l/2GhbfK8w0-DtVsY0WdJbd9XuNeWBYk5-ob62wGjvX95LVwsrWtoc7Tw/Solid%20pastel%20yellow.jpg" />
                  <div className="text">
                    <h1>MUN</h1>
                    <p className="animate-text">
                      Model United Nations, also known as model UN or MUN, is an educational simulation in which students learn about diplomacy, international relations, and the United Nations. 
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://plainbackground.com/plain1024/779ecb.png" />
                  <div className="text">
                    <h1>LitRapture</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      An annual inter collegiate literary extravaganza designed to bring together young talents from around the state. It encourages healthy competitions as a means to extend friendships and share the passion for literature
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap">
                <div className="tile"> 
                  <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-green-color-solid-background-1920x1080.png" />
                  <div className="text">
                    <h1>Minerva</h1>
                    <p className="animate-text">
                      Minerva is a virtual literary festival designed to kindle the spirits of literary from the comfort of one’s home.
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png" />
                  <div className="text">
                    <h1>Others</h1>
                    <p className="animate-text"> Apart from this, the Society organizes regular workshops for debating, creative writing, spoken word poetry, elocution and improve.</p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://cdn.crispedge.com/ff964f.png" />
                  <div className="text">
                    <h1>Others</h1>
                    <p className="animate-text"> Apart from this, the Society organizes regular workshops for debating, creative writing, spoken word poetry, elocution and improve.</p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
                  <link rel="stylesheet" href="footer.css" />
                  <footer className="footer-distributed">
                    <div className="footer-right" style={{ float: "right", marginTop: 6, maxWidth: 300, }}>

                      <p>
                        {/* <img src={{img}}/> */}
                        <a href="https://www.instagram.com/aac_grietofficial" style={{ display: "inline-block", width: 35, height: 35, backgroundColor: "white", borderRadius: 2, fontSize: 20, color: "#ffffff", textAlign: "center", lineHeight: 35, transition: "all .25s" }}><i className="fa fa-facebook" /></a>
                        <a href="https://www.youtube.com/channel/UCqpWtDtDLxBLy8yJZO_-eBw" style={{ display: "inline-block", width: 35, height: 35, backgroundColor: "white", borderRadius: 2, fontSize: 20, color: "#ffffff", textAlign: "center", lineHeight: 35, marginLeft: 35, transition: "all .25s" }}><i className="fa fa-twitter" /></a>
                        <a href="https://github.com/aacgriet" style={{ display: "inline-block", width: 35, height: 35, backgroundColor: "white", borderRadius: 2, fontSize: 20, color: "#ffffff", textAlign: "center", lineHeight: 35, marginLeft: 35, transition: "all .25s" }}><i className="fa fa-linkedin" /></a>
                        <a href="#" />
                      </p>
                    </div>
                    <div className="footer-left">
                      <p className="footer-links">
                        {/* <link rel="stylesheet" href="footer.css" /> */}
                        <a className="link-1" href="mainevents" style={{ padding: 15, color: "lightblue", textDecoration: "none" }} >  Home </a>
                        <a href="Pr" style={{ padding: 15, color: "lightblue", textDecoration: "none" }} >  Privacy Policy</a>
                        <a href="Di" style={{ padding: 15, color: "lightblue", textDecoration: "none" }} >  Disclaimer </a>
                        <a href="Abu" style={{ padding: 15, color: "lightblue", textDecoration: "none" }}>  About </a>
                        <a href="https://www.instagram.com/aac_grietofficial" style={{ padding: 15, color: "lightblue", textDecoration: "none" }} >  Contact Us </a>
                      </p>
                      <p style={{ padding: 20, marginLeft: 400 }}>©2023 Clubee Website. All rights reserved.</p>
                    </div>
                  </footer>
                </section></section></section></div></div></div>
    </>
  )
}

export default Spi