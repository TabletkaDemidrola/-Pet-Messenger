import React from 'react'
import Channels from './Channels/Channels'
import Friends from './Friends/Friends'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="sidebar__title">Server Name</h2>
            <Channels />
            <Friends />
        </div>
    )
}

export default Sidebar
