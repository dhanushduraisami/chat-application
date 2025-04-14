import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { useLocation } from 'react-router-dom';
import Infobox from '../Infobox/Infobox';
import './Chat.css'
let socket;
const Chat = () => {
   const [name , setName]=useState('');
   const [room , setRoom] = useState('');
   const [message,setMessage] = useState('');
   const [messages,setMessages] = useState([]);
   const ENDPOINT = 'localhost:5000';
  const location = useLocation();
  useEffect(() => {
      const {name , room}= queryString.parse(location.search);

      socket = io(ENDPOINT);
      
      setName(name);
      setRoom(room);
   
      socket.emit('join',{name,room},()=>{

      });
      return ()=>{
        socket.disconnect();

        socket.off();
      }
  },[location.search]); // Add location as a dependency

  useEffect(() => {
    socket.on('message',(message)=>{
      setMessages([...messages,message])
    },[messages])
  })

  const sendMessage = (event) =>{
  event.preventDefault();

  if(message){
    socket.emit('sendMessage',message,()=>setMessage('')); 
  }
  }

  console.log(message,messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <Infobox room = {room}/>
        {/* <input 
        value={message}
        onChange={(event)=> setMessage(event.target.value)}
        onKeyPress = {event => event.key==='Enter' ?sendMessage(event) : null} /> */}
      </div>
    </div>

  );
};

export default Chat;