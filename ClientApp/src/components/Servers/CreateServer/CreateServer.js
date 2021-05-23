import React from 'react'
import './CreateServer.css'
import { Avatar } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function CreateServer(props) {
    return (
        <div className="create-server">
            <Avatar className="create-server__icon" src="" alt="">{props.img}</Avatar>
            <h3>{props.text}</h3>
            <ArrowForwardIosIcon />
        </div>
    )
}

export default CreateServer
