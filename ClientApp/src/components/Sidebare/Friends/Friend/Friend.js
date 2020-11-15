import React from 'react'
import './Friend.css'
import { Avatar } from '@material-ui/core'

function Friend() {
    return (
        <div className="friend">
            <div className="friend__status online"></div>
            <Avatar />
            <h4 className="friend__name">Friend Name</h4>
        </div>
    )
}

export default Friend
