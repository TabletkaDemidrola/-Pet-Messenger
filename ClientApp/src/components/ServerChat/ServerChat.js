import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'
import './ServerChat.css'

function ServerChat() {
    return (
        <div className="server-chat">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default ServerChat
