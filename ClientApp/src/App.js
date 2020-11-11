import React from 'react'
import Servers from './components/Servers/Servers'
import Sidebare from './components/Sidebare/Sidebare'
import Chat from './components/Chat/Chat'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import './App.css'

function App() {
    const user = false
    return (
        <div className="app">
            {!user 
            ?
                <>
                    <Servers />
                    <Sidebare />
                    <Chat />
                    <Profile /> 
                </>
            :
                <>
                    <Login />
                </>
            }
        </div>
    )
}

export default App
