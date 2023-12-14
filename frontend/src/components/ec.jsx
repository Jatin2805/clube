//  import React from 'react';
// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Ec = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/ecell')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }

  return (
<>
    <div>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="events.css"/>
    
    
    <div class="pooji">
            <nav>
            <ul>
            {/* <li><a href="/mainevents">Home</a></li> */}
            <li><a href="/mainevents"style={{color:"aqua"}}>Home</a></li>
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
                    <h2 style={{color:'white'}}>ECell Events</h2>

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
  <title>Team E-CELL</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" type="text/css" href="main.css" />
  <div className="pooji">
    
    <div style={{float: 'right'}}>
      <img src="data:image/png;base64,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" width={600} height={600} />
    </div><br />
    <div className="content">
      <span className="title">Entrepreneurship Club</span>
      <h1>TEAM <span>E-CELL</span></h1>
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
        <p style={{color: 'lightblue'}}>Ideate. Collaborate. Create. Everything an entrepreneur needs in one place. E-Cell makes your entrepreneurial journey better than you can imagine. 
          <br /><br />
          <br /><br />
        </p>
        <div className="row">
          <div className="column">
            <div className="card">
              <p><i className="fa fa-user" /></p>
              <h3>29+</h3>
              <p>Start-Ups have inucubated in our college</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-check" /></p>
              <h3>45+</h3>
              <p>Students and Faculty combined are associated with E-Cell </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-smile-o" /></p>
              <h3>4+</h3>
              <p>Years of experience in running Entrepreneurship Development Cell</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-coffee" /></p>
              <h3>10+</h3>
              <p>Awards have been awarded to us for various activites.</p>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n     .* {\n       box-sizing: border-box;\n     }\n     \n     .column {\n       float: left;\n       width: 25%;\n       padding: 0 5px;\n     }\n     \n     .row {margin: 0 -5px;}\n     \n     .row:after {\n       content: \"\";\n       display: table;\n       clear: both;\n     }\n     \n     @media screen and (max-width: 600px) {\n       .column {\n         width: 100%;\n         display: block;\n         margin-bottom: 10px;\n       }\n     }\n     \n     .card {\n       box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n       padding: 16px;\n       text-align: center;\n       background-color: #444;\n       color: white;\n     }\n     \n     .fa {font-size:50px;}\n     " }} />
        <section className="web container" id="education">
          <div>
            <br /><br />
            <br /><br />
            <div style={{float: 'right'}}>
              <img src="https://thumbs.dreamstime.com/b/entrepreneur-chart-keywords-icons-47724388.jpg" width={500} height={400} />
            </div>
            <div>
              <h2 className="heading" style={{color:'red'}}>Our Story</h2>
              <p style={{color: 'lightblue'}}>E-Cell GRIET was founded in the year 2019 with the vision to develop a conducive environment for students to explore new avenues through innovation and imagination and thereby develop products and services relevant to society.
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
            <p style={{color:"lightblue"}}>“Entrepreneurship is living a few years of your life like most people won't so you can spend the rest of your life like most people cant.”</p> 
            <div style={{float: 'left'}}>
              <img src="https://static.vecteezy.com/system/resources/previews/000/440/213/original/question-mark-vector-icon.jpg" width={400} height={300} />
            </div>
            <p style={{color: 'aqua'}}> Mrs. Indira Ma’am
              <br />
              Professor and E-Cell Coordinator
            </p>
            <p style={{color: 'aqua'}}>
              <br /><br />
              “E-Cell was first started by our Dean EDC, Mrs. Indira who is continously working in providing entrepreneurs with facilty in college itself so that they grow in their venture from a young age and gain experience in their field.”
              <br /><br />
              <br /><br /></p>
            <br /><br />
            <section className="web container" id="activities">
              <h2 className="heading" style={{color:"red"}}>Events</h2>
              <link href="events.css" rel="stylesheet" type="text/css" />
              <p style={{color: 'white'}}>Some of the best events to look forward to!!</p>

              <div >
                    <h2 style={{color:'aqua'}}>ECell Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile" > 
                        <div className='card_img'>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABGlBMVEX///8LCDMAYLQAiIhvb2////0AAABnZ2eurq4AiYeqKGH2+fkAYLb38vXo1N2tNmmrP23/+f05drezzt8AAC+3V34ATK4AACoAAB4AYbIAABrw8PAAXbYAABcAACcAgH0AT6kAAAkAACPw/f2lpaUAeHcAVrDe3t58fHzh7/DNzc2qqbLn5+eFhYXp8PVTi8HVobeZmZnM4eCjzMx3tbRNoqC83t09lpaKwcBgo6LH2eSCpMeQrs90nMUcX6i00tGxw9lubHa7xcRKfrRdW1+strs9OkTa6fgATp+SjplAP1JZVWEeHzuhnKhYhsKAgIkzL0Btmc00b7gnIDQAADhDO1YVEC7BvcbAgZy2aYrZuMbVkq6eAEw5OTlktfKiAAAHf0lEQVR4nO2aDVPaShSGE3QRSEBN+CZABNwYjBHUlhoDgmhFqdViW5X2/v+/cfcjoYDI5Y7ZMHMv7zgyQcZ99uw5Z89ZluNWWmmllVZa6b8r8OaDvypjCUsZWj86PvmwVtylWlv78On4SMd/AL7YQ/940lgLF4tr4yoWw4jjyA+DgPPTNTTrMPmZVBhhNU50pqNznHWmF93BJxHCzq9igyEA4KyumrSPd6dnP6UjdgzlZkARxZZenAsQLp6zGR6twfUABpBg+2QeQ3iteMwmSQBOVhURIyiSPtcI2Aps4tKGokgQMknz9J98gQECAHYyE6ASVet491U8jqlR9h4AyU6KDoGiyhfnxXkIp94Pj4LRsQHCgJJ+EzwKjxDCaPEneYrexyQikGGGGkGEX41OeueiMTYi1oQRBAaeoMOASD0Bdo3LNJ+/GiF8OPmEdHLacEyCssJH7wE4MHD9AHbNzwWeIuwWT8/HdoOyfn7SwGmzwSIcmtAlkIzPKZ4g7DY+Yr8no6GVcjZo/VNjl0V2lnuuEQZmB9mA55EvfHT25OkZCwyWAQijZVCvO2lM8D2oMd2PX8lWHATYviME8WB1zsc9r5kAV+45ORE2q0FCkJ5H4LmQn505vqi0rNs4Rkjv+0mAGEyak8SA2r4hy5C/95cA74+UQOxqWbIMt373C+bATcxWH2cEfq4rMlGbeoKoSNU8Jkj1/SbgDhUnIOV1YoSSz0YAnNkLUG+UtOBSjAC4tpOWoH1TIuFw5TtCE9JyUbX6OCfEvxg+xwPgWnQZMlJ1h6xDx18AnJdUkRDAszqJh+ydoGkGVo7Ihw5WVqkRVPmyQJPCwcY60R7RAVadKQJNjahxsD6T7SGrrb/WxgVLhKaTFVTtkXpjdWMWA0MC4auzRWW0OM0KoZkIGkMEydkgpGqaBsRsBIYrYQ5oblS6FKFwX5mJEGKIQNNCQDm8IBt16aY+E4HhvjGN8JYVGPqCWyy4C/GGL1wyzFCjemVQJZkp3r+YhXDAjgBFBM0LYkD7ydO8cLnxWkxLCKdgEdWjB5odcxehV2JbxDRdBCdBBxk63hty9wjFpr2k3y0Ekpx0OqlvV/nl1AucmRyFBO0mb3M+EwDg5Ca3cOPzfncRYHS4gcomUr4W/F8J1MnQ084BLR7jPw2/EcqK6FTxMl2Jku9NLXcI6Xmj8jVEHJIP+u2QnAXpQqC29tGpnPChg58IQtcpH5VvFeKQfL7u99eBbdU963KS9HeUIn1lAO5uicxwRYKCj+/4mqaB287gQw75kpiB53fufPou0mWQ3DM/yQpSBD7d8TcuLPfwFdr1lMvw+PTGCSMbNvfYT1TNzy7D92D/6fUntcqPYMf7ShJwpuSev0rVn447oARRerjT/sxZMKo3t4VSii/1WRjCclJkBtpXWX6keLZw27/f33/a37/p9B+y6RQ9Gu2wCFrbLV0On8YQMEW8lM7ms+lSKj4yD4tzQYA3bXwIK/ac9DRfDHZ0AED5K3ZJVaZnwP+g+K3nCNgMyCUDsFlNf18SAgmLVrKplRZYBhQrbBAA0O3q40IEfIlRdYfirLOzGAK7bgOA/Z3CIghMy+zc/QIQ8Qe2e5hxn87OW454PF+4YVrSoP9t3N2m07Mp4oX0l/6+L2V+9eZHMF9KpeJjk0+VskG+E/Kxzcg91Tu3X/JBoh00+b27J3/LGLLYgpAzNCwjJ5AiAWWPJd614yjCkgGYSbDasmyVlzfF6+ZAUSFUBmf6khjaATS8CEUloLbkJVzrBJytiuqhfK3r8qEqJuVFzRB9fomhl9jLy/Z7CdpQaVnOk5xRoDX382MIiQhBiGy9E4ETMkrGovdU8LWintJd8LKQi7D5bgQbQnv0AFBDoyxoBu8QJGVQHk0bVU0QNqc8Mjr89WsYdR5itV+1mLcIZg8NORJub5XWJEJsK4KUiJGc8Rz5HYls1jxEAMBSlaY8LknpTdzgi25FXobDl83ENiKrRRJDY7j1e+ghAo4HmByXKKoTCGjUbQyCh92ObNEgIG95hqCK0pQGJnpfJ0Kmf4ngKXPb22igYSRRw9qMRD1cCFmFbSBMCv2hjG9AhxtlsJ2gCETDyCbR1mbMQwRTxREwLYRQJPc6R1aIRqMY4SVmxLC8WwiUmQKKNL72wDRNHBDkFj6OVuoL29QXflNfeH4WvMwLTajIY49tNWmPghK9AjRSYjhM0DRcQwEZq3kaEWiI657YcrdolJlaSkafzEyxhJsXkBmeNyN/8sJvGh6b77UCNoNkUhxOl6BqT18tjA5rtRnZkYuRN6PDIfc+AU7oJsWMjTcG3e5lks1pghmbt+clhdBMopKl1WopUEmeLadwA20pgOo2qIrdRYqmyvh3iN40NYBUr2dNu21x//orgAOfOhvj8mBvD71ql3toxAru6rWNgwOUHKp/rXvK8Ob89ww0JB4XcxAEYcPIhfCdCr+ssI66S/zFvVZ3EXIboQqxhl8I9RBXuZxA4JD9Q9gtD/xqskN7IWwFg1xnqZKI2FsnDzlvfeFNVSu5UMWXkd5WqM7wOs9KK630v9TfrAjvzxzsFzMAAAAASUVORK5CYII=" alt="user-image" style={{margin:0}}/>
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
                    <h1>E-TALKS</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      The event aimed 
                      at introducing successful entrepreneurs and their journeys to the 
                      students of GRIET. They share their knowledge 
                      and wisdom and motivate the students to be brave and embark on 
                      their journey to explore their career paths. 
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
                    <h1>MARKETING GENIX</h1>
                    <p className="animate-text">
                      Sell your P.E.N' was the latest event conducted by E-cell Student Body of 
                      GRIET. The event was envisioned with the main focus being to increase the student's knowledge 
                      on Brand and Product marketing while also giving the students a basic view of how pitching 
                      works. 
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
                    <h1>IPL AUCTION</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      IPL Auction is one of the Flagship Events conducted by E-Cell every year. It has been inspired by the original IPL auction. The main aim of this event is to instill entrepreneurial qualities like decision making, managing time, managing money, and many other qualities among college students!
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
                    <h1>IDEA COMPETITION</h1>
                    <p className="animate-text">
                      The Idea Competition is designed to facilitate the development of great ideas and help those ideas find fulfillment. Ideas will be judged publically and by a jury of professionals.
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
                    <h1>PANEL DISCUSSION</h1>
                    <p className="animate-text"> Entrepreneurs from various fields come together to share their views on various topics related to Entrepreneurship</p>
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
                    <h1>E-SUMMIT</h1>
                    <p className="animate-text"> FLAGSHIP EVENT OF E-CELL</p>
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
              <a href="https://www.instagram.com/aac_grietofficial"style={{padding:15,color:"black"}} >  Contact Us </a>
            </p>
            <p style={{padding:20,marginLeft:400,color:"white"}}>©2023 Clubee Website. All rights reserved.</p>
              </div>
            </footer>
          </section></section></section></div></div></div>
</>
  )
}



export default Ec