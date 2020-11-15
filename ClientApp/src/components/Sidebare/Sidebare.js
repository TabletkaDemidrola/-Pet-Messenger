import React from 'react'
import Channels from './Channels/Channels'
import Friends from './Friends/Friends'
import './Sidebare.css'

function Sidebare() {
    return (
        <div className="sidebare">
            <h2 className="sidebare__title">Server Name</h2>
            <Channels />
            <Friends />
        </div>
    )
}

export default Sidebare
