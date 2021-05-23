import React, { useState} from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { NavLink } from 'react-router-dom'
import './Settings.css'
import Account from './Account/Account'
import Confidentiality from './Confidentiality/Confidentiality'
import Authorized from './Authorized/Authorized'
import Integration from './Integration/Integration'

function Settings(props) {
    let mark = 'account'

    function handleClick(m) {
        mark = m
    }

    return (
        <div className="settings">
            <div className="settings__wrapper">
                <ul className="settings__sidebar">
                    <h3>User Settings</h3>
                    <li className="settings__item settings__item--active" onClick={handleClick('account')}>My account</li>
                    <li className="settings__item" onClick={handleClick('confidentiality')}>Confidentiality</li>
                    <li className="settings__item" onClick={handleClick('authorized')}>Authorized applications</li>
                    <li className="settings__item" onClick={handleClick('integration')}>Integration</li>
                    <hr/>
                    <h3>Application settings</h3>
                    <li className="settings__item">Voice and video</li>
                    <li className="settings__item">Text and images</li>
                    <li className="settings__item">Notifications</li>
                    <li className="settings__item">Hotkeys</li>
                    <li className="settings__item">Tongue</li>
                    <li className="settings__item">Windows settings</li>
                    <li className="settings__item">Streamer mode</li>
                    <hr/>
                    <li className="settings__item">Log Out</li>
                </ul>
                <div className="settings__list">
                    {mark = 'account' && <Account /> }
                    {mark = 'confidentiality' ? <Confidentiality /> : null}
                    {mark = 'authorized' ? <Authorized /> : null}
                    {mark = 'integration' ? <Integration /> : null}
                    {/* <Confidentiality />
                    <Authorized />
                    <Integration />  */}
                </div>
                <NavLink to='/general' className="settings__close">
                    <CloseIcon onClick={() => {props.setSettings(!props.settings)}}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Settings
