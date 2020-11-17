import React from 'react'
import Channels from './Channels/Channels'
import Friends from './Friends/Friends'
import './ServerSidebar.css'

function ServerSidebar() {
    return (
        <div className="server-sidebar">
            <h2 className="server-sidebar__title">Server Name</h2>
            <Channels />
            <Friends />
        </div>
    )
}

export default ServerSidebar
