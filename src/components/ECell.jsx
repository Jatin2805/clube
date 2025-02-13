// import React from 'react';
// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ECell = () => {

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
              
                <li><a href="/spirals"style={{color:"aqua"}}>Spirals</a></li>
                <li><a href="/eventsummary"style={{color:"aqua"}}>Events</a></li>
                <li><a href="/event"style={{color:"aqua"}}>New Event</a></li>
            </ul>
               
            </nav>
        </div>
        
            <div >
                <div >
                    <h2 style={{color:'white'}}>ECell Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile"style={{width:420}}>
                            <div className='card_img'>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABGlBMVEX///8LCDMAYLQAiIhvb2////0AAABnZ2eurq4AiYeqKGH2+fkAYLb38vXo1N2tNmmrP23/+f05drezzt8AAC+3V34ATK4AACoAAB4AYbIAABrw8PAAXbYAABcAACcAgH0AT6kAAAkAACPw/f2lpaUAeHcAVrDe3t58fHzh7/DNzc2qqbLn5+eFhYXp8PVTi8HVobeZmZnM4eCjzMx3tbRNoqC83t09lpaKwcBgo6LH2eSCpMeQrs90nMUcX6i00tGxw9lubHa7xcRKfrRdW1+strs9OkTa6fgATp+SjplAP1JZVWEeHzuhnKhYhsKAgIkzL0Btmc00b7gnIDQAADhDO1YVEC7BvcbAgZy2aYrZuMbVkq6eAEw5OTlktfKiAAAHf0lEQVR4nO2aDVPaShSGE3QRSEBN+CZABNwYjBHUlhoDgmhFqdViW5X2/v+/cfcjoYDI5Y7ZMHMv7zgyQcZ99uw5Z89ZluNWWmmllVZa6b8r8OaDvypjCUsZWj86PvmwVtylWlv78On4SMd/AL7YQ/940lgLF4tr4yoWw4jjyA+DgPPTNTTrMPmZVBhhNU50pqNznHWmF93BJxHCzq9igyEA4KyumrSPd6dnP6UjdgzlZkARxZZenAsQLp6zGR6twfUABpBg+2QeQ3iteMwmSQBOVhURIyiSPtcI2Aps4tKGokgQMknz9J98gQECAHYyE6ASVet491U8jqlR9h4AyU6KDoGiyhfnxXkIp94Pj4LRsQHCgJJ+EzwKjxDCaPEneYrexyQikGGGGkGEX41OeueiMTYi1oQRBAaeoMOASD0Bdo3LNJ+/GiF8OPmEdHLacEyCssJH7wE4MHD9AHbNzwWeIuwWT8/HdoOyfn7SwGmzwSIcmtAlkIzPKZ4g7DY+Yr8no6GVcjZo/VNjl0V2lnuuEQZmB9mA55EvfHT25OkZCwyWAQijZVCvO2lM8D2oMd2PX8lWHATYviME8WB1zsc9r5kAV+45ORE2q0FCkJ5H4LmQn505vqi0rNs4Rkjv+0mAGEyak8SA2r4hy5C/95cA74+UQOxqWbIMt373C+bATcxWH2cEfq4rMlGbeoKoSNU8Jkj1/SbgDhUnIOV1YoSSz0YAnNkLUG+UtOBSjAC4tpOWoH1TIuFw5TtCE9JyUbX6OCfEvxg+xwPgWnQZMlJ1h6xDx18AnJdUkRDAszqJh+ydoGkGVo7Ihw5WVqkRVPmyQJPCwcY60R7RAVadKQJNjahxsD6T7SGrrb/WxgVLhKaTFVTtkXpjdWMWA0MC4auzRWW0OM0KoZkIGkMEydkgpGqaBsRsBIYrYQ5oblS6FKFwX5mJEGKIQNNCQDm8IBt16aY+E4HhvjGN8JYVGPqCWyy4C/GGL1wyzFCjemVQJZkp3r+YhXDAjgBFBM0LYkD7ydO8cLnxWkxLCKdgEdWjB5odcxehV2JbxDRdBCdBBxk63hty9wjFpr2k3y0Ekpx0OqlvV/nl1AucmRyFBO0mb3M+EwDg5Ca3cOPzfncRYHS4gcomUr4W/F8J1MnQ084BLR7jPw2/EcqK6FTxMl2Jku9NLXcI6Xmj8jVEHJIP+u2QnAXpQqC29tGpnPChg58IQtcpH5VvFeKQfL7u99eBbdU963KS9HeUIn1lAO5uicxwRYKCj+/4mqaB287gQw75kpiB53fufPou0mWQ3DM/yQpSBD7d8TcuLPfwFdr1lMvw+PTGCSMbNvfYT1TNzy7D92D/6fUntcqPYMf7ShJwpuSev0rVn447oARRerjT/sxZMKo3t4VSii/1WRjCclJkBtpXWX6keLZw27/f33/a37/p9B+y6RQ9Gu2wCFrbLV0On8YQMEW8lM7ms+lSKj4yD4tzQYA3bXwIK/ac9DRfDHZ0AED5K3ZJVaZnwP+g+K3nCNgMyCUDsFlNf18SAgmLVrKplRZYBhQrbBAA0O3q40IEfIlRdYfirLOzGAK7bgOA/Z3CIghMy+zc/QIQ8Qe2e5hxn87OW454PF+4YVrSoP9t3N2m07Mp4oX0l/6+L2V+9eZHMF9KpeJjk0+VskG+E/Kxzcg91Tu3X/JBoh00+b27J3/LGLLYgpAzNCwjJ5AiAWWPJd614yjCkgGYSbDasmyVlzfF6+ZAUSFUBmf6khjaATS8CEUloLbkJVzrBJytiuqhfK3r8qEqJuVFzRB9fomhl9jLy/Z7CdpQaVnOk5xRoDX382MIiQhBiGy9E4ETMkrGovdU8LWintJd8LKQi7D5bgQbQnv0AFBDoyxoBu8QJGVQHk0bVU0QNqc8Mjr89WsYdR5itV+1mLcIZg8NORJub5XWJEJsK4KUiJGc8Rz5HYls1jxEAMBSlaY8LknpTdzgi25FXobDl83ENiKrRRJDY7j1e+ghAo4HmByXKKoTCGjUbQyCh92ObNEgIG95hqCK0pQGJnpfJ0Kmf4ngKXPb22igYSRRw9qMRD1cCFmFbSBMCv2hjG9AhxtlsJ2gCETDyCbR1mbMQwRTxREwLYRQJPc6R1aIRqMY4SVmxLC8WwiUmQKKNL72wDRNHBDkFj6OVuoL29QXflNfeH4WvMwLTajIY49tNWmPghK9AjRSYjhM0DRcQwEZq3kaEWiI657YcrdolJlaSkafzEyxhJsXkBmeNyN/8sJvGh6b77UCNoNkUhxOl6BqT18tjA5rtRnZkYuRN6PDIfc+AU7oJsWMjTcG3e5lks1pghmbt+clhdBMopKl1WopUEmeLadwA20pgOo2qIrdRYqmyvh3iN40NYBUr2dNu21x//orgAOfOhvj8mBvD71ql3toxAru6rWNgwOUHKp/rXvK8Ob89ww0JB4XcxAEYcPIhfCdCr+ssI66S/zFvVZ3EXIboQqxhl8I9RBXuZxA4JD9Q9gtD/xqskN7IWwFg1xnqZKI2FsnDzlvfeFNVSu5UMWXkd5WqM7wOs9KK630v9TfrAjvzxzsFzMAAAAASUVORK5CYII=" alt="user-image" style={{margin:0}}/>
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



export default ECell