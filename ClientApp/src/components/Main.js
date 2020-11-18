import React from 'react'
import Servers from './Servers/Servers'
import Sidebare from './Sidebare/Sidebare'
import Chat from './Chat/Chat'
import Profile from './Profile/Profile'

function Main() {
    return (
        <div className="app">
            <Servers />
            <Sidebare />
            <Chat />
            <Profile />
        </div>
    )
}

export default Main