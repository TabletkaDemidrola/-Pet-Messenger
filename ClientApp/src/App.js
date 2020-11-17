import React from 'react'
import Servers from './components/Servers/Servers'
import Profile from './components/Profile/Profile'
import General from './components/General/General'
import ServerChat from './components/ServerChat/ServerChat'
import Login from './components/Login/Login'
import './App.css'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

function App() {
    const userAuth = true
    return (
        <BrowserRouter>
            <div className="app">
                {userAuth
                    ?   <>
                            <Servers />
                            <main className="main-content">
                                <Route exact path='/' render={() => <Redirect to={'/general'} />} />
                                <Route path='/general' render={() => <General />} />
                                <Route path='/server-chat' render={() => <ServerChat />} />
                                {/* <Route path='/login' render={() => <Redirect to={'/general'} />} /> */}
                            </main>
                            <Profile /> 
                        </>
                    :   <Route path='/login' render={() => <Login />} />
                }
            </div>
        </BrowserRouter>
    )
}

export default App
