import React, { useState } from 'react'
import ServerSidebar from './ServerSidebar/ServerSidebar'
import Chat from '../Chat/Chat'
import './ServerChat.css'

const ServerChat = (props) => {
    let [editMode, setEditMode] = useState(false)

    function handleClick() {
        setEditMode(!editMode)
    }

    return (
        <div className="server-chat">
            <ServerSidebar handleClick={handleClick} editMode={editMode} setEditMode={setEditMode}/>
            <Chat handleClick={handleClick} editMode={editMode} setEditMode={setEditMode}/>
        </div>
    )
}

export default ServerChat
