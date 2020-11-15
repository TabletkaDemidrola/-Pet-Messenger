import React from 'react'
import './ChatHeader.css'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import SearchIcon from '@material-ui/icons/Search'

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h2><span>#</span>general</h2>
            </div>
            <div className="chatHeader__right">
                <div className="chatHeader__search">
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
