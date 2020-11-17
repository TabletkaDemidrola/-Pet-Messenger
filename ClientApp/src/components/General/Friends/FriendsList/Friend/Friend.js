import React from 'react'
import './Friend.css'
import { Avatar } from '@material-ui/core'
import SmsIcon from '@material-ui/icons/Sms';

function Friend() {
    return (
        <div className="friend">
            <div className="friend__status friend__status--online"></div>
            <Avatar />
            <h4 className="friend__name">Friend Name</h4>
            <SmsIcon className="friend__send"/>
        </div>
    )
}

export default Friend
