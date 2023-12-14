// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AAC = () => {

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
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="events.css"/>
    <link rel="stylesheet" href="now.css"/>
    <div class="pooji">
            <nav>
            <ul>
                <li><a href="/home"style={{color:"aqua"}}>Home</a></li>
                <li><a href="/spices"style={{color:"aqua"}}>Spices</a></li>
                <li><a href="/rythms"style={{color:"aqua"}}>Rythms</a></li>
                <li><a href="/aac"style={{color:"aqua"}}>AAC</a></li>
                <li><a href="/ecell"style={{color:"aqua"}}>ECell</a></li>
                {/* <li><a href="/aac">AAC</a></li> */}
                <li><a href="/spirals"style={{color:"aqua"}}>Spirals</a></li>
                <li><a href="/eventsummary"style={{color:"aqua"}}>Events</a></li>
                <li><a href="/event"style={{color:"aqua"}}>New Event</a></li>
            </ul>
               
            </nav>
        </div>
        
            <div >
                <div >
                    <h2 style={{color:'white'}} >AAC Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile"> 
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
            </div>
    </div>   
  )
}

export default AAC