import React from 'react'
import './Dialog.css'
import { Avatar } from '@material-ui/core'

function Dialog() {
    return (
        <div className="dialog">
            <div className="dialog__status dialog__status--online"></div>
            <Avatar />
            <h4 className="dialog__name">Dialog Name</h4>
        </div>
    )
}

export default Dialog