// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Sp = () => {

    const [events, setEvents] = useState([]);    

    useEffect(() => {
        fetchEvents();
      }, []);
    
          
    const fetchEvents = () => {

        axios.get( 'http://localhost:3001/spices')
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
    
    <div class="pooji">
            <nav>
            <ul>
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
        
            {/* <div >
                <div >
                    <h2 style={{color:'white'}}>Spices Events</h2>

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
                </div>
            </div> */}
    </div>   
    <div>
  <meta charSet="UTF-8" />
  <title>Team SPICES</title>
  <link rel="stylesheet" href="main.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div className="pooji">
    
    <div style={{float: 'right'}}>
      <img src="" width={600} height={600} />
    </div><br />
    <div className="content">
      <span className="title">Cooking Club</span>
      <h1>TEAM <span>SPICES</span></h1>
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
        <h2 className="heading">About the Club</h2>
        <br /><br />
        <p style={{color: 'aqua'}}>Spices, a concept unique to engineering, gives a rare opportunity of to the students to experiment 
          with their culinary skills. 
          Its just not the competition about the state and the flavour but it tries to bring out the presentation 
          talent of the student.  
          <br /><br />
          <br /><br />
        </p>
        <div className="row">
          <div className="column">
            <div className="card">
              <p><i className="fa fa-user" /></p>
              <h3>100+</h3>
              <p>Participants</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className="fa fa-check" /></p>
              <h3>33+</h3>
              <p>Teams </p>
            </div>
          </div>
          {/* <div className="column">
            <div className="card">
              <p><i className="fa fa-smile-o" /></p>
              <h3>xyz</h3>
              <p>xyz</p>
            </div>
          </div> */}
          {/* <div className="column">
            <div className="card">
              <p><i className="fa fa-coffee" /></p>
              <h3>xyz</h3>
              <p>xyz</p>
            </div>
          </div> */}
        </div>
        <section className="web container" id="education">
          <div>
            <br /><br />
            <br /><br />
            <div style={{float: 'right'}}>
              <img src="" width={500} height={400} />
            </div>
            <div>
              <h2 className="heading" style={{color:"red"}}>Our Story</h2>
              <p style={{color: 'aqua'}}>This competition held annually and prize are awarded to the winners, who are selected by a panel 
                of judges. The judges take into consideration not only the taste, but also the nutritious values of the 
                recipe and the way the students present the dishes.
                <br /><br />
                Nearly 100 participants (including students &amp; faculty) have joined hands together to make this event 
                a huge success. Around 33 teams have showcased the recipe, which have been prepared on spot in 
                a given stipulated time. The participation of students and faculty from various departments is really 
                appreciable.
                <br />
                <br /><br />
                <br /><br />
              </p>
            </div>
          </div>
          <section className="web container" id="accomplishments">
            <h2 className="heading" style={{color:"red"}}>The Team</h2>
            <br /><br />
            <p style={{color:"pink"}}>“A recipe has no soul. You as the cook must bring soul to the recipe.”</p> 
            <div style={{float: 'left'}}>
              <img src="https://static.vecteezy.com/system/resources/previews/000/440/213/original/question-mark-vector-icon.jpg" width={400} height={300} />
            </div>
            <p style={{color: 'orange'}}> Mrs. Bh. 
              Saroja Rani Ma'am
              <br />
              Professor and Spices Coordinator
            </p>
            <p style={{color: 'orange'}}>
              <br /><br />
              “To provide culinary skills among faculty and students and make 
              them energetic force of the society, the Spices coordinator Mrs. Bh. 
              Saroja Rani was entrusted with the task of conducting this program.”
              <br /><br />
              <br /><br /></p>
            <br /><br />
            <section className="web container" id="activities">
              <h2 className="heading" style={{color:"red"}}>Events</h2>
              <link href="events.css" rel="stylesheet" type="text/css" />
              <p style={{color: 'white'}}>Some of the best events to look forward to!!</p>
<div >
                <div >
                    <h2 style={{color:'lime'}}>Spices Events</h2>

                    {events && events.map && events.map((event, idx) => (
                        <div class="tile" style={{width:300}}>
                          <div className='card_img'>
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8PDg8PEA8PDxAPEBAQEBAPEBUQFhUWFhYWFRUdHSggGBolHRUVITEhJiorLi4uFx8zODMsNygtMCsBCgoKDg0OGxAQGy0lHyUtLS0tLjAtLS8tNSsvLS0tMi0tLS0tLS0tLS0tKy8tLSstLS0tLS0tLSstKy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQUDBAYCBwj/xABKEAACAQIDBAcEBgYGCQUAAAABAgADEQQSIQUxQVEGEyJhcYGRMqGxwQdCUnKS0RQjM0Ni8BZUgqLC0hdTY3OTstPh8RU0RIOj/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QANhEAAgECAwYDBgYBBQAAAAAAAAECAxESITEEQVFhcZGBsfATIqHB0eEUMkJSgvFyBSMzYpL/2gAMAwEAAhEDEQA/AOCiIliwiIgCIiAIiIAiIgCIiAIiIAiIgCJEmAIiIAiREAmIiAIiIAiIgCIiAIiIAiIgCIiAREsaWwsY3s4Wv502Ue8TZXopjzuwr+bUh8Wi5F0UsS8/oftH+qn/AI2G/wA8k9D9o/1Vv+Lhz/ji4uiiky5bopjxvwlTyNNvg01quw8YntYTED/6ah+Ai5Nyvieq1Jk9tWT76lfjPEAmJEmAIiIAkRLrYHR2riyXuKVBb56z+zpvC8z7hKznGEcUnZFoxcnZFOiliFUEsTYAAkk8gBvnRYDoZiqgz1cmGp7y1Zu1b7o3eZEtBtTC4EGns+mHqWytiaouTztuuPQdxlFjcdVrnNWqM53i50Hgu4eUoo16ua9xcWry/wDOi8c+SKyqU4ZfmfLJd9/gWq7F2ZR/bYurXbiKQsvqAf8Amkh9kLuwmIfvao493W/KUUTotjX6pyf8reVjl+Ke6Me1/MvTV2Qd+DxC961X/wCrIOytlVf2eIr4duVQZl8yR/ilHEPY1unNfyb87oLapb4x7fRlni+hVcLnw1SliqfA02Ct6E2/vTnK9FqbFKisjjerAqw8jLbDYl6TZ6Tsjc1JF/HmJe09vUsSopbSpLUXctdFtUXv01/D6Gc5Qr08/wA65ZS7aP4HWNSlP/q+676rxOIky/290ZbDr19BuvwpFxUWxZR/GBw7xpztOflqdSNSOKL9ea8S0ouLsyYiJcqIiIAiIgCIiAIiIAiIgH1NZlWY0mRJUyGwjHmfWZkrN9pvUzAsyrKkmymJfnfxAmdMUeIHwmos9rAN8YhTow9bETTxGxcFW1qYbDsT9bqkV/xAAz2s9rFy1ylxf0f4Cp7C1aJPGnUJHo+aUWO+jKoLnD4pG5LVQofxKTf0E71GI3GZkrHjrJuWxM+NbR6IY+hcthndR9aj+uHovaHmJREWJB0I0IOhHiJ+iEqA901Nr7Mw1dD+k0KdXgCyjP5ONR5GS5qKbeiLRk27WPkXRjYIxGaviD1eEo6ux0zkfVU8uZ8hqdNvbe2zXApUV6rCpYJSXs3A3FgPhwmbpLtFDlwmGGXDYfsgKTZnG833kA337zcyikbPSc2q1TX9K4Lj/k1v1Sy4ivVtenHxfH7eYkRE3GUREQBERAJiREAtNi7ZqYVtO3Sb9pSPskcxyPf6x0l2HTyDG4LXDP7dMDWk3HTgt+HDw3Vktuj21v0eoVqdrD1ezVQi4sdM1u7jzHlMe0UXf2tJe9vX7lw68H4N5mmhVt7k9OPD7cV45HKyZcdKdjfodfKutGoOsote/Z4rfiRceRB4ynkQnGcVKOjO8ouLaYiIlioiIgCIiAIiIAiIgH1RJlSY0mVJUyGVZlWY1mVZUkyrPYnhZ7EAypMizwsyLIJPazIsxrMgkknoSi6YbUOHoNlNnf8AVp3XGreQv52l7e0+a9O8Z1mJFO+lFAv9t+0fdl9JzlH2lSNPdq+i+rsjrB4YSqeC6v6K5zYiInpmQRM2Fwz1TlRb2GZiSFVV4szHRR3mbQo4ZNKlWpVPEUEAQf233+SykppO2r5K/lp4lowbz9euhXxLLFYOiaIr0GqWFQUnSrlzAlSwIZdCNDwldEJqauhKLi7MiJs4HDCq+Q1EpCxJeq2VRbv4nunvAbPqV2K07WBAZ2OVBc2W55k6AbzyiVSMb3dra+vT5BQk7WWppyZajYxRnFU3VHNMdVq1SoN6pfQAcWOiyMVhKagVgCKOiABiwqVhcsEe3sDS7cSDbfpRV4NpRzvw8uvp2s7XdGSV3l69fK+RWrSYqzBWKrbMwBKi+654TzLzaHWjD4ek1qaOGrsD2EGY2QAb2IVb2Fz27nnKRgLmxJHAkWPpc2k0qmNN83z0589fEicMOR0NJP07Z9Wgda+D/WUeZQA9n0zL+GcTOr6K4vqsXS+zUPVN4NoP72WUm38H1GKxFIaBKhyj+Bu0vuYTIo+zrSgtH7y8XZ/HPxNcZY6alvWT+XwNCIidSBERAEREAREQBERAPqyTIsxpMqSpkMqzKsxrMqSpJkWZFmNZkWCTKs9rPKz2sgGQT2s8CZBJJFX2T6T4/tqtnxGIY8a1S3gGIHuAn1+ru8xPi+J9t/vt8TGz515cor4t/QvUf+zHnJ/BIxwZMMpBsQQeIIsZvMxc7dpnDrSwq6A00q1SP3lRr7+arawHjKYS/odJz1aU8Rh6OIFMBVZ9Gt33B175YbHx+FxdQUHwFKnnDWZcptYEm5ygjdvmBVatCm3One122nHPna6em7wWWmtwp1ZrDO18kmnlyvmvV9WznqSviGTD0EsCxK0wb9q2rux3mw36ADcN98tHZWZa365Oto0nqtTVWcZVtcFxpm13C82KdQYTDsyE9fi7rTP1kw4Ns3cWPwmTZ1RMI1OnVNnqOjYjQnJSXtJTIGty2UsOAAHOWnUmlL2e7Te3Z+8892q4t5Ys1eIwi2sfjwV/y+O/hbOxixmzwvUYOmgbFMVes5+qzDSnfgADc+U8Y6pZuppMUoYZrFxoWq7mfvYkEKOAHAXM1quOZWz03Jqmp1tStYjM98wCg6hQddd5toLATXxGJeobub7zYBVUE6mygAC8vClO6xZ7/wCT1dnlplFblu0SpKcbO3pLdlzzlxeRZ7VxtMkLSfPQREWlSCsmgALdaxAJu2Y6E35iadDa1enmyVSocgkWW1wLCwtZbDTS26aUidI0IKGBq652ffddvNu129W7K1HVk3iWXT1pwW7cZKtRnYs7FmbUsxJJPeZ4kROpzPSOVIYb1IYeI1lp9IlO2KSoN1XDo3mCw+FpUmXXT/8A+Dz/AEX8pi2n/mpv/JfBP5GzZ/yT8PmcnERLlhERAEREAREQBERAPq9NSdwJ8BebKUH+yfPSb5qgTwcRyE53MtjEmGbkPWZVwzcxINd+C+4zw2IqfyogGwuHPMTIKJ5yvOJq8z+Ffyng4ysPrH8K/lJBbClPQQyk/wDUqw+t6qv5SRtioOCHyP5yLBMvgs9ASjXbxHtUwfBiPlM9Pb9L6yuvkGHxk2ZN0WlYdk+U+PbVp5K9dT9Ws48sxt7p9Xp7UoOLCqov9q6fGfPOmuFyYpmHs1lWoDwvbKfhfzlaLw7R1j8Yu/k7nWWdHo/NfVGjsOnmrfxLSrOn+8WmxTzuAfKZekLZ3o1L3NXDUGY8S1ipJ77rK/C4hqTpUQ2ZGDDlpwPdwlvVbC4gIod6BTPYPTV1Csc3Vq+YaBi1s1tGtynWonGsqjva1tL21eiu+FsuPjWm8VJw33vw4fdcstTDhOjuKqotREGRhdSXQXHO15Z4PZVTDBUcWr40mgGBBWlQGtRs27MR7hLLYW1aVOgEzNalVakCbG51YHQ2sbsBrw3y1qV6Vaw3kZit9NSrK1iP4WYec8vaNurY5U5JWvwz5Xu3yfO1r5mulSoK1pe96vbTouGpw2O21mqF6VKmhXsUqlmLrSXRLAnKptxAvKgm9ySSSbknUk8zPoVTZuFy3NCiBb6qKp8iJwmNCCrVWn7Csyrrfdwvxsbjym/YtopVLxpxast+eWizu9P6OO17PUp+9Np3fT5L1qYJEmRPQMQkyIgCTIiATYnQbzoPGW/0iPbEUaQ/dYZB6s35CYujmF67FUF4Bw7fdTtfK3nK/pVi+uxmIcG6h+rXwQBNO4kE+cw1ni2iK/bFvvZLyZsoZUpN72l2z+aKqJES5YmIiAIiIAiIgCIiAfdygG4D0nhjNCttU/VXzY/KaFbabHfUA7lt8tZztcy3LlzNd6qjew9RKJ8VfeWbxv8AObGHplxcggd2p3gX03C5GsibjTWKTyLQhKpLDFZm6+JT7XxmJsSvf6R1CKpZ7Le+W5YnLbQlQAQeY4c4VKQ7LWDX3BiDbQX3kAbzx37zMr26jz7fc1fgar4d/sYzXHfMTVQZtHCUybB2U2uFYA2Ntx10MxnZ72zKQwPO6n0nSG10Jfqt1ujnPY60VfDfpmajEcpja3fMtShVX907fdyH5zAzVBvw+I8qYPwM0e0h+5dzj7Kf7X2ZjaZNt4f9JwYca1MITfn1dtfcAf7Ji7H9zX86T/lN3ZmZGzdW+Ruy4ZGXTwO+ca1SLSlCSxRd1nrxXiro60oSTwyi7PJ5Pv4anz+WOH2cSmci5N7Je2nM/lN7a3R96VZjSpmpQvnGXUgfZI36fC0r22iQfZNxuvoAdfM+cptm3XhFUZa53Wq5cnxOEqUoPDNW9buRvYamUWouiiqoDL1b71uVsTvtczX2Zj3UEVDZ1fKib2NxcMCdw375iO3St7kseHIeJnrC4WsynEogqK+hUbyBpoeBnjTvLOTfVt37tnWlCdVOMc7Z/wBdToMRiAaYR2almBAdbGxI35tdd/Cbuxti7OFK+VHygB2qVCbH3D3Tl6LmqrU+0A1+xUUqyuNRp8x3zDROIqgBOrpjmxJb04e+aabnhcVLD429fI07PjnL31itk01drpfJX5lr0o2ZhKadbhiw7SqVF2pm5+qTqD6jThOYlyej+JqWL1Q9twZzlB5hQLA98r8fgalBgtQC5FwQbqR3Ge3sdSOHA6ilLrnbzficNqpSTxKDivn5djXkSYmwyCIm9sbZrYqqtJbgb3b7KcT48B3yspxhFyk7JZsmMXJpLVnUdA9lkpUrm6moDTptYXCj2mHnb8M5vbvQzFYS7oDiKQ16ymDnA/jTePEXHhPqWDpikqogAVVCgclG6bS1AZ51Jtt1JLOWduC3LwWvNmuclG0I6Lz1b7nwSnWU+2tx9pbK35H+dZsU8AtT9jUDH7Ddh/Q6H1n1TbnRLCYu7MnVVTr1tKysT/ENzeevfOC2x0JxeGu1Nf0imNc1IHOB309/peaVO+pTJ6OxR1tn1U9pCPd790wmmw4H0m7hdsVqXZJzAaFX1t3cxLShtXDVNKtIKeYHzFj8ZbIjFOOqOaidkmzsNV9h/LMCfQi8h+jSHcy+BS3vBkWXEe25HHROtPRbl1f4nEgdFTyT8bSMuJPtVwOTkzrf6KH7KfjaIy4k+1RZsxO8k+JkBgJgZ+JNh36CadfbFBPrZzyQZvfukmdJvQtRUkV8dkVQQezezKcrC/2WsbeBE5qt0ib93TA73JPuFvjNKtteu++oQOSgL/3nKrSjUjhZpoOdOWJHY0tr0hbV6YuSb5zc3BvlObMTYi7Hj3CejtWnq2db9nIFQKoy7jYdq/npw7vn+Zt4dweYdh85d7N2DUqUv0jE4irh6GmUlqj1HB4qgO7vPoRPNqbDGGbll08rHqQ2vFlh9fA6B9sX01fS18paw7usJAO8bm3m1p5fpQ1JQipQpIoCqrNuUDdvEpmw2GSoEpI+IXL7eIrOwPMhQyAADmrbwfGTXTQUaGBViRcChh7DjqCNdxvuOnDfOX4dO39fU6Oq+Hx+xtVemr8KlP8AsU3b36iadTpjWvpVqeVOkPiJfbO21s1ioqYHDglwmZKNNlB4k6ez3i4753GGo0qYvSp0qYte9NETTyEpL2VP81N919CuOq9GuzZwOyq21MTbq0xKKf3lanRpU/G51I8AZ1eB2PVQXxOMepzRFp0082y5j7pG1ukiUQT2bL9eobJ5a3M4PbHTGpW0p5nHNwUp+Sbz52lY0Z1n7kbImVTAvfl9Tusf0gw2HuqEMR9Wn2j5tu9TOe2ga2PpswpU6SM1lZkDVTbiG4Dh6zn9i7GrY49ZiXZcMNSFGQP/AAoBw7z8Z3OLxNOhSuAESmmVBuVVA+AEVaSpNRTvLy+/Imm1UV2vd5+tOZ842tsY0LdbULaiyDcTwnYfRpXY06tGsBmVs623ZT/NpWYzY1fEgYyky10YGyobuvO44nu3jdaOiGJ6nFoGuM+amwOlja4uPL3zf+HjU2SVneSzy3W3W6d/Axuu4V1FK0Xl1vv7nR9OaTJhxiKSZnoVFJG4lGOX3EqfIz5pQx1dOFW/MEfnPteMorVR6TezVRkbwIt858jq0mRmR9GRmRvvKbH3iU/02lSrQlGWq8n9yNrqzozU47/kKW3a40zYgeh+cyYjaz1lVHLtY3GdQLc9fl4TDE9OGxUoSUle6Ms9tqTi4u1mRJiX2x+i1fEEFwaVM8WHbP3U3+Z9871asKSxTdl603vojNCnKbtFXKnZ+BqYhxTpLdjv4Ko5seAn03YWx0wtMIurHV3I1ZvkBwE3dj7EpYZMiLYbzxZjzY8T7puNQ5H1mCcpV2nJWis0t7fF/JZ8XwNCtSVou8nq9y5L5vsYDPBmVqZHD5zC06M5EiqR3zItYHu8ZgM8mQQYdrbBwuL/AG9FWbhUHYqfiGvkdJx+1Po6YXOErg/wVhY/jUfLznaByNxmRcTzHpLFlJo+QY7Y2Mwt+so1FUfWUdZT8cwuB5zxhduVk3OSO43HobifZVrqeNvHSaWO2Lha+tXD0nJ+tlAb8Q1llNom6eqPneH6VMPaAPitvgflLKh0npneq+Tge4iW2K6A4NtUNel3K4df7wJ98ra/0df6vFeT0vmGk4lwIwx4mx/SCl9l/VfziVv+jyv/AK+h6VPyiLxIwL9xyNfEPUN3dm8Tp5DcJikyINFiZEmIBNLLmXPfJmGYDflvrbynb9McQxZVAz0Ki5qIQZkdQpJN9wIF7DuE4aWuy9u1aC9WQKtG9+qfcDzU/VP86TPtFJycZRzavl1O1Goo3T3mJqjU6ZzBwodi2VXZQDYFmUnmN/DU3ld+kGqqFOtUAlVZgzubcCwOlrXuSbd+kueu2a5zPSxFI3vYVHKhuJXRt/PSeQNlU9yV69tQhdyCdDwVOXFpxxNfol2+52sn+pdz30d2b+l1aYq1HdEY1HqXsco1ysAAF7VhrqN3GdV0o6WrRHU0bPUtYLfQD7VTkOS7zOTxnSKqymnQRcNT09gDOQO/5m575ZbL2CaSGqwzV8q1NbPbNfxs4IFyeenEzlUgk1Ot4R++iJU8sNPxZoYbYONxrCrUBOYM61KxyJlG/IvAeVvWdHgOi+FodqvU69lGYrlYU/wC5O/cd++0mvXqIKVMMUrlBYM2GN3bOXuL2JCgaDx7VjNJsbUAq9WXW16VPOlN26wKDqdQAQADffcWlZ16k1ZOy5fUrCMYu7V+p2WQbhwA00AAIuLW7pxv0h4kjqcONFYGo/eAeyPXXyEzUduXuKYc4hqeYZwyKci5SLMLL2tbAWtbXhNLpjVFalh6xKl1qPRbKbjVQ4t3ae+cNlpqNeN/Tsd6tRypSXrUoNnbRrYZs9Co1M8bHsn7ynQ+c6Wh0xpVCpxuFVnXVa9GwcEbtD/m8px83tibOOKrpRvlUm9RibBaY9o39w7yJ61WlTl70929ZPuvncwRnJZLtu+J9jpm4UjW6g6b7Hj75zG3ujfX1mr0qtJA6gvmJylh2SwI05efjLnGYtV/VFCwGVSLLlW+iq1zpfQC81ztFDZKtNbkWFNmQkgg6ZfC+ncZ4VCpVpTxQv23dD0atOFSNpNHNnorbV8ZhVHPN+dpjOz9nUta20BU/hoAN5XGb5TDtvouh/W4IMoY/sKgtr/s31HHQE+B4TlHQqSrAqwNiCLEHvE9mlUnWWVV80oxT+Z586UKbzgu7a+R1zdJ8Jh//Y4TM43Vq51HeBqfeso8X0ixlVxUbEVVYez1TtSVfAKR75VxOsKEISxavi833ZEptq2i4LJHW7N+kLG0rCr1eIX/AGi5H/EtveDOo2f9JGFewr06tBuJt1yeo7X92fKonWxycEz7vgduYTEWFHE0XJ+qHAf8B7Xum8yg7xPz0Rzm9g9sYmj+xxFZAOC1Gy/hvaRhK4D7m1BeUwthhwJ+M+VYXp5tBPaq06v+8pJ8VymWlD6Sqo/aYWk3elRk9xBkYSuBnethTzExthm7vWcrS+kmgfbw1ZfuNTf45Zt0vpBwLbxiE+9TU/8AKxkWZGFl02Hf7PvE89U43Bh4StXpzs8/vnHjRrfJTPf9NNn/ANY//Kt/lizIws371R9rzF5PWVfs+6VrdNdn/wBYPlRrn/DML9OcAN1So3hScfECLMYWXWet9hfX/vE57/SDg/sYk+CUv+pIizJws+ZxES53EREASJMQBERAPJnW4jaIqgPRDGpVdC4RWzoQoVhex5X4atynJzJRrPTZXpuUdSGBHAjUGca1L2iT3ovTlhunozqsazLTXEOXpnr7mmytTytZhmcmzZrabuPlNFAapNRXAqq1usNSoKrofZsqghtRbUG2m4DSpfadVr9YEqFjdiwUkm99bjXdzkLtAAMow1MB2ztZbXa97ntb7zH7Cot3kaLw/d5r5HQ4fEo51SqazJ1ozCk1QaZcqkFdUJN81x4EAzV6XYtGalQpEkU89RrkNYtZVGbjYA/yZUNtGqQQoVAbXsAAbbrqAAT43msBvJJJJuSdST3zrR2aSmpy3aFZ1Y4cMc76idj0bR8Ph0rU0JesXqZuyAFQmmuZiQAAczefdOOnZ9Hq64nDU8PmC1sPUzKGVXDoWLAWPHkQd4lttdqfK6v0/uxXZ1edt9nb10ublLHranUe4ohyAz2REcH6pKq7qwpmzeGhFxPdS+qhzke4CZlWmEUr7RNr2FibW0YC3Z0rsdtFQHNUVAqCzddSCOajFgAO0oIsrGwsNOBMx4F8Q5z0+spUbupzqRcBVy9WrLmR9GOmb2dzaWw4W89PXmdbpFvhkYPTRerULYFqTUj1ii3EADshid1xulVj9lfpOGastjVpFwuUDVaZs9M2JzW4G/Dvm1XooAHNzVV0durAU5cxUMNAQLG27nuN5c7Kc5hrdMisxq3FZdLgMtrbjvsN3HW1JVHB41qvVujOkI4vdej9X6o+WyZ7xBUvUNP9maj9X9zMcvutMc9w89ExEQBIkxAIkxEAiJMQBERAIiTEAREQBERAEREAREQBERAEiTEAiTEQCIkxAInulVZCGRirDcRPMiAXqdJ6xADsAdAW6unUuvK5Uke+Y620sPVfraorO9mVScSKiqCpU5EcWXffTcZTSCBymV7HTveOXQ0fiZfqSfVF5Q2zRonMnWOeHWVl08Mov/4HKa+O6Q1qyGklqVI3zBBlvff3+Z90qwo5CepMNkpxd3m+ZEtok1ZZdCAJMiTNJwEREAREQBERAEREAREQBERAEREAREQBERAEREAiIiCCYiIJEREAREQBIiIDJkSYgESYiARJiICIkxEBEREQQTERBIiIgCIiARJiICIiIgg//9k=" alt="" style={{margin:0}}/>
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





              {/* <div className="wrap">
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text"> 
                      xyz 
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <p className="animate-text">
                      xyz
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <h2 className="animate-text" />
                    <p className="animate-text">
                      xyz
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
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <p className="animate-text">
                      xyz
                    </p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <p className="animate-text"> xyz</p>
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="tile"> 
                  <img src="https://th.bing.com/th/id/R.961732e1afd6371b110237359de9cfba?rik=SoYFn3eASUOiNw&riu=http%3a%2f%2fimg.picturequotes.com%2f2%2f613%2f612880%2fcooking-quote-2-picture-quote-1.png&ehk=fMnuakGIXQVw4Ia%2fFopj5Mvio0tdJ4sRv7xasWxf5xA%3d&risl=&pid=ImgRaw&r=0" />
                  <div className="text">
                    <h1>xyz</h1>
                    <p className="animate-text"> xyz</p>
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
              <a className="link-1" href="mainevents" style={{padding:15,color:"aqua"}} >  Home </a>
              <a href="Pr" style={{padding:15,color:"aqua"}} >  Privacy Policy</a>
              <a href="Di" style={{padding:15,color:"aqua"}} >  Disclaimer </a>
              <a href="Abu" style={{padding:15,color:"aqua"}}>  About </a>
              <a href="https://www.instagram.com/aac_grietofficial"style={{padding:15,color:"aqua"}} >  Contact Us </a>
            </p>
            <p style={{padding:20,marginLeft:400,color:"red"}}>©2023 Clubee Website. All rights reserved.</p>
              </div>
            </footer>
          </section></section></section></div></div></div>
         
</>
  )
}
export default Sp