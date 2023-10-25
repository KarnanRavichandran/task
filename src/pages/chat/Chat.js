import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';


let socket;
const Chat = () => {
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessage] = useState([])

    const backendUrl = 'http://localhost:8080/'
    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const name = params.get('name');
        const room = params.get('room');
        console.log(name, room)
        setUser(name)
        setRoom(room)
        socket = io(backendUrl)
        socket.emit('join', { name: name, room: room }, (error) => {
            if (error) {
                alert(error)
            }
        })
        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('message', msg => {
            setMessage(prevMessage => [...prevMessage, msg])
        })
    }, [])


    return (
        <div>
       <ul>
       {
           messages.map((msg,idx)=>{
            <li key={idx}>{JSON.stringify(msg)}</li>
           })
        }
       </ul>
        </div> 
    )
}

export default Chat