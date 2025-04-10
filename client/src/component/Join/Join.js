import React,{ useState } from 'react';
import { Link } from 'react-router';
import './Join.css';

const Join = () => {
const [name , setName]=useState('');
const [room , setRoom] = useState('');


  return (
 <div className="joinOuterContainer">
  <div className="joinInnerContainer">
    <hi className="heading">Join</hi>
    <div><input type="text" placeholder='Enter Name' className="joinInput" onChange={(e)=>setName(e.target.value)} /></div>
    <div><input type="text" placeholder='Enter Password' className="joinInput" onChange={(e)=>setRoom(e.target.value)} /></div>
    <Link onClick={e=>(!name || !room)?e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
    <button className="button mt-20" type='submit'>
     Sign in
    </button>
    </Link>
  </div>
 </div>
  )
}

export default Join