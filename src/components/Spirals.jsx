// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Spirals = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/spiralsevents')
        .then((res) => {
            console.log(res.data.data)
            setEvents(res.data.data)                  
            
        })
        .catch(err => console.log(err));

    }

  return (

    <div style={{backgroundColor:""}}>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="events.css"/>
    <link rel="stylesheet" href="now.css"/>
    {/* <link rel="stylesheet" href="latest.css"/> */}
    {/* <link rel='stylesheet' href="main.css"/> */}
    
    <div class="pooji">
            <nav>
            <ul>
            <li><a href="/home" style={{paddingTop:20,color:"aqua"}}>Home</a></li>
                          {/* <li><a href="/home">Home</a></li> */}
                          <li><a href="/spirals" style={{color:"aqua"}}>Spirals</a></li>
                          <li><a href="/rythms" style={{color:"aqua"}}>Rythms</a></li>
                          <li><a href="/aac"style={{color:"aqua"}}>AAC</a></li>
                          <li><a href="/ecell"style={{color:"aqua"}}>ECell</a></li>
                          <li><a href="/spices"style={{color:"aqua"}}>Spices</a></li>
                          <li><a href="/eventsummary"style={{color:"aqua"}}>Events</a></li>
                          <li><a href="/event"style={{color:"aqua"}}>New Event</a></li>
            </ul>
               
            </nav>
        </div>
        
            <div >
                <div >
                    <h2 style={{color:'white'}}>Spirals Events</h2>
                    {events && events.map && events.map((event, idx) => (
                       <div class="tile" style={{width:420}}>
                        <div className='card_img'>
                        <img src="https://designcuts.b-cdn.net/wp-content/uploads/2022/11/Best-Magazine-Mockups-for-Editorial-Print-Cover.png" alt="" style={{margin:0}}/>
                        {/* <img src="" alt="" style={{margin:0}}/> */}
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
            </div>
    </div>   
  )
}

export default Spirals