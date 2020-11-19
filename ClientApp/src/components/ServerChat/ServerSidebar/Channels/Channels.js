import React from 'react'
import Channel from './Chanenel/Channel'
import './Channels.css'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import SettingsIcon from '@material-ui/icons/Settings'
import Tooltip from '@material-ui/core/Tooltip'

function Channels() {
    return (
        <div className="channels">
            <h2 className="channels__title">
                Channels
                <span>11</span>
            </h2>
            <div className="channels__list-wrapper">
                <ul className="channels__list">
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                    <li className="channels__item">
                        <Channel />
                        <div className="channels__settings">
                            <Tooltip title="Invite a participant" arrow placement="top">
                                <PersonAddIcon />
                            </Tooltip>
                            <Tooltip title="Configure channel" arrow placement="top">
                                <SettingsIcon /> 
                            </Tooltip>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Channels
