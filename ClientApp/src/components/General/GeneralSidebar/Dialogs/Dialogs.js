import React from 'react'
import './Dialogs.css'
import Dialog from './Dialog/Dialog'
import { NavLink } from 'react-router-dom'

function Dialogs() {
    return (
        <div className="dialogs">
            <h2 className="dialogs__title">
                Private messages
            </h2>
            <div className="dialogs__list">
                <NavLink to={'/general/chat'}><Dialog /></NavLink>
                <NavLink to={'/general/chat'}><Dialog /></NavLink>
                <NavLink to={'/general/chat'}><Dialog /></NavLink>
                <NavLink to={'/general/chat'}><Dialog /></NavLink>
                <NavLink to={'/general/chat'}><Dialog /></NavLink>
            </div>
        </div>
    )
}

export default Dialogs
