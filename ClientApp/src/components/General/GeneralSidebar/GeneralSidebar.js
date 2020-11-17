import React from 'react'
import Dialogs from './Dialogs/Dialogs'
import { NavLink } from 'react-router-dom'
import './GeneralSidebar.css'

function GeneralSidebar() {
    return (
        <div className="general-sidebar">
            <h2 className="general-sidebar__friends"><NavLink to='/general/friends'>Friends</NavLink></h2>
            <Dialogs />
        </div>
    )
}

export default GeneralSidebar
