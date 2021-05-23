import React, { useState } from 'react'
import Server from './Server/Server'
import './Servers.css'
import on from 'classnames'
import AddIcon from '@material-ui/icons/Add'
import SettingsIcon from '@material-ui/icons/Settings'
import CloseIcon from '@material-ui/icons/Close'
import { NavLink } from 'react-router-dom'
import CreateServer from './CreateServer/CreateServer'

const Servers = (props) => {
    let [addChannel, setAddChannel] = useState(false)

    function handleClick() {
        setAddChannel(!addChannel)
    }

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
            <a onClick={handleClick}><AddIcon /></a>
            <NavLink to='/settings' onClick={props.handleClick}><SettingsIcon /></NavLink>

            <div className={on({"add-channel--active": addChannel},"add-channel")}>
                <div className="add-channel__content">
                    <CloseIcon onClick={handleClick}/>
                    <div className="add-channel__content__top">
                        <h2>Create server</h2>
                        <p>Your server is where you can hang out with your friends. Create a server and start chatting</p>
                    </div>
                    <div className="add-channel__content__center">
                        <CreateServer text={"Create My Own"} img={"CMO"} />
                        <h4>Start with a template</h4>
                        <CreateServer text={"Gaming"} img={"G"} />
                        <CreateServer text={"Friends"} img={"F"} />
                        <CreateServer text={"Study Group"} img={"SG"} />
                        <CreateServer text={"Artist & Creators"} img={"A&C"} />
                        <CreateServer text={"Clubs"} img={"C"} />
                        <CreateServer text={"Local Community"} img={"LC"} />
                    </div>
                    <div className="add-channel__content__bottom">
                        <h2>Have an invite already?</h2>
                        <button>Invite server</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servers
