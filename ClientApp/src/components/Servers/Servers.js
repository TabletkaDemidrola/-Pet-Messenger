import React from 'react'
import Server from './Server/Server'
import './Servers.css'
import AddIcon from '@material-ui/icons/Add'
import SettingsIcon from '@material-ui/icons/Settings'
import { NavLink } from 'react-router-dom'

function Servers() {
    return (
        <div className="servers">
            <nav className="servers__list">
                <ul className="servers__items">
                    <li className="servers__item"><NavLink to='/general/friends'><Server generalPage='true'/></NavLink></li>
                    <li className="servers__item"><NavLink to='/server-chat'><Server /></NavLink></li>
                    <li className="servers__item"><NavLink to='/server-chat'><Server /></NavLink></li>
                    <li className="servers__item"><NavLink to='/server-chat'><Server /></NavLink></li>
                    <li className="servers__item"><NavLink to='/server-chat'><Server /></NavLink></li>
                    <li className="servers__item"><NavLink to='/server-chat'><Server /></NavLink></li>
                </ul>
            </nav>
            <AddIcon />
            <SettingsIcon />
        </div>
    )
}

export default Servers
