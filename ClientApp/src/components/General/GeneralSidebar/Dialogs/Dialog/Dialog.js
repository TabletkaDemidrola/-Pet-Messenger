import React from 'react'
import './Dialog.css'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@material-ui/core'

function Dialog() {
    return (
        <NavLink to={'/general/chat'} className="dialog">
            <div className="dialog__status dialog__status--online"></div>
            <Avatar />
            <h4 className="dialog__name">Dialog Name</h4>
        </NavLink>
    )
}

export default Dialog