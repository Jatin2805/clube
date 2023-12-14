// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Ac = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/aacevents')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }

  return (

   
    <div>
  <meta charSet="UTF-8" />
  <title>Team AAC</title>
  <link rel="stylesheet" href="main.css" />
  <link rel="stylesheet" type="text/css" href="events.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
 
  <div className="pooji">
    <nav>
      <ul>
         {/* <li><a href="/home">Home</a></li> */}
         {/* <li><a href="/spi">Spirals</a></li> */}
         <li><a href="/mainevents"style={{color:"aqua"}} >Home</a></li>
                          {/* <li><a href="/home">Home</a></li> */}
                          <li><a href="/spi" style={{color:"aqua"}}>Spirals</a></li>
                          <li><a href="/ry" style={{color:"aqua"}}>Rythms</a></li>
                          <li><a href="/ac" style={{color:"aqua"}}>AAC</a></li>
                          <li><a href="/ec" style={{color:"aqua"}}>ECell</a></li>
                          <li><a href="/sp"style={{color:"aqua"}}>Spices</a></li>
                          <li><a href="/login" style={{color:"aqua"}}>Login</a></li>  
      </ul>
    </nav>
    {/* <div style={{float: 'right'}} 
      <img src="https://www.linkpicture.com/q/Web_capture_1-8-2023_183815_www.bing.com-removebg-preview_1.png" width={500} height={600} /> */}
    </div><br />
    <meta charSet="UTF-8" />
  <title>Team E-CELL</title>
  <link rel="stylesheet" href="main.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div className="pooji">
    
    <div style={{float: 'right'}}>
      <img src="data:image/png;base64,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" width={800} height={500} style={{borderRadius:100}}/>
    </div><br />
    <div className="content">
      <span className="title">Technical Club</span>
      <h1>TEAM <span>AAC</span></h1>
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
        <h2 className="heading"style={{color:"red"}}>About the Club</h2>
        <br /><br />
        <p style={{color: 'aqua'}}>The Advanced Academic Center (AAC) of GRIET, Hyderabad is an inter-disciplinary research centre. We are committed to excellence in teaching, learning, and research at AAC, and we continue to flourish in this modern age. Focusing mainly on a broad area of research and development, bringing together experts with diverse backgrounds to address aspects of that problem area, along with the continuous advancements in science. 
          <br /><br />
          <br /><br />
        </p>
        <div className="row">
          <div className="column">
            <div className="card">
              <p><i className="fa fa-user" /></p>
              <h3>Vishwakarma Award 2018</h3>
              <p />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-check" /></p>
              <h3>Signing an MOU with NRSC</h3>
              <p />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-smile-o" /></p>
              <h3>Several Hackathons winners</h3>
              <p />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-smile-o" /></p>
              <h3>Several Projects</h3>
              <p />
            </div>
          </div>
        </div>
        <section className="web container" id="education">
          <div>
            <br /><br />
            <br /><br />
            <div style={{float: 'right'}}>
              <img src="https://thumbs.dreamstime.com/b/entrepreneur-chart-keywords-icons-47724388.jpg" width={500} height={400} />
            </div>
            <div>
              <h2 className="heading"style={{color:"red"}}>WHAT DO WE OFFER?</h2>
              <p style={{color: 'lightblue'}}>Students are engaged in designing and executing projects with AAC, we organize  workshops and lectures on specialized engineering software and hardware tools. Offering an unparalleled student experience and a generous financial aid program as well. Along with this we also provide mentorship from real time industrial experts as well as Sponsored / Consultancy R&amp;D projects as well. Students at AAC are encouraged to learn scientific and technical skills ,to explore the various fields present and help with society's needs in the future.
                <br /><br />
                There are 20 startups generated in the college so far. We are the only Student Body in GRIET whose main motive is to create more entrepreneurs and help them grow in their startup endeavors.
                We have also conducted several events promoting entrepreneurship thereby creating more awareness about the same.
                <br />
                <br /><br />
                <br /><br />
              </p>
            </div>
          </div>
          <section className="web container" id="accomplishments">
            <h2 className="heading"style={{color:"red"}}>The Team</h2>
            <br /><br />
            <p style={{color:"lightblue"}}>“The technology you use impresses no one. The experience you create with it is everything.”</p> 
            <div style={{float: 'left'}}>
              <img src="data:image/jpeg;base64,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" width={400} height={300} />
            </div>
            <br/>
            <br/>
            <p style={{color: 'lightblue'}}> DR Kiran Kumar 
              <br />
            Professor and AAC Co-ordinator 
            </p>
            <p style={{color: 'lightblue'}}>
              <br /><br />
              <br/>
              “Advanced Academic Center (AAC) aspires to be a pre-eminent and inclusive student-focused research unit, preparing young minds in design thinking and innovation for societal problems.”
              <br /><br />
              <br /><br /></p>
            <br /><br />
            <section className="web container" id="activities">
              <h2 className="heading"style={{color:"red"}}>Events</h2>
              <link href="events.css" rel="stylesheet" type="text/css" />
              <p style={{color: 'white'}}>Some of the best events to look forward to!!</p>
              
                <div >
                  {/* <link rel="stylesheet" href="style.css" /> */}
                  {/* <link rel="stylesheet" href="events.css" /> */}
                    <h2 style={{color:'aqua'}} >AAC Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile" style={{width:330}}> 
                        <div className='card_img'>
                        <img src="  data:image/jpeg;base64,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" alt="" style={{margin:0}}/>
                          </div>
                                <div class="text" >
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
                    <h1>AAC EXPO 2022</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      This involves promoting solutions to societal concerns through the Expo Live programme and inspiring visitors with concepts for how to address problems and contribute to the advancement of humanity. 
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
                    <h1>AAC LAB INAUGURATION</h1>
                    <p className="animate-text">
                      AAC stands for learning through exploration, experimentation and experience. To create a novel environment to foster scientific temper, innovation and creativity amongst students , the committee set up a Lab in room number 3614 in the Block 3 for conducting conclaves and to carry out research level projects. 
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
                    <h1>DATA ANALYTICS CONCLAVE</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      AAC GRIET had organized a conclave at the GRIET campus on 17th August 2019, the theme of the session being “DATA SCIENCE". The conclave proved to be an impactful platform where an array of inspirational group of people were brought together, led by a data scientist with cutting edge entrepreneurial skills
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
                    <h1>XYZ</h1>
                    <p className="animate-text">
                      XYZ
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
                    <h1>XYZ</h1>
                    <p className="animate-text"> XYZ</p>
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
                    <h1>OTHER</h1>
                    <p className="animate-text"> XYZ</p>
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
              <a className="link-1" href="mainevents" style={{padding:15,color:"white", textDecoration:"none"}} >  Home </a>
              <a href="Pr" style={{padding:15,color:"white",  textDecoration:"none"}} >  Privacy Policy</a>
              <a href="Di" style={{padding:15,color:"white", textDecoration:"none"}} >  Disclaimer </a>
              <a href="Abu" style={{padding:15,color:"white", textDecoration:"none"}}>  About </a>
              <a href="https://www.instagram.com/aac_grietofficial"style={{padding:15,color:"white", textDecoration:"none"}} >  Contact Us </a>
            </p>
            <p style={{padding:20,marginLeft:400,color:"red"}}>©2023 Clubee Website. All rights reserved.</p>
            </div>
            </footer>
          </section></section></section></div></div>
          </div>

  )
}

export default Ac