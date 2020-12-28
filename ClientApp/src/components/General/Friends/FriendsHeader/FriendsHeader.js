import React from 'react'
import './FriendsHeader.css'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import SearchIcon from '@material-ui/icons/Search'

function FriendsHeader() {
    return (
        <div className="friends-header">
            <h2 className="friends-header__title">
               <SupervisedUserCircleIcon />
                All friends - 5
            </h2>
            <div className="friends-header__search">
                <input placeholder="Search..." />
                <SearchIcon />
            </div>
        </div>
    )
}

export default FriendsHeader
