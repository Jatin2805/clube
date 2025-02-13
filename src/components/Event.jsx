import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export const Event = () => {
    const [eventname, setEventname] = useState();
    const [eventdesc, setEventdesc] = useState();
    const [eventdate, setEventdate] = useState(new Date());
    const [email, setEmail] = useState();
    //const [eventtype, setEventtype] = useState();
    const navigate = useNavigate();
    const eventtype = localStorage.getItem('club');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(eventtype)
        axios.post('http://localhost:3001/event', { eventname, eventdesc, eventdate, eventtype })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("Event already registered! Please try with different Event.");
                    navigate('/event');
                }
                else {
                    alert("Event created successfully");
                    navigate('/home');
                }

            })
            .catch(err => console.log(err));
    };


    return (

        <div style={{backgroundColor:""}}>
            <link rel="stylesheet" href="style.css" />
            {/* <link rel="stylesheet" href="events.css"/> */}
            <link rel="stylesheet" href="id.css" />
            
            <div class="pooji" style={{}}>
                <nav>
                    <ul>
                        <li><a href="/home" style={{color:"black"}}>Home</a></li>
                        <li><a href="/spices" style={{color:"black"}}>Spices</a></li>
                        <li><a href="/rythms" style={{color:"black"}}>Rythms</a></li>
                        <li><a href="/ecell"style={{color:"black"}}>ECell</a></li>
                        <li><a href="/aac"style={{color:"black"}}>AAC</a></li>
                        <li><a href="/spirals"style={{color:"black"}}>Spirals</a></li>
                        <li><a href="/eventsummary"style={{color:"black"}}>Events</a></li>
                        <li><a href="/event"style={{color:"black"}}>New Event</a></li>
                        <li><a href="/MainEvents"style={{color:"black"}}>Log Out</a></li>
                    </ul>
                    {/* <div style="float:right">
                <img src="https://www.linkpicture.com/q/Web_capture_1-8-2023_183815_www.bing.com-removebg-preview_1.png"width="500" height="600"/>
            </div> */}
                </nav>
            </div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))",borderRadius:25 }}>
                <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
                    <h2 className='mb-3 text-primary'>New Event</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="eventName" className="form-label">
                                <strong>Event Name</strong>
                            </label>
                            <input
                                type="eventname"
                                placeholder="Event Name"
                                className="form-control"
                                id="eventName"
                                onChange={(event) => setEventname(event.target.value)}
                                required />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="eventDesc" className="form-label">
                                <strong>Event Description</strong>
                            </label>
                            <input
                                type="eventdesc"
                                placeholder="Enter Description"
                                className="form-control"
                                id="eventDesc"
                                onChange={(event) => setEventdesc(event.target.value)}
                                required />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="eventDate" className="form-label">
                                <strong>Event Date</strong>
                            </label>
                            <DatePicker selected={eventdate}
                                    type="eventdate"
                                    id="eventDate"
                                    onChange={(date) => setEventdate(date)}
                                    required
                                    placeholder="Select Date" 
                                    className="form-label"                                
                                    />                            
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Create New Event</button>
                    </form>

                    <p className='container my-2'>Go back to Event Summary page</p>
                    {<Link to='/home' className="btn btn-secondary">Home</Link>}
                </div>
            </div>
        </div>
    );
};


export default Event