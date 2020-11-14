import React from 'react'
import Servers from './components/Servers/Servers'
import Sidebar from './components/Sidebar/Sidebar'
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
                    <Sidebar />
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
