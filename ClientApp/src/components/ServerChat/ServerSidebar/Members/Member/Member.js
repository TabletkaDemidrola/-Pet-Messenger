import React from 'react'
import './Member.css'
import { Avatar } from '@material-ui/core'

function Member() {
    return (
        <div className="member">
            <div className="member__status member__status--online"></div>
            <Avatar />
            <h4 className="member__name">User Name</h4>
        </div>
    )
}

export default Member
