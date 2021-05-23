import React from 'react'
import './ChatHeader.css'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import SearchIcon from '@material-ui/icons/Search'

function ChatHeader() {
    return (
        <div className="chat-header">
            <h2 className="chat-header__left">
                <span>#</span>general
            </h2>
            <div className="chat-header__right">
                <div className="chat-header__search">
                    <input placeholder="Search..." />
                    <SearchIcon />
                </div>
                <NotificationsNoneIcon />
                <MoreVertIcon />
            </div>
        </div>
    )
}

export default ChatHeader
