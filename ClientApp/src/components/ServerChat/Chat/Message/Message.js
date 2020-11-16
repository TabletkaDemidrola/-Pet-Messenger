import React from 'react'
import './Message.css'
import { Avatar } from '@material-ui/core'

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    User Name
                    <span className="message__timestamp">
                        data-time
                    </span>
                </h4>
                <p>This is a text message</p>
            </div>
        </div>
    )
}

export default Message
