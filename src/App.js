import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';


import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  // day. hour, minutes, seconds
  const [day, setDay] = useState('00');
  const [hour, setHour] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const launchDate = new Date('March 30, 2022 00:00:00').getTime();
    
    interval = setInterval(() => {
      const difference =  launchDate- new Date().getTime();
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minute = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      const second = Math.floor(difference % (1000 * 60) / 1000);
  
      if (difference < 0) {
        clearInterval(interval.current)
      }
      else {
        setDay(days < 10 ? `0${days}` : days)
        setHour(hours < 10 ? `0${hours}` : hours)
        setMinutes(minute < 10 ? `0${minute}` : minute)
        setSeconds(second < 10 ? `0${second}` : second)
      }
    }, 1000)
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  }, [])

  // const handleFlip = useEffect(() => {
  //   return true
  // }, [day, hour, minutes, seconds])

  return (
      <div className='app'>
        <div className="container">
          <h1>We're launching soon</h1>
          <section className="timer">
            <div className="content">
              <div className="num">08
                <div className='top'><p>{day}</p></div>
                <div className='bottom'><p>{day}</p></div>
                <div className="line"></div>
              </div>
              <div className="time">Days</div>
            </div>
            <div className="content">
              <div className="num">23
                  <div className='top'><p>{hour}</p></div>
                  <div className='bottom'><p>{hour}</p></div>
                  <div className="line"></div>
              </div>
              <div className="time">Hours</div>
            </div>
            <div className="content">
              <div className="num">55
                  <div className='top'><p>{minutes}</p></div>
                  <div className='bottom'><p>{minutes}</p></div>
                  <div className="line"></div>
              </div>    
              <div className="time">Minutes</div>
            </div>
            <div className="content">
              <div className="num">41
                  <div className='top'><p>{seconds}</p></div>
                  <div className='bottom'><p>{seconds}</p></div>
                  <div className="line"></div>
              </div>   
              <div className="time">Seconds</div>
            </div>
          </section>
        </div>
        <div className="footer">
            <ul className="social">
              <li>
                <a href='#'><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></a>
              </li>
              <li>
                <a href='#'><FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              </li>
            </ul>
        </div>
      </div>
  );
}

export default App;

