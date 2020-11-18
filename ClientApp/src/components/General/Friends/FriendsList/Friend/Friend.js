import React from 'react'
import './Friend.css'
import { Avatar } from '@material-ui/core'
import SmsIcon from '@material-ui/icons/Sms'
import CloseIcon from '@material-ui/icons/Close'
import Tooltip from '@material-ui/core/Tooltip'

function Friend() {
    return (
        <div className="friend">
            <div className="friend__status friend__status--online"></div>
            <Avatar />
            <h4 className="friend__name">Friend Name</h4>
            <Tooltip className="friend__action" title="Message" arrow placement="top">
                <SmsIcon />
            </Tooltip>
            <Tooltip className="friend__action" title="Remove from friends" arrow placement="top">
                <CloseIcon />
            </Tooltip>
        </div>
    )
}

export default Friend
