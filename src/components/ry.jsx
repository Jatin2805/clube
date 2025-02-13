// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Ry = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/rythmevents')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }

  return (
<>
    <div>
    <link rel="stylesheet" href="main.css"/>
    <link rel="stylesheet" href="events.css"/>
    {/* <link rel="stylesheet" href="style.css"/> */}
    
    <div class="pooji">
            <nav>
            <ul>
            {/* <li><a href="/home">Home</a></li> */}
            <li><a href="/mainevents" style={{color:"aqua"}}>Home</a></li>
                          {/* <li><a href="/home">Home</a></li> */}
                          <li><a href="/spi"style={{color:"aqua"}}>Spirals</a></li>
                          <li><a href="/ry"style={{color:"aqua"}}>Rythms</a></li>
                          <li><a href="/ac"style={{color:"aqua"}}>AAC</a></li>
                          <li><a href="/ec"style={{color:"aqua"}}>ECell</a></li>
                          <li><a href="/sp"style={{color:"aqua"}}>Spices</a></li>
                          <li><a href="/login"style={{color:"aqua"}}>Login</a></li>
            </ul>
               
            </nav>
        </div>
        
            <div >
                {/* <div >
                    <h2 style={{color:'white'}}>Rythms events</h2>

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
  <title>Team Rhythms</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link rel="stylesheet" href="rythms.css" />
  <div className="pooji">
    <nav>
                
    </nav>
    <div style={{float: 'right'} }>
      <img src="https://yt3.googleusercontent.com/cuVWB98M0I5YRYAkUGX3hXDrqcjfwbgs_Y7O0FXrOiwoF0jL8S_4tzUAdnoC6iiL7GK83mkKHg=s900-c-k-c0x00ffffff-no-rj" width={600} height={600} />
    </div><br />
    <div className="content">
      <span className="title">CULTURAL Club</span>
      <h1>TEAM <span>RHYTHMS</span></h1>
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
        <h2 className="heading" style={{color:"red"}}>About the Club</h2>
        <br /><br />
        <p style={{color: 'lightblue'}}>GRIET has very active and enthusiastic cultural body named as “RHYTHMS “managed by students themselves under the guidance of faculty members.
          <br /><br />
          <br /><br />
        </p><section className="web container" id="education">
          <div>
            <br /><br />
            <br /><br />
            <div style={{float: 'right'}}>
              <img src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?cs=srgb&dl=pexels-annam-w-1047442.jpg&fm=jpg" width={500} height={400} />
            </div>
            <div>
              <h2 className="heading" style={{color:"red"}}>Our Story</h2>
              <p style={{color: 'lightblue'}}>Since the genesis of Rhythms, new talent has been blooming in our college. Rhythms is an opportunity for students to explore their talents and come up with new objectives. It is amazing to see how Rhythms organizes events with so much passion and perfection. Since its inception, it has been steadily escalating and hope we can reach greater heights in the field of culturals.
                <br /><br />
                It is amazing to see how Rhythms organizes events with so much passion and perfection. Since its inception, it has been steadily escalating and hope we can reach greater heights in the field of culturals.
                <br />
                <br /><br />
                <br /><br />
              </p>
            </div>
          </div>
          <section className="web container" id="accomplishments">
            <h2 className="heading" style={{color:"red"}}>The Team</h2>
            <br /><br />
            <p style={{color:"lightblue"}}>“The acquiring of culture is the development of an avid hunger for knowledge and beauty.”</p> 
            <div style={{float: 'left'}}>
              <img src="https://i.ytimg.com/vi/lFRShqvehuM/maxresdefault.jpg" width={400} height={300} />
            </div>
            <p style={{color: 'aqua'}}> V Usha Rani Ma'am
              <br />
              Asst.Prof, EEE Dept and Rhythms Faculty Coordinator
            </p>
            <p style={{color: 'aqua'}}>
              <br /><br />
              ““Art speaks the soul of its culture”, GRIET equally educate its students with the importance of arts and culture in one’s life with association of RHYTHMS club.”
              <br /><br />
              <br /><br /></p>
            <br /><br />
            <section className="web container" id="activities">
              <h2 className="heading">Events</h2>
              <link href="events.css" rel="stylesheet" type="text/css" />
              <p style={{color: 'white'}}>Some of the best events to look forward to!!</p>
               <div >
                    <h2 style={{color:'red'}}>Rythms events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile" style={{width:330}}> 
                        <div className='card_img'>
                        <img src="data:image/jpeg;base64,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" alt="" style={{margin:0}}/>
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
                <div className="tile"> 
                  <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png" />
                  <div className="text">
                    <h1>PULSE</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      YAYY!!
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
                    <h1>SHLOKA COMPETITION</h1>
                    <p className="animate-text">
                      SHLOKA COMPETITION was held on 7th March for teachers and 
                      staff members which was mainly based on Bhagavad Gita and 
                      Srimad Bhagavatam. Faculty and Staff members participated
                      with enthusiasm and made that day very special.
                      All the lecturers had a memorable day, participating in the 
                      competition.
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
                    <h1>ANNUAL DAY</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      GRIET has celebrated its Annual day on 12th of March 2022.The 
                      exceptional participation by the students and respected faculty members, 
                      made this event a Huge success. Team Rhythmsmesmerized the stage 
                      with classical dance, followed by enriching band performance which
                      enthralled everyone. 
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
                    <h1>CANTEEN EVENT</h1>
                    <p className="animate-text">
                      The Canteen event is most exciting and exhilarating event in
                      GRIET. The dance performances by team Invincibles was worth a
                      while to watch. Musicianship by band Retrieve was extraordinary.
                      Not to mention, the Theatre team gave the audience a delight to
                      the eyes with their catchy expressions and amazing acting.
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
                    <h1>THE 70MM DISCUSSION</h1>
                    <p className="animate-text"> The 70 MM event” is an event organized to showcase the film making
                      skills of the students of GRIET. This event has helped students bring out 
                      their firm autography skills and at the end of the day, The event turned 
                      out to be a blockbuster.</p>
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
                    <h1>SPECTRA 2022</h1>
                    <p className="animate-text"> “SPECTRA 2022” is a colorful and memorable cultural fest that was 
                      organized in GRIET.</p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
           <footer className="footer-distributed">
              <div className="footer-right" style={{float: "right",  marginTop:6,maxWidth:300,}}>
                
              <p>
             {/* <img src={{img}}/> */}
            <a  href="https://www.instagram.com/aac_grietofficial"  style={{  display: "inline-block",  width: 35, height: 35,backgroundColor:"white",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,transition:"all .25s"}}><i className="fa fa-facebook" /></a>
            <a href="https://www.youtube.com/channel/UCqpWtDtDLxBLy8yJZO_-eBw" style={{  display: "inline-block",  width: 35, height: 35,backgroundColor:"white",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,marginLeft:35,transition:"all .25s"}}><i className="fa fa-twitter" /></a>
            <a href="https://github.com/aacgriet" style={{  display: "inline-block",  width: 35, height: 35,backgroundColor:"white",borderRadius:2,fontSize:20,color:"#ffffff" ,textAlign:"center",lineHeight:35,marginLeft:35,transition:"all .25s"}}><i className="fa fa-linkedin" /></a>
            <a href="#" />
            </p>
          </div>
          <div className="footer-left">
            <p className="footer-links">
              {/* <link rel="stylesheet" href="footer.css" /> */}
              <a className="link-1" href="mainevents" style={{padding:15,color:"lightblue"}} >  Home </a>
              <a href="Pr" style={{padding:15,color:"lightblue"}} >  Privacy Policy</a>
              <a href="Di" style={{padding:15,color:"lightblue"}} >  Disclaimer </a>
              <a href="Abu" style={{padding:15,color:"lightblue"}}>  About </a>
              <a href="https://www.instagram.com/aac_grietofficial"style={{padding:15,color:"lightblue"}} >  Contact Us </a>
            </p>
            <p style={{padding:20,marginLeft:400}}>©2023 Clubee Website. All rights reserved.</p>
              </div>
            </footer>
          </section></section></section></div></div></div>
</>
  )
}

export default Ry