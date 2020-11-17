import React from 'react'
import Chat from '../Chat/Chat'
import GeneralSidebar from './GeneralSidebar/GeneralSidebar'
import Friends from './Friends/Friends'
import './General.css'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

function General() {
    return (
        <div className="general">
            <GeneralSidebar /> 
            <Route path='/general/friends' render={() => <Friends />} />
            <Route path='/general/chat' render={() => <Chat />} />
        </div>
    )
}

export default General
