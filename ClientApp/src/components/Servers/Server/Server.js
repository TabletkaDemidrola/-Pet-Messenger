import React from 'react'
import './Server.css'
import { Avatar } from '@material-ui/core'

function Server(props) {
    return (
        <div className="server">
            <div className="server__active"></div>
            {props.homePage
                ? <Avatar src="" alt="">H</Avatar>
                : <Avatar src="" alt="">SC</Avatar>
            }
        </div>
    )
}

export default Server
