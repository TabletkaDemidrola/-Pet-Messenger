import React, { useState } from 'react'
import Servers from './components/Servers/Servers'
import Profile from './components/Profile/Profile'
import General from './components/General/General'
import ServerChat from './components/ServerChat/ServerChat'
import Settings from './components/Settings/Settings'
import Login from './components/Login/Login'
import './App.css'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

function App() {
    const userAuth = true

    let [settings, setSettings] = useState(false)

    function handleClick() {
        setSettings(!settings)
    }

    return (
        <BrowserRouter>
            <div className="app">
                {userAuth
                    ?   <>
                        {!settings 
                            ?
                                <>
                                    <Servers handleClick={handleClick}/>
                                    <main className="main-content">
                                        <Route exact path='/' render={() => <Redirect to={'/general'} />} />
                                        <Route path='/general' render={() => <General />} />
                                        <Route path='/server-chat' render={() => <ServerChat />} />
                                        {/* <Route render={() => <h1>Not Found Page</h1> } /> */}
                                    </main>
                                    <Profile /> 
                                </>
                            : 
                                <>
                                    <Route path='/settings' render ={() => <Settings handleClick={handleClick} settings={settings} setSettings={setSettings}/>} />
                                </>
                        }
                        </>
                    :   <Route path='/login' render={() => <Login />} />
                }
            </div>
        </BrowserRouter>
    )
}

export default App
