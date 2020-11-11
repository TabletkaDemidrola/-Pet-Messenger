import React from 'react'
import Server from './Server/Server'
import './Servers.css'
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';

function Servers() {
    return (
        <div className="servers">
            <div className="servers__list">
                <Server />
                <Server />
                <Server />
                <Server />
            </div>
            <AddIcon />
            <SettingsIcon />
        </div>
    )
}

export default Servers
