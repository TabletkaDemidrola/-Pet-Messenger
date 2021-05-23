import React from 'react'
import './Member.css'
import { Avatar } from '@material-ui/core'

function Member(props){
    return (
        <li className="member" onClick={props.handleClick}>
            <div className="member__status member__status--online"></div>
            <Avatar />
            <h4 className="member__name">User Name</h4>
        </li>
    )
}

export default Member
