import React from 'react'
import onlineicon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';
import './Infobox.css'


const Infobox = ({room}) =>  (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img src={onlineicon} alt="online image" className="onlineIcon" />
        </div>
        <h3>{room}</h3>
        <div className="rightInnerContainer">
            <a href="/" ><img src={closeIcon} alt="close image" /></a>
        </div>
    </div>
  ) 


export default Infobox;