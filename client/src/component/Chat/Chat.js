import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { useLocation } from 'react-router-dom';

let socket;
const Chat = () => {
  const location = useLocation(); // Use the useLocation hook
  const [name , setName]=useState('');
  const [room , setRoom] = useState('');
  const ENDPOINT = 'location:5000'
  
  useEffect(() => {
    if (location && location.search) {
      const {name,room} = queryString.parse(location.search);
      
      socket = io(ENDPOINT);
      setName(name);
      setRoom(room);

      console.log(socket);
    }
  }, [location]); // Add location as a dependency

  return (
    <h1>Chat</h1>
  );
};

export default Chat;