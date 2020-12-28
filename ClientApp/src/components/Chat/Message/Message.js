import React from 'react'
import './Message.css'
import { Avatar } from '@material-ui/core'

function Message(props) {
    return (
        <li className="message">
            <Avatar onClick={props.handleClick} />
            <div className="message__info">
                <h4>
                    <span onClick={props.handleClick}>User Name</span>
                    <span className="message__timestamp">
                        data-time
                    </span>
                </h4>
                <p>This is a text message</p>
            </div>
        </li>
    )
}

export default Message
