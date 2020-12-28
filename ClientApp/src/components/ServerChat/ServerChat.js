import React from 'react'
import ServerSidebar from './ServerSidebar/ServerSidebar'
import Chat from '../Chat/Chat'
import './ServerChat.css'

function ServerChat() {
    return (
        <div className="server-chat">
            <ServerSidebar />
            <Chat />
        </div>
    )
}

export default ServerChat
