import React from 'react'
import Channels from './Channels/Channels'
import Members from './Members/Members'
import './ServerSidebar.css'

function ServerSidebar(props) {
    return (
        <div className="server-sidebar">
            <h2 className="server-sidebar__title">Server Name</h2>
            <Channels />
            <Members handleClick={props.handleClick} editMode={props.editMode} setEditMode={props.setEditMode}/>
        </div>
    )
}

export default ServerSidebar
