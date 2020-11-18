import React from 'react'
import './Dialogs.css'
import Dialog from './Dialog/Dialog'
import CloseIcon from '@material-ui/icons/Close'

function Dialogs() {
    return (
        <div className="dialogs">
            <h2 className="dialogs__title">
                Private messages
            </h2>
            <ul className="dialogs__list">
                <li className="dialogs__item">
                    <Dialog />
                    <CloseIcon />
                </li>
                <li className="dialogs__item">
                    <Dialog />
                    <CloseIcon />
                </li>
                <li className="dialogs__item">
                    <Dialog />
                    <CloseIcon />
                </li>
                <li className="dialogs__item">
                    <Dialog />
                    <CloseIcon />
                </li>
                <li className="dialogs__item">
                    <Dialog />
                    <CloseIcon />
                </li>
            </ul>
        </div>
    )
}

export default Dialogs
